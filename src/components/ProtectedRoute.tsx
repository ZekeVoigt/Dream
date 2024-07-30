// src/components/ProtectedRoute.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated, checkAuth } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      await checkAuth();
      setIsLoading(false);
    };

    verifyAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/sign-in"); // Redirect to the login page if not authenticated
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-96 p-8 bg-white shadow-lg rounded-lg text-center">
          <h1 className="text-3xl font-bold mb-4">
            Checking authentication...
          </h1>
          <p className="text-xl">Please wait...</p>
        </div>
      </div>
    );

  if (!isAuthenticated)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-96 p-8 bg-white shadow-lg rounded-lg text-center">
          <h1 className="text-3xl font-bold mb-4">You are not Signed-in</h1>
          <p className="text-xl">Redirecting...</p>
        </div>
      </div>
    );

  return <>{children}</>;
};

export default ProtectedRoute;
