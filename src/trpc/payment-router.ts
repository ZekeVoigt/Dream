import { TRPCError } from "@trpc/server";
import { getPayloadClient } from "../get-payload";
import { stripe } from "../lib/stripe";
import type Stripe from "stripe";
import { z } from "zod";
import { privateProcedure, router } from "./trpc";

// Define the Product type
type Product = {
  id: string;
  priceId: string | null | undefined;
  // other properties...
};

export const paymentRouter = router({
  createSession: privateProcedure
    .input(z.object({ productIds: z.array(z.string()) }))
    .mutation(async ({ ctx, input }) => {
      const { user } = ctx;
      const { productIds } = input;

      if (productIds.length === 0) {
        throw new TRPCError({ code: "BAD_REQUEST" });
      }

      const payload = await getPayloadClient();

      try {
        const { docs: products } = await payload.find({
          collection: "products",
          where: {
            id: {
              in: productIds,
            },
          },
        });

        // Cast products to the Product type
        const typedProducts: Product[] = products as Product[];

        // Filter products that have priceId defined
        const filteredProducts = typedProducts.filter((prod: Product) =>
          Boolean(prod.priceId)
        );

        const order = await payload.create({
          collection: "orders",
          data: {
            _isPaid: false,
            products: filteredProducts.map((prod: Product) => prod.id), // Map to array of string IDs
            user: user.id,
          },
        });

        const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

        filteredProducts.forEach((product: Product) => {
          line_items.push({
            price: product.priceId!,
            quantity: 1,
          });
        });

        const stripeSession = await stripe.checkout.sessions.create({
          success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/thank-you?orderId=${order.id}`,
          cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/cart`,
          payment_method_types: ["card"],
          mode: "payment",
          metadata: {
            userId: user.id,
            orderId: order.id,
          },
          line_items: line_items,
        });

        console.log("Stripe session created successfully:", stripeSession);

        return { url: stripeSession.url };
      } catch (err) {
        console.error("Error creating Stripe session:", err);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to create Stripe session.",
        });
      }
    }),

  pollOrderStatus: privateProcedure
    .input(z.object({ orderId: z.string() }))
    .query(async ({ input }) => {
      const { orderId } = input;

      const payload = await getPayloadClient();

      try {
        const { docs: orders } = await payload.find({
          collection: "orders",
          where: {
            id: {
              equals: orderId,
            },
          },
        });

        if (!orders.length) {
          throw new TRPCError({ code: "NOT_FOUND" });
        }

        const [order] = orders;

        return { isPaid: order._isPaid };
      } catch (err) {
        console.error("Error polling order status:", err);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to poll order status.",
        });
      }
    }),

  // Add createPaymentIntent
  createPaymentIntent: privateProcedure
    .input(
      z.object({
        amount: z.number(),
        currency: z.string(),
        accountId: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: input.amount,
        currency: input.currency,
        application_fee_amount: Math.round(input.amount * 0.1), // 10% fee
        transfer_data: {
          destination: input.accountId,
        },
      });

      return paymentIntent;
    }),
});
