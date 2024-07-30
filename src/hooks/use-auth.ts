import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Example: Check if user is authenticated
    const checkAuth = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me`, // Adjust endpoint as needed
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (res.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (err) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  const signOut = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/logout`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) throw new Error();

      toast.success("Signed out successfully");
      setIsAuthenticated(false);
      router.push("/sign-in");
      router.refresh();
    } catch (err) {
      toast.error("Couldn't sign out, please try again.");
    }
  };

  return { isAuthenticated, signOut };
};
