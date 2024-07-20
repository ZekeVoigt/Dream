"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";
import { useSearchParams } from "next/navigation";
import { Package, ShieldCheck, HeartHandshake } from "lucide-react";
import { Filter } from "@/components/component/filter";

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
    Icon: HeartHandshake,
    description:
      "Empower positive change with us – 5% of every sale goes to charities chosen by you, making a meaningful impact on causes that matter to you!",
  },
];

export default function Store() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("search") || "";

  console.log("Search Term in Store Page:", searchTerm);

  return (
    <>
      <div className=" ">
        <div className="flex justify-center ">
          <div className="mt-20">
            <Filter />
          </div>

          <MaxWidthWrapper className="ml-1 mr-32">
            <div>
              <div>
                <div className="w-full h-full">
                  <ProductReel
                    query={{ sort: "desc", limit: 20, search: searchTerm }}
                    title="Welcome To The Store"
                  />

                  <div className="p-5 border rounded-3xl border-white bg-zinc-100 mt-5">
                    <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
                      {perks.map((perk) => (
                        <div
                          key={perk.name}
                          className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                        >
                          <div className="md:flex-shrink-0 flex justify-center">
                            <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-200 text-black">
                              {<perk.Icon className="w-1/3 h-1/3" />}
                            </div>
                          </div>

                          <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                            <h3 className="text-base font-medium text-gray-900">
                              {perk.name}
                            </h3>
                            <p className="mt-3 text-sm text-muted-foreground">
                              {perk.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      </div>
      <section className="h-screen"></section>
    </>
  );
}
