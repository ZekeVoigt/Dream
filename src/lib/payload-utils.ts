import { User } from "../payload-types";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { NextRequest } from "next/server";

export const getServerSideUser = async (
  cookies: NextRequest["cookies"] | ReadonlyRequestCookies
) => {
  console.log("Cookies:", cookies);

  const token = cookies.get("payload-token")?.value;

  if (!token) {
    console.error("No token found in cookies");
    return { user: null };
  }

  console.log("Fetching user data with token:", token);
  console.log("Server URL:", process.env.NEXT_PUBLIC_SERVER_URL);

  try {
    const meRes = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me`,
      {
        headers: {
          Authorization: `JWT ${token}`,
        },
      }
    );

    if (!meRes.ok) {
      const errorText = await meRes.text();
      console.error(
        `API request failed with status ${meRes.status}: ${errorText}`
      );
      return { user: null };
    }

    const contentType = meRes.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      console.error("Received non-JSON response from the API");
      return { user: null };
    }

    const { user } = (await meRes.json()) as {
      user: User | null;
    };

    return { user };
  } catch (error) {
    console.error("Failed to fetch user data:", error);
    return { user: null };
  }
};
