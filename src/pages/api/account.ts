import { stripe } from "@/lib/stripe";

export default async function handler(
  req: { method: string },
  res: {
    json: (arg0: { account?: any; error?: any }) => void;
    status: (arg0: number) => void;
  }
) {
  if (req.method === "POST") {
    try {
      const account = await stripe.accounts.create({
        controller: {
          stripe_dashboard: {
            type: "none",
          },
          fees: {
            payer: "application",
          },
        },
        capabilities: {
          card_payments: { requested: true },
          transfers: { requested: true },
        },
        country: "US",
      });

      res.json({ account: account.id });
    } catch (error) {
      console.error(
        "An error occurred when calling the Stripe API to create an account:",
        error
      );
      res.status(500);
      //@ts-expect-error
      res.json({ error: error.message });
    }
  }
}
