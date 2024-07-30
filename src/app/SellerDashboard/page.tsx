// src/pages/sellerdashboard.tsx
import React from "react";
import { AuthProvider } from "@/context/AuthContext";
import SellerDashboard from "@/components/sellerdashboard/SellerDashboard";
import ProtectedRoute from "@/components/ProtectedRoute";

const SellerDashboardPage: React.FC = () => {
  return (
    <AuthProvider>
      <ProtectedRoute>
        <SellerDashboard cardContent={[]} />
      </ProtectedRoute>
    </AuthProvider>
  );
};

export default SellerDashboardPage;
