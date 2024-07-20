"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <>
      {!isOpen ? (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="lg:hidden relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:text-gray-700"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      ) : (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
                <div className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-auto bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <h2 className="text-lg font-medium text-gray-900">
                          Menu
                        </h2>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-white text-gray-400 hover:text-gray-500"
                            onClick={() => setIsOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <X className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <div className="space-y-6">
                        <Link
                          href="/sign-in"
                          onClick={() => closeOnCurrent("/sign-in")}
                          className="block px-4 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 rounded-md"
                        >
                          Sign in
                        </Link>
                        <Link
                          href="/sign-up"
                          onClick={() => closeOnCurrent("/sign-up")}
                          className="block px-4 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 rounded-md"
                        >
                          Create Account
                        </Link>
                      </div>
                      <div className="mt-6 border-t border-gray-200 pt-6">
                        <ul>
                          {PRODUCT_CATEGORIES.map((category) => (
                            <li
                              key={category.label}
                              className="mb-4 p-5 border-b border-gray-200 mt-6"
                            >
                              <p className="text-lg font-semibold text-gray-900">
                                {category.label}
                              </p>
                              <div className="mt-2 grid grid-cols-2 gap-4">
                                {category.Featured.map((item) => (
                                  <div
                                    key={item.name}
                                    className="font-mono text-sm"
                                  >
                                    <Link
                                      href={item.href}
                                      className="block font-medium text-gray-900 hover:text-gray-700"
                                    >
                                      {item.name}
                                    </Link>
                                  </div>
                                ))}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
