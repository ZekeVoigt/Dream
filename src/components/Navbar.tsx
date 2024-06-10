import React, { useState, useEffect, Children } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { Icons } from "./Icons";
import NavItems from "./NavItems";
import { buttonVariants } from "./ui/button";
import { Divide, Ghost } from "lucide-react";
import { Span } from "next/dist/trace";
import Cart from "./Cart";
import { cookies } from "next/headers";
import { getServerSideUser } from "@/lib/payload-utils";
import UserAccountNav from "./UserAccountNav";

import Image from "next/image";

import { PRODUCT_CATEGORIES } from "@/config";

const Navbar = async () => {
  const nextCookies = cookies();
  const { user } = await getServerSideUser(nextCookies);

  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <div className=" h-5 hidden lg:ml-8 lg:block lg:self-stretch ">
                <Link href="/">
                  <Image
                    className="rounded-xl"
                    src=""
                    width={50}
                    height={50}
                    alt="Dream Logo"
                  />
                </Link>
              </div>

              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>

              {/* SEARCH BAR HERE */}

              {/* STOP HERE DONT TOUCH THIS STUFF ZEKE IM MAKING NEW NAV */}

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {user ? null : (
                    <Link
                      href="/sign-in"
                      className={buttonVariants({
                        variant: "ghost",
                      })}
                    >
                      Sign In
                    </Link>
                  )}

                  {user ? null : (
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  )}

                  {user ? (
                    <UserAccountNav user={user} />
                  ) : (
                    <Link
                      href="/sign-up"
                      className={buttonVariants({
                        variant: "ghost",
                      })}
                    >
                      Create account
                    </Link>
                  )}

                  {user ? (
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  ) : null}

                  {user ? null : (
                    <div className="flex lg:ml-6">
                      <span
                        className="h-6 w-px bg-gray-200"
                        aria-hidden="true"
                      />
                    </div>
                  )}

                  <div className="ml-4 flow-root lg:ml-6">
                    <Cart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
