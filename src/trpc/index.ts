import { z } from "zod";
import { authRouter } from "./auth-router";
import { publicProcedure, router } from "./trpc";
import { QueryValidator } from "../lib/validator/query-vaildator";
import { getPayloadClient } from "../get-payload";
import { paymentRouter } from "./payment-router";

export const appRouter = router({
  auth: authRouter,
  payment: paymentRouter,

  getInfiniteProducts: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100),
        cursor: z.number().nullish(),
        query: QueryValidator.extend({ search: z.string().optional() }),
      })
    )
    .query(async ({ input }) => {
      const { query, cursor } = input;
      const { sort, limit, search, ...queryOpts } = query;

      const payload = await getPayloadClient();

      const parsedQueryOpts: Record<
        string,
        { equals: string } | { contains: string; mode?: "insensitive" }
      > = {};

      Object.entries(queryOpts).forEach(([key, value]) => {
        parsedQueryOpts[key] = {
          equals: value,
        };
      });

      const searchCriteria = [];

      if (search) {
        searchCriteria.push(
          { name: { contains: search, mode: "insensitive" } },
          { category: { contains: search, mode: "insensitive" } },
          { description: { contains: search, mode: "insensitive" } }
        );
      }

      console.log("Final Query Options:", parsedQueryOpts);

      const page = cursor || 1;

      const {
        docs: items,
        hasNextPage,
        nextPage,
      } = await payload.find({
        collection: "products",
        where: {
          approvedForSale: {
            equals: "approved",
          },
          ...(searchCriteria.length > 0 ? { or: searchCriteria } : {}),
          ...parsedQueryOpts,
        },
        sort,
        depth: 1,
        limit,
        page,
      });

      console.log("Payload Query Results:", items);
      console.log("Search term was:", search);

      return {
        items,
        nextPage: hasNextPage ? nextPage : null,
      };
    }),
});

export type AppRouter = typeof appRouter;
