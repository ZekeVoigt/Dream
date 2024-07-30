import { stripe } from "../../lib/stripe";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const account = await stripe.accounts.create({});

      res.json({ account: account.id });
    } catch (error) {
      console.error(
        "An error occurred when calling the Stripe API to create an account:",
        error
      );
      res.status(500);
      res.json({ error: error.message });
    }
  }
}
