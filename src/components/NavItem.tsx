"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Category = (typeof PRODUCT_CATEGORIES)[number];

interface NavItemProps {
  category: Category;
  handleOpen: () => void;
  close: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
}

const NavItem = ({
  isAnyOpen,
  category,
  handleOpen,
  close,
  isOpen,
}: NavItemProps) => {
  return (
    <div className="flex">
      <div className="relative flex items-center">
        <Button
          className="gap-1.5"
          onClick={handleOpen}
          variant={isOpen ? "secondary" : "ghost"}
        >
          {category.label}
          <ChevronDown
            className={cn("h-4 w-4 transition-all text-muted-foreground", {
              "-rotate-180": isOpen,
            })}
          />
        </Button>
      </div>

      {isOpen ? (
        <div
          onClick={() => close()}
          className={cn(
            "absolute inset-x-0 top-full text-sm text-muted-foreground",
            {
              "animate-in fade-in-10 slide-in-from-top-5": !isAnyOpen,
            }
          )}
        >
          <div
            className="absolute inset-0 top-1/2 bg-white shadow"
            aria-hidden="true"
          />

          <div className="relative bg-white">
            <div className="mx-auto max-w-7xl px-8">
              <div className="flex justify-center">
                <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-10">
                  <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8">
                    {category.Featured.map((item) => (
                      <div
                        onClick={() => close}
                        key={item.name}
                        className="group relative text-base sm:text-sm items-center p-5"
                      >
                        <Link
                          href={item.href}
                          className="mt-6 block font-semibold text-black text-base"
                        >
                          {item.name}
                        </Link>

                        <div className="relative hover:underline mt-3">
                          <Link href={item.href} className="block font-normal">
                            {item.productlist
                              .split(",")
                              .map((product, index) => (
                                <div key={index} className="">
                                  {product}
                                </div>
                              ))}
                          </Link>
                        </div>

                        <Link href={"/store"}>
                          <p
                            className="mt-3 font-semibold hover:underline "
                            aria-hidden="true"
                          >
                            All
                          </p>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavItem;
function useState(arg0: null): [any, any] {
  throw new Error("Function not implemented.");
}
