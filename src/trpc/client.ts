import { createTRPCReact } from "@trpc/react-query";
import type { appRouter } from "./";

export const trpc = createTRPCReact<appRouter>({});
