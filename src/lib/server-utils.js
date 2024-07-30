// lib/server-utils.js
import { cookies } from "next/headers";
import { getServerSideUser } from "@/lib/payload-utils";

export async function fetchUserData() {
  const nextCookies = cookies();
  const { user } = await getServerSideUser(nextCookies);
  return user;
}
