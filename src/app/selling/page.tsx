"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  DollarSign,
  Boxes,
  ClipboardIcon,
  BriefcaseIcon,
  HeadphonesIcon,
  LayersIcon,
  MegaphoneIcon,
  PercentIcon,
  PieChartIcon,
  RocketIcon,
  TrendingUpIcon,
  TruckIcon,
} from "lucide-react";
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
    <div className="w-full">
      <section className="bg-gradient-to-r from-zinc-900 to-zinc-700 w-full py-12 md:py-24 lg:py-32 from-primary to-primary/90">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-white text-3xl font-bold tracking-tighter text-primary-foreground sm:text-5xl md:text-6xl">
              Learn to Sell
            </h1>
            <p className="text-white text-lg text-primary-foreground/90 md:text-xl">
              Unlock your selling potential with our expert tips and strategies.
            </p>
            <Link
              href="https://discord.gg/wPq5mE5c"
              className="bg-white text-zinc-900 inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center gap-4">
              <RocketIcon className="size-8 text-primary" />
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-semibold">Optimize Listings</h3>
                <p className="text-zinc-500 text-muted-foreground">
                  Craft captivating product descriptions and eye-catching images
                  to boost visibility and sales.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <TrendingUpIcon className="size-8 text-primary" />
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-semibold">Leverage Analytics</h3>
                <p className="text-zinc-500 text-muted-foreground">
                  Dive into sales data and customer insights to make data-driven
                  decisions and refine your strategy.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <HeadphonesIcon className="size-8 text-primary" />
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-semibold">
                  Provide Excellent Service
                </h3>
                <p className="text-zinc-500 text-muted-foreground">
                  Deliver exceptional customer support to build loyalty and
                  encourage positive reviews.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <PercentIcon className="size-8 text-primary" />
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-semibold">Optimize Pricing</h3>
                <p className="text-zinc-500 text-muted-foreground">
                  Research the market, track competitors, and adjust prices to
                  maximize profits and stay competitive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-zinc-100 w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-secondary to-secondary/90">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter text-secondary-foreground sm:text-5xl md:text-6xl">
              Mastering E-commerce
            </h2>
            <p className="text-lg text-secondary-foreground/90 md:text-xl">
              Unlock the secrets to successful online selling with our
              comprehensive e-commerce community.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <Link
                href="https://discord.gg/wPq5mE5c"
                className="bg-white inline-flex h-10 items-center justify-center rounded-md bg-secondary-foreground px-8 text-sm font-medium text-secondary shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Get Started
              </Link>
              <Link
                href="https://discord.gg/wPq5mE5c"
                className="bg-zinc-900 text-white inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center gap-4">
              <PieChartIcon className="size-8 text-primary" />
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-semibold">Market Analysis</h3>
                <p className="text-muted-foreground">
                  Gain valuable insights into your target market and
                  competition.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <LayersIcon className="size-8 text-primary" />
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-semibold">Product Optimization</h3>
                <p className="text-muted-foreground">
                  Refine your product offerings to better meet customer needs.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <TruckIcon className="size-8 text-primary" />
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-semibold">Logistics Management</h3>
                <p className="text-muted-foreground">
                  Streamline your supply chain and delivery processes for
                  optimal efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Selling;
