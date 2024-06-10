"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowDownToLine,
  CheckCircle,
  HandHelping,
  SplitSquareHorizontalIcon,
} from "lucide-react";
import ProductReel from "@/components/ProductReel";

import { ContainerScroll } from "@/components/ui/scroll-animation";

import Footer from "@/components/footer";

const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description:
      "Experience swift and seamless product delivery straight to your inbox, ensuring a prompt and efficient consumer experience.",
  },
  {
    name: "Guaranteed Quality",
    Icon: CheckCircle,
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

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl border-b-4 border-white">
          <h1 className="text-4xl font-bold tracking-tight text-grey-900 sm:text-6xl">
            Create The Future
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground font-times-new-roman">
            Be simple. Be creative. Be you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 bg-white">
            <Link
              href="/features"
              className="rounded-lg h-10 px-4 py-2 text-white bg-zinc-900"
            >
              Features
            </Link>
            <Button variant="ghost"> Our quality promise &rarr;</Button>
          </div>
        </div>

        <ProductReel
          query={{ sort: "desc", limit: 4 }}
          href="/store"
          title="Brand New"
        />
      </MaxWidthWrapper>

      {/* There needs to be something here to take up space I cant just leave this blank */}

      <section className="relative">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:test-white">
                Learn To Sell <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Seller Dashboard
                </span>
              </h1>
            </>
          }
          // eslint-disable-next-line react/no-children-prop
          children={undefined}
        />

        <div className="absolute top-0 left-0 right-0 h-2" />

        <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-8">
          <Link
            href="/selling"
            className="rounded-lg h-10 px-4 py-2 text-white bg-black"
          >
            Learn To Sell
          </Link>
        </div>
      </section>

      <section className="border-t border-zinc-50 bg-gray-50">
        <MaxWidthWrapper className="py-20 border-b-4 border-zinc-50">
          <div className="grid grid-cols-1 gap-y-12 sm:gird-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perks) => (
              <div
                key={perks.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
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
        </MaxWidthWrapper>
      </section>
      <Footer />
    </>
  );
}
