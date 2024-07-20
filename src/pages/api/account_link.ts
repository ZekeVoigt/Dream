import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "@/lib/stripe";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Received request:", req.method, req.body);

  if (req.method === "POST") {
    try {
      const { account } = req.body;
      console.log("Creating account link for account:", account);

      const accountLink = await stripe.accountLinks.create({
        account: account,
        refresh_url: `${req.headers.origin}/refresh/${account}`,
        return_url: `${req.headers.origin}/return/${account}`,
        type: "account_onboarding",
      });

      console.log("Account link created:", accountLink.url);
      res.status(200).json({ url: accountLink.url });
    } catch (error) {
      console.error("Error creating account link:", error);
      //@ts-expect-error
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
