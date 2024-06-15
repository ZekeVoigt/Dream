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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Card, ContainerScroll } from "@/components/ui/scroll-animation";

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
      <div className="ml-60 py-20 mx-0 text-center flex flex-col items-start max-w-3xl border-b-4 border-white">
        <h1 className="text-4xl font-bold tracking-tight text-grey-900 sm:text-6xl mx-auto">
          Create The Future
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground font-times-new-roman mx-auto">
          Be simple. Be creative. Be you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6 bg-white mx-auto">
          <Link
            href="/sell"
            className="rounded-lg h-10 px-4 py-2 text-white bg-zinc-900"
          >
            Start Now
          </Link>
        </div>
        <div className="ml-auto py-20 text-center flex flex-col items-start max-w-3xl border-b-4 border-white">
          <h1 className="text-4xl font-bold tracking-tight text-grey-900 sm:text-6xl mx-auto">
            Hello
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground font-times-new-roman mx-auto">
            hello ebjnafoiufahsofb
          </p>
        </div>
      </div>

      <MaxWidthWrapper>
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
            className="rounded-lg px-4 py-2 text-white bg-black"
          >
            Learn To Sell
          </Link>
        </div>
      </section>

      <div className="h-screen">
        <div className="flex justify-center p-10">
          <h1 className="font-semibold text-3xl">Make Money As An Affiliate</h1>
          <p>Partner with Dream and Creators to make money!</p>
        </div>
        <MaxWidthWrapper>
          <div className="p-5 border rounded-3xl border-white bg-zinc-100">
            <div className="grid grid-cols-1 gap-y-12 sm:gird-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
              Hello
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      <div>
        <div className="mb-40 h-auto bg-white pt-28 border-t border-white flex flex-col items-start space-y-8 pl-40">
          <h1 className="text-3xl font-semibold mb-6 text-left">
            Questions Frequently Asked
          </h1>

          <div className="w-full max-w-2xl">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg py-4">
                  What is Dream?
                </AccordionTrigger>
                <AccordionContent className="text-base px-4 py-2">
                  Dream is the world&apos;s first marketplace where you can buy
                  and sell just digital assets and only digital assets. We
                  verify every product manually so quality can be expected from
                  every purchase.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="w-full max-w-2xl">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg py-4">
                  How can I sell on Dream?
                </AccordionTrigger>
                <AccordionContent className="text-base px-4 py-2">
                  Selling on Dream is unquestionably simple. Locate &quot;Create
                  Account&quot; in the top right of your screen. Once logged in
                  head over to your Seller-Dashboard located under &quot;My
                  Account&quot;. From your Seller-Dashboard click
                  &quot;Products&quot; and then &quot;Create New&quot;.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="w-full max-w-2xl">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg py-4">
                  Is Dream actually free to sell on?
                </AccordionTrigger>
                <AccordionContent className="text-base px-4 py-2">
                  Yes. Dream is fully free! No Plans, Seller fees or even
                  transaction fees!
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

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
