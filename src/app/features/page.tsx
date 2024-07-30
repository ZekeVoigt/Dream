"use client";

import React, { useEffect, useState, forwardRef, useRef } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import Particles from "@/components/magicui/particles";
import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import {
  BellIcon,
  FileIcon,
  Mountain,
  NetworkIcon,
  Share2Icon,
  StarIcon,
  Store,
  Video,
} from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Marquee from "@/components/magicui/marquee";
import AnimatedListDemo from "@/components/magicui/example/animated-list-demo";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import BlurIn from "@/components/magicui/blur-in";
import { AnimatedBeamDemo } from "@/components/magicui/example/animated-beam-demo";
import Chat from "@/components/chat";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import BlurFade from "@/components/magicui/blur-fade";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Ripple from "@/components/magicui/ripple";
import Link from "next/link";

{
  /* Bento Grid Files */
}
const files = [
  {
    name: "Be Creative.",
    body: "Transform your imagination into reality and watch your ideas come to life.",
  },
  {
    name: "Be Simple.",
    body: "Discover the beauty in simplicity and embrace the elegance of ease.",
  },
  {
    name: "Be You.",
    body: "Notice your potential and embrace the unique power that only you possess.",
  },
];

{
  /* Bento Grid Features */
}
const features = [
  /* ADD FUNCTIONALITY IT DOES NOT ROTATE LEFT TO RIGHT */
  {
    Icon: Mountain,
    name: "Create The Future",
    description: "Be Simple. Be Creative. Be You.",
    href: "#create-section",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs dark:text-white">
              {f.body}
            </blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: Store,
    name: "Become a seller",
    description: "Sell with ease.",
    href: "#sell-section",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo
        className="absolute right-2 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105"
        children={undefined}
      />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Connection",
    description: "Have direct connection with consumers!",
    href: "#connect-section",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamDemo className="absolute right-2 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Selling Process",
    description: "Check out how selling on Dream works.",
    className: "col-span-3 lg:col-span-1",
    href: "#calendar-section",
    cta: "Learn more",
    background: (
      <Calendar
        mode="single"
        selected={new Date(2022, 4, 11, 0, 0, 0)}
        className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
];

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
        "dark:bg-gray-800"
      )}
    >
      {children}
    </div>
  );
});

const feature = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  {
    /* PAGE itself */
  }
  return (
    <>
      {/* Particle Component */}
      <div className="h-screen relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background dark:bg-gray-900">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Dream
        </span>
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color={color}
          refresh
        />
      </div>

      {/* Bento-Grid Component */}
      <MaxWidthWrapper>
        <div className="h-screen p-10 flex justify-start">
          <div className="mt-5">
            <BlurIn className="mb-5" word={"Innovate the Future"} />

            <BentoGrid>
              {features.map((feature, idx) => (
                <BentoCard key={idx} {...feature} />
              ))}
            </BentoGrid>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* FILES */}
      <div
        id="create-section"
        className="flex justify-center items-center h-screen"
      >
        <h1 className="text-3xl font-semibold">Create The Future</h1>
      </div>
      {/* SELL */}
      <div id="sell-section" className="h-screen flex flex-row gap-4 p-4">
        <div className="flex flex-col gap-4 w-2/3">
          <div className="flex flex-row gap-4">
            {/* BOX 1 */}
            <Card className="border border-black ml-48 mt-10 rounded-3xl flex flex-col justify-start p-4 w-[24rem] h-[22rem]"></Card>
            {/* BOX 2 */}
            <Card className="border border-black rounded-3xl mt-10 w-[24rem] h-[22rem]"></Card>
          </div>
          <div className="flex">
            {/* BOX 3 */}
            <Card className="border border-black ml-48 rounded-3xl flex flex-col justify-start p-4 w-[49rem] h-[22rem]"></Card>
          </div>
        </div>
        {/* ACCORDION */}
        <div className="flex flex-col mr-48 mt-28 justify-start w-1/3 ml-8">
          <BlurFade inView>
            <div className="mb-40 h-auto bg-white pt-28 border-t border-white flex flex-col px-4 md:pl-10">
              <h1 className="text-3xl font-semibold mb-6 text-right">
                Selling on Dream (Beginner)
              </h1>

              <div className="flex flex-col md:flex-row w-full">
                <div className="flex flex-col items-start space-y-8 md:w-full">
                  <div className="w-full max-w-full">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg py-4">
                          How easy is it to set up a seller account on Dream?
                        </AccordionTrigger>
                        <AccordionContent className="text-base px-4 py-2 font-mono">
                          Setting up a seller account on Dream is incredibly
                          straightforward. Simply sign up on our platform,
                          provide some basic information, and link your Stripe
                          account via Stripe OnBoarding. Our seamless
                          integration with Stripe Connect ensures that you can
                          start selling your digital products quickly and
                          securely. Plus, we handle all the technical details,
                          so you can focus on creating and selling your
                          products.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  <div className="w-full max-w-full">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-2">
                        <AccordionTrigger className="text-lg py-4">
                          What Type of products can I sell on Dream?
                        </AccordionTrigger>
                        <AccordionContent className="text-base px-4 py-2 font-mono">
                          Dream Marketplace allows you to sell a wide range of
                          digital products, including software, digital
                          templates, online courses, eBooks, and much much more.
                          Our platform is designed to support various categories
                          and subcategories, ensuring that your products reach
                          the right audience. Whether you're a developer,
                          designer, educator, or even just looking for a side
                          hustle Dream provides the perfect venue to showcase
                          and monetize your digital assets.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  <div className="w-full max-w-full">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-3">
                        <AccordionTrigger className="text-lg py-4">
                          How does Dream handle transactions and fees?
                        </AccordionTrigger>
                        <AccordionContent className="text-base px-4 py-2 font-mono">
                          Transactions on Dream are processed through Stripe,
                          ensuring fast and secure payments. We take a 10% fee
                          from every product sold, which covers payment
                          processing and platform maintenance, allowing us to
                          provide a high-quality service. The rest of the
                          revenue goes directly to your linked Stripe account,
                          giving you quick and easy access to your earnings. Our
                          transparent fee structure ensures that you know
                          exactly what to expect, with no hidden charges and a
                          completly free platform for you to sell on.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>

      {/* CONNECT */}
      <div
        id="connect-section"
        className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background"
      >
        <p className="z-10 text-zinc-900 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter">
          Connect with Consumers
        </p>
        <p className="font-mono">
          Connecting with Consumers has never been easier.
        </p>
        <button className="mt-4 px-6 py-2 bg-zinc-900 text-white rounded-3xl">
          Start Now
        </button>
        <Ripple />
      </div>

      {/* CALENDAR */}
      <div id="calendar-section" className="h-screen flex">
        <div className="flex flex-col justify-start ml-48 mt-32 w-1/3 ">
          <BlurFade inView>
            <div className="mt-10 ml-10 h-auto bg-white pt-10 border-t border-white flex flex-col px-4 md:pl-6">
              <h1 className="text-3xl font-semibold mb-6 text-left">
                Dream selling process
              </h1>

              <div className="flex flex-col md:flex-row w-full">
                <div className="flex flex-col items-start space-y-8 md:w-full">
                  <div className="w-full max-w-full">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg py-4">
                          How do I create a product on Dream?
                        </AccordionTrigger>
                        <AccordionContent className="text-base px-6 py-4 font-mono">
                          Creating a product on Dream is simple. Follow these
                          steps: Log in to your Dream account. Navigate to the
                          seller dashboard. Click on "Create Product." Fill in
                          the required details such as product name,
                          description, price, and images. Submit your product
                          for approval. That's it! Your product will be reviewed
                          by our team, and you will be notified once it's
                          approved.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  <div className="w-full max-w-full">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-2">
                        <AccordionTrigger className="text-lg py-4">
                          How does product verification work on Dream?
                        </AccordionTrigger>
                        <AccordionContent className="text-base px-6 py-4 font-mono">
                          After creating a product through the seller dashboard,
                          each product will be approved or denied by an admin
                          manually. There are scheduled times every day for
                          product verification. You can view the verification
                          schedule{" "}
                          <Link
                            className="hover:underline text-blue-500"
                            href="/calendar"
                          >
                            Here
                          </Link>
                          . Please note that times are subject to change up to
                          10 minutes before the normal verification time.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  <div className="w-full max-w-full">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-3">
                        <AccordionTrigger className="text-lg py-4">
                          How do consumers purchase a product on Dream, & is it
                          secure?
                        </AccordionTrigger>
                        <AccordionContent className="text-base px-6 py-4 font-mono">
                          Consumers can easily purchase products on Dream using
                          our secure payment system powered by Stripe Connect.
                          Stripe Connect ensures that all transactions are safe
                          and secure, providing both buyers and sellers with
                          peace of mind during the purchasing process. Simply
                          add the desired product to your cart, proceed to
                          checkout, and complete your payment through our secure
                          platform.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>

        {/* BOX 1 CALENDAR */}
        <div className="h-screen flex justify-end ml-36 mt-28 mb-20">
          <BlurFade delay={0.25} inView>
            {/* BOX 1 */}
            <Card className="border border-black h-[40rem] w-[40rem] rounded-3xl">
              <div className="w-full h-full flex justify-items-center rounded-3xl border shadow">
                <h1>Seller Calendar Pic</h1>
              </div>
            </Card>
          </BlurFade>
        </div>
      </div>
    </>
  );
};

export default feature;
