import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { HandCoins, Handshake, Link2, PackageSearch } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function affiliate() {
  return (
    <div className="h-screen bg-zinc-white">
      <div className="border-lg flex justify-center pt-5 font-semibold text-4xl">
        Become A Dream Affiliate
      </div>

      <div className="">
        <div className="pt-20 text-3xl font-medium mb-5 flex justify-center">
          How It Works
        </div>

        <div className="max-w-3xl h-36 mx-auto border-white bg-white rounded-full mb-2 p-5 flex justify-center border reltive">
          <PackageSearch className="size-16 mr-5 flex mt-5" />
          <p className="text-center font-bold absolute underline">
            Refer A Product
          </p>
          <div className="max-w-lg mx-auto">
            <p className="mt-6 text-center max-w-xl text-gray-700">
              Every product on Dream Marketplace has a unique affiliate reward
              for referring new customers. You can also receive a reward for
              referring new merchants to start selling on Whop.
            </p>
          </div>
        </div>

        <div className="max-w-3xl h-36 mx-auto border-white bg-white border rounded-full mb-2 p-5 flex justify-center">
          <Link2 className="size-16 mr-5 mt-5" />
          <p className="text-center font-bold absolute underline">
            Share Affiliate Link
          </p>
          <div className="max-w-lg mx-auto">
            <p className="mt-6 text-center max-w-xl text-gray-700">
              To earn an affiliate reward, simply copy your affiliate link and
              share it with your audience. You can find your affiliate links via
              the “Refer Customers” and “Refer Businesses” pages (see above).
            </p>
          </div>
        </div>

        <div className="max-w-3xl h-36 mx-auto border-white bg-white border rounded-full mb-2 p-5 flex justify-center">
          <HandCoins className="size-16 mr-5 mt-5" />
          <p className="text-center font-bold absolute underline">
            Get Paid for your work
          </p>
          <div className="max-w-lg mx-auto">
            <p className="mt-6 text-center max-w-xl text-gray-700">
              When any new customer purchases a product or a merchant gets their
              first sale, you&apos;ll get a cash reward. It&apos;s that simple.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Link href={"/sell"}>
            <Button className="mt-5 border rounded-full bg-zinc-800 text-white border-zinc-800">
              Start Now
            </Button>
          </Link>
        </div>
      </div>

      <section className=" h-64"></section>

      <div className="flex justify-center font-bold">
        Recent News from Dream
      </div>

      <div className="antialiased text-gray-900">
        <div className=" p-8 flex items-center justify-center">
          <div className="bg-gray-200 xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-2/2">
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl flex">
              {/* Image */}
              <Image
                className="h-48 w-48 object-cover object-end"
                src="/profile-images/zeke.jpg"
                width={400}
                height={400}
                alt="Zeke"
              />
              {/* Text content */}
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <span className="inline-block py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide bg-teal-200 text-teal-800">
                    UPDATE
                  </span>
                  <h4 className="mt-10 font-semibold text-lg leading-tight truncate text-black">
                    Welcome To Dream! Read about our launch.
                  </h4>
                </div>
                <p className="text-sm text-gray-500 mt-5">4/29/24</p>
                <div className="mt-2 flex items-center">
                  <span className="text-teal-600 font-semibold">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
