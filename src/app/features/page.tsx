"use client";

import React, { useEffect, useState, forwardRef, useRef } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import Particles from "@/components/magicui/particles";
import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon, Store, Video } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import AnimatedBeamMultipleOutputDemo from "@/components/magicui/example/animated-beam";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Marquee from "@/components/magicui/marquee";
import AnimatedListDemo from "@/components/magicui/example/animated-list-demo";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import BlurIn from "@/components/magicui/blur-in";
import { AnimatedBeamDemo } from "@/components/magicui/example/animated-beam-demo";
import Chat from "@/components/chat";

{
  /* Bento Grid Files */
}
const files = [
  {
    name: "bitcoin.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "finances.xlsx",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
  },
  {
    name: "logo.svg",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "keys.gpg",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "seed.txt",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
  },
];

{
  /* Bento Grid Features */
}
const features = [
  /* ADD FUNCTIONALITY IT DOES NOT ROTATE LEFT TO RIGHT */
  {
    Icon: FileTextIcon,
    name: "Create The Future",
    description: "Be Simple. Be Creative. Be You.",
    href: "#",
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
    href: "#",
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
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamDemo className="absolute right-2 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Look at our calendar to see when products get reviewed!",
    className: "col-span-3 lg:col-span-1",
    href: "#",
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
      {/* Typing animation */}
      {/* Bento-Grid Component */}

      <MaxWidthWrapper>
        <div className="h-screen p-10flex justify-start">
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
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-semibold">Create The Future</h1>
      </div>

      {/* SELL */}
      <div className="h-screen ">
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-3xl font-semibold">Learn To Sell</h1>
        </div>
      </div>

      {/* CONNECT */}
      <div className="h-screen bg-red-50"></div>

      {/* CALENDAR */}
      <div className="h-screen bg-blue-50 dark:bg-blue-900">
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-3xl font-semibold">
            Talking about Calendar To Sell
          </h1>
        </div>
      </div>
    </>
  );
};

export default feature;
