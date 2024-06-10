"use client";

import Footer from "@/components/footer";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { LineChart, DollarSign, Boxes } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const perks = [
  {
    name: "Scale Your Business",
    Icon: LineChart,
    description:
      "Unlock the potential of your business with Dream - revolutionizing dropshipping for a new era. Build your venture from the ground up swiftly and efficiently. With Dream, turn your entrepreneurial dreams into reality.",
  },
  {
    name: "Make That Money",
    Icon: DollarSign,
    description:
      "Dream breaks the barriers to entry with zero seller fees or buy-ins. It's completely free to use, empowering you to start selling helpful products and make money without any costs. Don't let fees hold you back - unleash your entrepreneurial spirit with Dream.",
  },
  {
    name: "Sell Anything",
    Icon: Boxes,
    description:
      "Dream opens doors to endless possibilities. Whether you're selling templates, art, or apps, the digital realm is your marketplace. Explore, create, and sell - on Dream, the world is truly yours to conquer.",
  },
];

const Selling = () => {
  return (
    <MaxWidthWrapper>
      <div className="h-screen">
        <div className="flex justify-center">
          <h1 className="font-semibold p-5 mt-5 text-5xl">Create The Future</h1>
        </div>
        <div className="flex justify-center">
          <h2 className="p-5 text-2xl font-mono">
            Become Apart Of The Next Generation of Internet Entrepreneurs On
            Dream
          </h2>
        </div>
        <div className="flex justify-center">
          <Link href={"/sell"}>
            <Button className="border rounded-full mt-5 bg-black text-white hover:bg-fuchsia-500">
              Start Selling
            </Button>
          </Link>
        </div>
        <div className="flex justify-center">
          <p className="mt-28 font-semibold text-xl">
            Start selling with our simple, yet seamless seller dashboard{" "}
          </p>
        </div>
        <div className="flex justify-center">
          <div className="mt-2">
            <Image
              className="rounded border-4 border-zinc-700"
              src={"/sellerdashboardpics/sellerdashboard.png"}
              width={900}
              height={900}
              alt={"seller dashboard picture"}
            />
          </div>
        </div>
        <div className="flex justify-center mt-40">
          <div className="font-mono text-3xl mb-10">
            The Possibilities Are Endless
          </div>
        </div>

        <div className="mt-5">
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
        </div>

        <div className="mt-20">
          <div className="flex justify-center">
            <h1>We</h1>
            <p>ZEKZEKZEKZEKZEKZEKZEKZEKZKEZKEKZKEKZKEKZKEKZKE</p>
          </div>
        </div>

        <div className="flex justify-center mt-32">
          <div className="text-3xl font-mono">Earn the Most Profit</div>
        </div>
        <div className="flex justify-center mt-5">
          <div className="p-5 border rounded-xl border-white bg-zinc-100">
            <div className="md:flex-shrink-0 flex justify-center">
              <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-200 text-black">
                <DollarSign className="w-1/3 h-1/3" />
              </div>
            </div>
            <div className="grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
              <div className="text-gray-900 text-base font-medium text-center md:flex md:items-start md:text-left lg:block lg:text-center mt-5">
                Earn A More Passive Income
              </div>
              <div className="mt-6 md:-4 md:mt-0 lg:ml-0 lg:mt-6">
                <p className="mt-3 text-sm text-muted-foreground">
                  With Dream&apos;s low commission rates of just 10%, you can
                  keep more of your hard-earned money. Unlike other platforms
                  that may take a larger cut, Dream empowers sellers by ensuring
                  they receive the lion&apos;s share of their profits. Whether
                  you&apos;re a seasoned entrepreneur or just starting out,
                  maximize your earnings with Dream and watch your income soar.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="h-screen"></section>
      </div>
    </MaxWidthWrapper>
  );
};

export default Selling;
