"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";
import { useSearchParams } from "next/navigation";
import { Package, ShieldCheck, HandHelping } from "lucide-react";
import { ChangeEvent, Children, useState } from "react";
import { Products } from "@/collections/Products/Products";

const perks = [
  {
    name: "Instant Delivery",
    Icon: Package,
    description:
      "Experience swift and seamless product delivery straight to your inbox, ensuring a prompt and efficient consumer experience.",
  },
  {
    name: "Guaranteed Quality",
    Icon: ShieldCheck,
    description:
      "Elevate your digital experience with our premium selection of thoughtfully crafted and quality-assured products.",
  },
  {
    name: "Giving Back",
    Icon: HandHelping,
    description:
      "Empower positive change with us – 5% of every sale goes to charities chosen by you, making a meaningful impact on causes that matter to you!",
  },
];

function isProductAvailable(arr1?: string[], arr2?: string[]) {
  if (arr1 && arr2) {
    return arr1.some((item) => arr2.includes(item));
  }
}

export default function Store() {
  return (
    <>
      <MaxWidthWrapper>
        <ProductReel
          title={"All Products"}
          query={{ sort: "desc", limit: 100 }}
        />

        <div className="p-5 border rounded-3xl border-white bg-zinc-100">
          <div className="grid grid-cols-1 gap-y-12 sm:gird-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perks) => (
              <div
                key={perks.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-200 text-black">
                    {<perks.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>

                <div className="mt-6 md:-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perks.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perks.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>

      <section className="h-screen"></section>
      <section className="h-screen"></section>
    </>
  );
}
