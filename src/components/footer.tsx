"use client";

import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <>
      <footer className="bg-zinc-50 text-black py-6 text-center flex justify-center">
        <div className="text-lg">
          <div className="mb-2">
            <div className="grid grid-cols-3 gap-x-4 gap-y-2">
              <div>
                <div className="flex flex-col items-center">
                  <h3 className="text-sm font-semibold text-zinc-800 mb-2">
                    Shop and Learn
                  </h3>
                  <a
                    href="/store"
                    className="text-zinc-700 text-sm hover:underline"
                  >
                    Store
                  </a>
                  <a
                    href="/sell"
                    className="text-zinc-700 text-sm hover:underline"
                  >
                    Sell
                  </a>
                  <a
                    href="/selling"
                    className="text-zinc-700 text-sm hover:underline"
                  >
                    Learn To Sell
                  </a>
                  <a
                    href="/software"
                    className="text-zinc-700 text-sm hover:underline"
                  >
                    Software
                  </a>
                  <a
                    href="/templates"
                    className="text-zinc-700 text-sm hover:underline"
                  >
                    Templates
                  </a>
                  <a
                    href="/affiliate"
                    className="text-zinc-700 text-sm hover:underline"
                  >
                    Affiliate
                  </a>
                </div>
              </div>

              <div>
                <div className="flex flex-col items-center">
                  <h3 className="text-sm font-medium text-zinc-800 mb-2">
                    Account
                  </h3>
                  <a
                    href="/account"
                    className="text-zinc-700 text-sm hover:underline"
                  >
                    Profile
                  </a>
                </div>
              </div>

              <div>
                <div className="flex flex-col items-center">
                  <h3 className="text-sm font-medium text-zinc-800 mb-2">
                    About Dream
                  </h3>
                  <a
                    href="/sell"
                    className="text-zinc-700 text-sm hover:underline"
                  >
                    Features
                  </a>
                  <a
                    href="/newsletter"
                    className="text-zinc-700 text-sm hover:underline"
                  >
                    Newsletter
                  </a>
                  <a
                    href="/leadership"
                    className="text-zinc-700 text-sm hover:underline"
                  >
                    Leadership
                  </a>
                  <a
                    href="/sitemap"
                    className="text-zinc-700 text-sm hover:underline"
                  >
                    Sitemap
                  </a>
                </div>
              </div>

              <div>
                <div className="flex flex-col items-center">
                  <h3 className="text-sm font-medium text-zinc-800 mb-2">
                    Dream Values
                  </h3>
                  <a
                    href="/impoweringhope"
                    className="text-zinc-700 text-sm hover:underline"
                  >
                    Impowering Hope
                  </a>
                  <a
                    href="/values"
                    className="text-zinc-700 text-sm hover:underline"
                  >
                    Giving Back
                  </a>
                  <a
                    href="/privacy"
                    className="text-zinc-700 text-sm hover:underline"
                  >
                    Privacy
                  </a>
                  <a
                    href="/accessiblity"
                    className="text-zinc-700 text-sm hover:underline"
                  >
                    Accessibility
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-lg text-center text-zinc-700 bg-zinc-50">
        © 2024 Dream Inc. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
