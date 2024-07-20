"use client";

import React from "react";
import {
  MountainIcon,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-background text-foreground py-12 border-t">
        <div className="container max-w-5xl px-4 md:px-6 mx-auto flex flex-wrap justify-center text-center gap-8">
          <div className="p-5 space-y-4 flex-shrink-0">
            <div className="flex items-center justify-center gap-2">
              <MountainIcon className="w-6 h-6 animate-pulse" />
              <h3 className="text-2xl font-bold tracking-tight">Dream</h3>
            </div>
            <p className="text-muted-foreground text-sm"></p>
          </div>

          <div className="p-5 space-y-2 flex-shrink-0">
            <h4 className="text-sm font-medium">Shop & Learn</h4>
            <nav className="flex flex-col items-center space-y-1">
              <Link
                href="/"
                className="text-sm hover:underline transition-colors duration-300"
                prefetch={false}
              >
                Home
              </Link>
              <Link
                href="/store"
                className="text-sm hover:underline transition-colors duration-300"
                prefetch={false}
              >
                Store
              </Link>
              <Link
                href="/sell"
                className="text-sm hover:underline transition-colors duration-300"
                prefetch={false}
              >
                Sell
              </Link>
              <Link
                href="/selling"
                className="text-sm hover:underline transition-colors duration-300"
                prefetch={false}
              >
                Learn To Sell
              </Link>
            </nav>
          </div>

          <div className="p-5 space-y-2 flex-shrink-0">
            <h4 className="text-sm font-medium">Account</h4>
            <nav className="flex flex-col items-center space-y-1">
              <Link
                href="/"
                className="text-sm hover:underline transition-colors duration-300"
                prefetch={false}
              >
                Profile
              </Link>
              <Link
                href="/Help"
                className="text-sm hover:underline transition-colors duration-300"
                prefetch={false}
              >
                Help
              </Link>
            </nav>
          </div>

          <div className="p-5 space-y-2 flex-shrink-0">
            <h4 className="text-sm font-medium">Dream</h4>
            <nav className="flex flex-col items-center space-y-1">
              <Link
                href="/features"
                className="text-sm hover:underline transition-colors duration-300"
                prefetch={false}
              >
                Features
              </Link>
              <Link
                href="/affiliate"
                className="text-sm hover:underline transition-colors duration-300"
                prefetch={false}
              >
                Affiliate
              </Link>
              <Link
                href="/sitemap"
                className="text-sm hover:underline transition-colors duration-300"
                prefetch={false}
              >
                Sitemap
              </Link>
              <Link
                href="/community"
                className="text-sm hover:underline transition-colors duration-300"
                prefetch={false}
              >
                Community
              </Link>
            </nav>
          </div>

          <div className="p-5 space-y-2 flex-shrink-0">
            <h4 className="text-sm font-medium">Social</h4>
            <nav className="flex flex-col items-center space-y-1">
              <Link
                href="#"
                className="text-sm hover:underline transition-colors duration-300"
                prefetch={false}
              >
                <div className="flex items-center justify-center gap-2">
                  <TwitterIcon className="w-4 h-4 animate-pulse" />
                  Twitter
                </div>
              </Link>
              <Link
                href="#"
                className="text-sm hover:underline transition-colors duration-300"
                prefetch={false}
              >
                <div className="flex items-center justify-center gap-2">
                  <FacebookIcon className="w-4 h-4 animate-pulse" />
                  Facebook
                </div>
              </Link>
              <Link
                href="#"
                className="text-sm hover:underline transition-colors duration-300"
                prefetch={false}
              >
                <div className="flex items-center justify-center gap-2">
                  <InstagramIcon className="w-4 h-4 animate-pulse" />
                  Instagram
                </div>
              </Link>
              <Link
                href="#"
                className="text-sm hover:underline transition-colors duration-300"
                prefetch={false}
              >
                <div className="flex items-center justify-center gap-2">
                  <LinkedinIcon className="w-4 h-4 animate-pulse" />
                  LinkedIn
                </div>
              </Link>
            </nav>
          </div>
        </div>
      </footer>

      <div>
        <p className="text-center text-9xl md:text-7xl lg:text-[10rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 inset-x-0">
          Create The Future.
        </p>
      </div>
    </>
  );
};

export default Footer;
