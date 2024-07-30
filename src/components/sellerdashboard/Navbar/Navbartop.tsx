"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export function NavBarTop() {
  return (
    <MaxWidthWrapper>
      <div className="flex w-[60rem] flex-col items-center justify-center rounded-3xl border p-2 mt-8 bg-white shadow-md mx-auto">
        <h1 className="font-bold text-zinc-900 text-3xl">
          "The Dream Is The Journey"
        </h1>
        <p>(Click on any Dashboard Tab for more Information)</p>
        <div className="flex items-center gap-4"></div>
      </div>
    </MaxWidthWrapper>
  );
}
