import { useState, SetStateAction, Key } from "react";
import AddToCartButton from "@/components/AddToCartButton";
import ImageSlider from "@/components/ImageSlider";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";
import { PRODUCT_CATEGORIES } from "@/config";
import { getPayloadClient } from "@/get-payload";
import { formatPrice } from "@/lib/utils";
import { Check, Shield, ShieldCheck, Star, StarIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Product } from "@/payload-types"; // Import Product type
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: {
    productId: string;
  };
}

const BREADCRUMBS = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Store", href: "/store" },
];

const Page = async ({ params }: PageProps) => {
  const { productId } = params;

  const payload = await getPayloadClient();

  const { docs: products } = await payload.find({
    collection: "products",
    limit: 1,
    where: {
      id: {
        equals: productId,
      },
      approvedForSale: {
        equals: "approved",
      },
    },
  });

  const [product] = products;

  if (!product) return notFound();

  // Assert the product type
  const typedProduct = product as unknown as Product;

  const label = PRODUCT_CATEGORIES.find(
    ({ value }) => value === typedProduct.category
  )?.label;

  const validUrls = typedProduct.images
    .map(({ image }) => (typeof image === "string" ? image : image.url))
    .filter(Boolean) as string[];

  return (
    <>
      <MaxWidthWrapper className="bg-white">
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            {/* Product Details */}
            <div className="lg:max-w-lg lg:self-end">
              <ol className="flex items-center space-x-2">
                {BREADCRUMBS.map((breadcrumb, i) => (
                  <li key={breadcrumb.href}>
                    <div className="flex items-center text-sm">
                      <Link
                        href={breadcrumb.href}
                        className="font-medium text-sm text-muted-foreground hover:text-gray-900"
                      >
                        {breadcrumb.name}
                      </Link>
                      {i !== BREADCRUMBS.length - 1 ? (
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="ml-2 h-5 w-5 flex-shrink-0 txt-gray-300"
                        >
                          <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                        </svg>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-4">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {typedProduct.name}
                </h1>
              </div>

              <section className="mt-4">
                <div className="flex items-center">
                  <p className="font-medium text-gray-900">
                    {formatPrice(typedProduct.price)}
                  </p>

                  <div className="ml-4 border-l text-muted-foreground border-gray-300 pl-4">
                    {label}
                  </div>
                </div>

                <div className="mt-4 space-y-6">
                  <p className="text-base text-muted-foreground">
                    {typedProduct.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center">
                  <Check
                    aria-hidden="true"
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                  />
                  <p className="ml-2 text-small text-muted-foreground">
                    Eligible for instant delivery
                  </p>
                </div>

                {/* Link */}
              </section>
            </div>

            {/* Product images */}
            <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
              <div className="aspect-square rounded-lg">
                <ImageSlider urls={validUrls} />
              </div>
            </div>

            {/* Add to cart */}
            <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-2-lg lg:self-start">
              <div>
                <div className="mt-10 text-white border-zinc-900 rounded-3xl">
                  <AddToCartButton product={typedProduct} />
                </div>
                <div className="mt-6 text-center">
                  <div className="group inline-flex text-sm text-medium">
                    <ShieldCheck
                      aria-hidden="true"
                      className="mr-2 h-5 w-5 flex-shrink-0 text-gray-400"
                    />
                    <span className="text-muted-foreground hover:text-gray-700">
                      Secure payments with Stripe
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-36">
          <div className="p-5 border rounded-3xl border-white bg-zinc-100 w-full max-w-5xl">
            <h1 className="font-bold text-4xl text-zinc-900 text-center mb-8">
              Features for {typedProduct.name}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.isArray(typedProduct.product_features) &&
              typedProduct.product_features.length > 0 ? (
                typedProduct.product_features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-white text-zinc-500 p-6 rounded-lg shadow-md"
                  >
                    {feature.icon && (
                      <span className="text-2xl mr-4">
                        {feature.icon === "livestreams" && "🎥"}
                        {feature.icon === "challenge" && "🏆"}
                        {feature.icon === "education" && "📚"}
                        {feature.icon === "charts" && "📊"}
                        {feature.icon === "memecoins" && "💰"}
                        {feature.icon === "sessions" && "👤"}
                        {feature.icon === "sports_bets" && "🏅"}
                      </span>
                    )}
                    <span className="text-lg">
                      {feature.icon === "livestreams" && "Livestreams"}
                      {feature.icon === "challenge" && "$1k to $10k Challenge"}
                      {feature.icon === "education" && "Trading Education"}
                      {feature.icon === "charts" && "Comprehensive Charts"}
                      {feature.icon === "memecoins" && "Memecoins"}
                      {feature.icon === "sessions" && "One-on-One Sessions"}
                      {feature.icon === "sports_bets" && "Daily Sports Bets"}
                    </span>
                  </div>
                ))
              ) : (
                <p className="col-span-full p-3 text-center text-gray-500">
                  No features available for this product.
                </p>
              )}
            </div>
          </div>
        </div>

        <ProductReel
          href="/store"
          query={{ category: typedProduct.category, limit: 4 }}
          title={`Similar ${label} Products`}
          subtitle={`Browse similar high-quality ${label} products just like "${typedProduct.name}"`}
        />
      </MaxWidthWrapper>

      {/* ADD FUNCTIONING FOR TESIMONIALS & STARS (7/17/24) thinking using payload...? */}

      <section className="bg-background py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-2xl flex justify-center font-bold md:text-3xl lg:text-4xl">
              What Our Customers Say about "{typedProduct.name}"
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="flex flex-col items-start rounded-lg bg-card p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mb-4 flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <Avatar className="h-10 w-10 border">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-base font-semibold">Sarah Johnson</h3>
                    <p className="text-sm text-muted-foreground">
                      CEO, Acme Inc
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <StarIcon className="h-5 w-5 fill-primary" />
                  <StarIcon className="h-5 w-5 fill-primary" />
                  <StarIcon className="h-5 w-5 fill-primary" />
                  <StarIcon className="h-5 w-5 fill-primary" />
                  <StarIcon className="h-5 w-5 fill-primary" />
                </div>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                "I've been using this product for months and it has completely
                transformed my workflow. The intuitive design and powerful
                features have made my job so much easier."
              </p>
            </div>
            <div className="flex flex-col items-start rounded-lg bg-card p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mb-4 flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <Avatar className="h-10 w-10 border">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-base font-semibold">Alex Smith</h3>
                    <p className="text-sm text-muted-foreground">
                      Product Manager, Globex Inc
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <StarIcon className="h-5 w-5 fill-primary" />
                  <StarIcon className="h-5 w-5 fill-primary" />
                  <StarIcon className="h-5 w-5 fill-primary" />
                  <StarIcon className="h-5 w-5 fill-primary" />
                  <StarIcon className="h-5 w-5 fill-primary" />
                </div>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                "This product has been a game-changer for my team. The
                collaboration features and seamless integration have made our
                workflow so much more efficient."
              </p>
            </div>
            <div className="flex flex-col items-start rounded-lg bg-card p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mb-4 flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <Avatar className="h-10 w-10 border">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-base font-semibold">Emily Parker</h3>
                    <p className="text-sm text-muted-foreground">
                      Marketing Manager, Stark Industries
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <StarIcon className="h-5 w-5 fill-primary" />
                  <StarIcon className="h-5 w-5 fill-primary" />
                  <StarIcon className="h-5 w-5 fill-primary" />
                  <StarIcon className="h-5 w-5 fill-primary" />
                  <StarIcon className="h-5 w-5 fill-primary" />
                </div>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                "I was hesitant to try this product at first, but I'm so glad I
                did. The customer support has been outstanding, and the features
                have exceeded my expectations."
              </p>
            </div>
            <div className="flex flex-col items-start rounded-lg bg-card p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mb-4 flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <Avatar className="h-10 w-10 border">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-base font-semibold">Michael Chen</h3>
                    <p className="text-sm text-muted-foreground">
                      Software Engineer, Stark Industries
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <StarIcon className="h-5 w-5 fill-primary" />
                  <StarIcon className="h-5 w-5 fill-primary" />
                  <StarIcon className="h-5 w-5 fill-primary" />
                  <StarIcon className="h-5 w-5 fill-primary" />
                  <StarIcon className="h-5 w-5 fill-primary" />
                </div>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                "This product has completely transformed the way my team
                collaborates. The intuitive interface and powerful features have
                made our work so much more efficient and enjoyable."
              </p>
            </div>
          </div>

          {/* ADD FUNCTIONING FOR LEAVING A REVIEW */}

          <div className="flex justify-center mt-10">
            <Button className="bg-zinc-900 text-white rounded-3xl">
              Leave A Review
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
