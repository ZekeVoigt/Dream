"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Popupnoti() {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`fixed inset-x-4 bottom-4 z-50 mx-auto max-w-md rounded-2xl border-2 border-black bg-white p-4 shadow-lg md:inset-x-0 transition-transform duration-2000 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="text-xl font-bold tracking-tight text-foreground">
            Dreams Beta Launch
          </h3>
          <p className="text-sm text-muted-foreground">
            Experience the future of shopping with Dream.
          </p>
        </div>
        <Link
          href="#"
          className="inline-flex bg-black h-9 items-center justify-center text-white rounded-md px-4 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Join Now
        </Link>
      </div>
    </div>
  );
}
