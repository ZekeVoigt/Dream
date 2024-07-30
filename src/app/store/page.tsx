"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect, SetStateAction } from "react";
import { Package, ShieldCheck, HeartHandshake, Search } from "lucide-react";
import BlurIn from "@/components/magicui/blur-in";

const perks = [
  {
    name: "Instant Delivery",
    Icon: Package,
    description:
      "Experience swift and seamless product delivery straight to your inbox, ensuring a prompt and efficient consumer experience.",
  },
  {
    name: "Guaranteed Quality",
    Icon: ShieldCheck,
    description:
      "Elevate your digital experience with our premium selection of thoughtfully crafted and quality-assured products.",
  },
  {
    name: "Giving Back",
    Icon: HeartHandshake,
    description:
      "Empower positive change with us – 5% of every sale goes to charities chosen by you, making a meaningful impact on causes that matter to you!",
  },
];

export default function Store() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialSearchTerm = searchParams.get("search") || "";
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showPriceFilter, setShowPriceFilter] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); // Track if there are more pages

  useEffect(() => {
    setSearchTerm(initialSearchTerm);
    setCurrentPage(1);
  }, [initialSearchTerm]);

  const handleSearch = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setCurrentPage(1); // Reset to first page on new search
    router.push(`/store?search=${searchTerm}`);
    setShowDropdown(false);
  };

  const handleFocus = () => {
    setShowDropdown(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  };

  const quickLinks = ["All", "Courses", "Design", "Templates", "Software"];

  const handleQuickLinkClick = (link: SetStateAction<string>) => {
    if (link === "All") {
      setSearchTerm("");
      setShowPriceFilter(false);
    } else {
      setSearchTerm(link);
      setShowPriceFilter(true);
    }
  };

  const PriceFilter = () => (
    <div className="mt-3 w-full max-w-md">
      <label className="block text-sm font-medium text-zinc-900 ">
        Price Range: ${priceRange[0]} - ${priceRange[1]}
      </label>
      <input
        type="range"
        className="mt-1 w-full"
        min="0"
        max="1000"
        step="10"
        value={priceRange[1]}
        onChange={(e) => setPriceRange([0, Number(e.target.value)])}
      />
    </div>
  );

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <>
      <div className={`relative ${showDropdown ? "blur-background" : ""}`}>
        <div className="flex justify-center">
          <div className="mt-20"></div>
          <MaxWidthWrapper>
            <div className="mt-6 md:mt-0">
              <div className="flex flex-col items-center">
                <div className="mt-10 text-4xl font-bold tracking-tight text-grey-900 sm:text-4xl">
                  <BlurIn word={"Welcome to the Future of Shopping."}></BlurIn>
                </div>
                <div className="mt-6 w-full max-w-md relative z-20">
                  <form onSubmit={handleSearch} className="relative">
                    <div className="relative flex items-center">
                      <input
                        type="text"
                        className="mt-3 w-full px-4 py-2 border rounded-full shadow-xl pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Search dream.com"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                      />
                      <button
                        type="submit"
                        className="absolute right-4 top-1/2 transform -translate-y-1/2"
                      >
                        <Search className="text-indigo-500 mt-3" />
                      </button>
                    </div>

                    {showDropdown && (
                      <div className="absolute mt-2 w-full bg-white border border-white rounded-md shadow-lg z-10">
                        <ul>
                          {quickLinks.map((link) => (
                            <li
                              key={link}
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b-black"
                              onMouseDown={() => handleQuickLinkClick(link)}
                            >
                              {link}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </form>
                  {showPriceFilter && <PriceFilter />}
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="w-full h-full">
                  <ProductReel
                    query={{
                      sort: "desc",
                      limit: 40,
                      search: searchTerm,
                      page: currentPage,
                    }}
                    title=""
                    onDataFetched={(data) => {
                      // Assuming data includes an indicator of whether more pages exist
                      setHasMore(data.hasMore);
                    }}
                  />

                  <div className="p-5 mb-10 border rounded-3xl border-white bg-zinc-100 mt-5">
                    <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
                      {perks.map((perk) => (
                        <div
                          key={perk.name}
                          className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                        >
                          <div className="md:flex-shrink-0 flex justify-center">
                            <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-200 text-black">
                              {<perk.Icon className="w-1/3 h-1/3" />}
                            </div>
                          </div>

                          <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                            <h3 className="text-base font-medium text-gray-900">
                              {perk.name}
                            </h3>
                            <p className="mt-3 text-sm text-muted-foreground">
                              {perk.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between mt-5 mb-5">
                    {currentPage > 1 && (
                      <button
                        onClick={handlePreviousPage}
                        className="px-4 py-2 bg-gray-200 rounded-full"
                      >
                        Previous
                      </button>
                    )}
                    {hasMore && (
                      <button
                        onClick={handleNextPage}
                        className="px-4 py-2 bg-zinc-900 text-white rounded-full"
                      >
                        Next
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      </div>

      <style jsx global>{`
        .blur-background:before {
          content: "";
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          backdrop-filter: blur(10px);
          z-index: 10;
        }
      `}</style>
    </>
  );
}
