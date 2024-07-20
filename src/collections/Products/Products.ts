import {
  AfterChangeHook,
  BeforeChangeHook,
} from "payload/dist/collections/config/types";
import { PRODUCT_CATEGORIES } from "../../config";
import { Access, CollectionConfig } from "payload/types";
import { Product, User } from "../../payload-types";
import { stripe } from "../../lib/stripe";

const addUser: BeforeChangeHook<Product> = async ({ req, data }) => {
  const user = req.user;

  return { ...data, user: user.id };
};

const syncUser: AfterChangeHook<Product> = async ({ req, doc }) => {
  const fullUser = await req.payload.findByID({
    collection: "users",
    id: req.user.id,
  });

  if (fullUser && typeof fullUser === "object") {
    const { products } = fullUser;

    const allIDs = [
      ...(products?.map((product) =>
        typeof product === "object" ? product.id : product
      ) || []),
    ];

    const createdProductIDs = allIDs.filter(
      (id, index) => allIDs.indexOf(id) === index
    );

    const dataToUpdate = [...createdProductIDs, doc.id];

    await req.payload.update({
      collection: "users",
      id: fullUser.id,
      data: {
        products: dataToUpdate,
      },
    });
  }
};

const isAdminOrHasAccess =
  (): Access =>
  ({ req: { user: _user } }) => {
    const user = _user as User | undefined;

    if (!user) return false;
    if (user.role === "admin") return true;

    const userProductIDs = (user.products || []).reduce<Array<string>>(
      (acc, product) => {
        if (!product) return acc;
        if (typeof product === "string") {
          acc.push(product);
        } else {
          acc.push(product.id);
        }

        return acc;
      },
      []
    );

    return {
      id: {
        in: userProductIDs,
      },
    };
  };

export const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: isAdminOrHasAccess(),
    update: isAdminOrHasAccess(),
    delete: isAdminOrHasAccess(),
  },
  hooks: {
    afterChange: [syncUser],
    beforeChange: [
      addUser,
      async (args) => {
        if (args.operation === "create") {
          const data = args.data as Product;

          const createdProduct = await stripe.products.create({
            name: data.name,
            default_price_data: {
              currency: "USD",
              unit_amount: Math.round(data.price * 100),
            },
          });

          const updated: Product = {
            ...data,
            stripeId: createdProduct.id,
            priceId: createdProduct.default_price as string,
          };

          return updated;
        } else if (args.operation === "update") {
          const data = args.data as Product;

          const updatedProduct = await stripe.products.update(data.stripeId!, {
            name: data.name,
            default_price: data.priceId!,
          });

          const updated: Product = {
            ...data,
            stripeId: updatedProduct.id,
            priceId: updatedProduct.default_price as string,
          };

          return updated;
        }
      },
    ],
  },
  fields: [
    {
      name: "user",
      type: "relationship",
      relationTo: "users",
      required: true,
      hasMany: false,
      admin: {
        condition: () => false,
      },
    },
    {
      name: "Info",
      type: "text",
      label: "Please Read First",
      admin: {
        placeholder:
          "Products are reveiwed once (1 time) a day at a certain time depending on our calander (see here). For help contact our dashboard (see here - https://discord.gg/wPq5mE5).",
      },
    },
    {
      name: "name",
      label: "Name",
      type: "text",
      admin: {
        placeholder: "Example: Marketing 101",
      },
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      label: "Product details",
      admin: {
        placeholder:
          "'Product details' refer to specific information that describes a product comprehensively. It typically includes essential attributes such as dimensions, materials used, How you got it, and any other relevant specifications that provide a clear understanding of what the product is and its capabilities. This information helps potential buyers make informed decisions before purchasing.",
      },
    },
    {
      name: "product_features",
      type: "array",
      label: "Product Features",
      required: true,
      fields: [
        {
          name: "icon",
          type: "select",
          options: [
            { label: "🎥 Livestreams", value: "livestreams" },
            { label: "🤑 $1k to $10k Challenge", value: "challenge" },
            { label: "🧑‍💼 Trading Education", value: "education" },
            { label: "📈 Comprehensive Charts", value: "charts" },
            { label: "🪙 Memecoins", value: "memecoins" },
            { label: "One-on-One Sessions", value: "sessions" },
            { label: "🏈 Daily Sports Bets", value: "sports_bets" },
          ],
          required: true,
          label: "Product Features",
        },
      ],
    },
    {
      name: "price",
      label: "Price in USD",
      min: 0,
      max: 1000,
      type: "number",
      required: true,
    },
    {
      name: "saleType",
      label: "Sale Type",
      type: "select",
      options: [
        {
          label: "One Time Sale",
          value: "single",
        },
        {
          label: "Unlimited Sale",
          value: "unlimited",
        },
      ],
      required: true,
    },
    {
      name: "category",
      label: "Product Category",
      type: "select",
      options: PRODUCT_CATEGORIES.map(({ label, value }) => ({ label, value })),
      required: true,
    },

    {
      name: "product_files",
      label: "Product file(s)",
      type: "array",
      required: true,
      fields: [
        {
          name: "file",
          label: "Product File",
          type: "relationship",
          relationTo: "product_files",
          hasMany: false,
        },
        {
          name: "separator",
          label: "Or",
          type: "text",
          admin: {
            description: "<strong>Or</strong>",
          },
        },
        {
          name: "link",
          label: "Link",
          type: "text",
          admin: {
            placeholder: "http://example.com/your-product-link",
          },
        },
      ],
    },
    {
      name: "approvedForSale",
      label: "Product Status",
      type: "select",
      defaultValue: "pending",
      access: {
        create: ({ req }) => req.user.role === "admin",
        read: ({ req }) => req.user.role === "admin",
        update: ({ req }) => req.user.role === "admin",
      },
      options: [
        {
          label: "Pending verification",
          value: "pending",
        },
        {
          label: "Approved",
          value: "approved",
        },
        {
          label: "Denied",
          value: "denied",
        },
      ],
    },
    {
      name: "priceId",
      access: {
        create: () => false,
        read: () => false,
        update: () => false,
      },
      type: "text",
      admin: {
        hidden: true,
      },
    },
    {
      name: "stripeId",
      access: {
        create: () => false,
        read: () => false,
        update: () => false,
      },
      type: "text",
      admin: {
        hidden: true,
      },
    },
    {
      name: "images",
      type: "array",
      label: "Product images",
      minRows: 1,
      maxRows: 4,
      required: true,
      labels: {
        singular: "Image",
        plural: "Images",
      },
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
};
