// src/components/StripeProvider.tsx
"use client";

import React, { useState } from "react";
import { loadConnectAndInitialize } from "@stripe/connect-js/pure";
import {
  ConnectPayments,
  ConnectComponentsProvider,
} from "@stripe/react-connect-js";

export default function StripeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [stripeConnectInstance] = useState(() => {
    const fetchClientSecret = async () => {
      const response = await fetch("/api/account_session", { method: "POST" });
      if (!response.ok) {
        const { error } = await response.json();
        console.log("An error occurred: ", error);
        return undefined;
      } else {
        const { client_secret: clientSecret } = await response.json();
        return clientSecret;
      }
    };
    return loadConnectAndInitialize({
      publishableKey:
        "pk_test_51P59T605fNcBdPQg6Tu8JrgiYUNsDxTFIuyeeKudbf221LZaFamdhONLuAiakjayTLSzgBG3ctLCbfH5r6hyWy5p00sYa7ZjaV",
      fetchClientSecret: fetchClientSecret,
      appearance: {
        overlays: "dialog",
        variables: {
          colorPrimary: "#625afa",
        },
      },
    });
  });

  return (
    <ConnectComponentsProvider connectInstance={stripeConnectInstance}>
      {children}
      <ConnectPayments />
    </ConnectComponentsProvider>
  );
}
