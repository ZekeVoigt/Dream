import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ArrowDownToLine, CheckCircle, HandHelping } from "lucide-react";

export default function Leadership() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="text-center">
        <div className="text-zinc-700 font-semibold border-b mt-4 inline-table pt-5">
          <p className="text-3xl text-black">Meet The Dream Team</p>
        </div>
        <div className="flex justify-center pt-20">
          <div className="">
            <Link href={"/leadership/zeke"} className="">
              <div className="p-4 rounded">
                <div className="flex items-center justify-center mb-4">
                  <Image
                    src="/profile-images/zeke.jpg"
                    alt="Zeke Voigt"
                    width={500}
                    height={500}
                    className="rounded-lg"
                  />
                </div>
                <h2 className="text-lg font-semibold text-blue-600 hover:underline font-mono">
                  Zeke Voigt
                </h2>
                <p className="text-gray-700">Founder</p>
              </div>
            </Link>
            {/* Add more profiles as needed */}
          </div>
        </div>
      </div>
      <section className="bg-white h-96 w-96 flex justify-center items-center">
        <p></p>
      </section>
    </div>
  );
}
