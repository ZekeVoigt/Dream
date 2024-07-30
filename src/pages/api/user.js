// pages/api/user.js
import { getServerSideUser } from "@/lib/payload-utils";
import { cookies } from "next/headers";

export default async function handler(req, res) {
  const nextCookies = cookies();
  const { user } = await getServerSideUser(nextCookies);
  res.status(200).json({ user });
}
