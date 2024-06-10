import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";

export default function Newsletter() {
  return (
    <>
      <div className="bg-zinc-50">
        <div className="border-lg flex justify-center p-4 font-semibold text-3xl text-zinc-900">
          Latest News
        </div>

        {/* Image and text content */}
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

        <div className="flex justify-center">
          <div className="antialiased text-gray-900">
            {/* First component */}
            <div className="p-8">
              <div className="bg-gray-200">
                <div className="overflow-hidden rounded-lg shadow-2xl flex flex-col">
                  {/* Image */}
                  <div className="relative">
                    <Image
                      className="object-cover object-end"
                      src="/profile-images/zeke.jpg"
                      width={400}
                      height={300}
                      alt="Zeke"
                    />
                  </div>
                  {/* Text content */}
                  <div className="bg-white p-6">
                    <span className="inline-block py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide bg-teal-200 text-teal-800">
                      UPDATE
                    </span>
                    <h4 className="mt-2 font-semibold text-lg leading-tight truncate text-black">
                      Welcome To Dream
                    </h4>
                    <p className="text-sm text-gray-500">4/29/24</p>
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

          {/* Second component */}
          <div className="p-8">
            <div className="bg-gray-200 ">
              <div className="overflow-hidden rounded-lg shadow-2xl flex flex-col">
                {/* Image */}
                <div className="relative">
                  <Image
                    className="object-cover object-end"
                    src="/profile-images/zeke.jpg"
                    width={400}
                    height={300}
                    alt="Zeke"
                  />
                </div>
                {/* Text content */}
                <div className="bg-white p-6">
                  <span className="inline-block py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide bg-teal-200 text-teal-800">
                    UPDATE
                  </span>
                  <h4 className="mt-2 font-semibold text-lg leading-tight truncate text-black">
                    Welcome To Dream
                  </h4>
                  <p className="text-sm text-gray-500">4/29/24</p>
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

        {/* third component */}

        <div className="flex justify-center">
          <div className="p-8">
            <div className="bg-gray-200 ">
              <div className="overflow-hidden rounded-lg shadow-2xl flex flex-col">
                {/* Image */}
                <div className="relative">
                  <Image
                    className="object-cover object-end"
                    src="/profile-images/zeke.jpg"
                    width={400}
                    height={300}
                    alt="Zeke"
                  />
                </div>
                {/* Text content */}
                <div className="bg-white p-6">
                  <span className="inline-block py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide bg-teal-200 text-teal-800">
                    UPDATE
                  </span>
                  <h4 className="mt-2 font-semibold text-lg leading-tight truncate text-black">
                    Welcome To Dream
                  </h4>
                  <p className="text-sm text-gray-500">4/29/24</p>
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

          {/* Fourth Component */}

          <div className="p-8">
            <div className="bg-gray-200 ">
              <div className="overflow-hidden rounded-lg shadow-2xl flex flex-col">
                {/* Image */}
                <div className="relative">
                  <Image
                    className="object-cover object-end"
                    src="/profile-images/zeke.jpg"
                    width={400}
                    height={300}
                    alt="Zeke"
                  />
                </div>
                {/* Text content */}
                <div className="bg-white p-6">
                  <span className="inline-block py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide bg-teal-200 text-teal-800">
                    UPDATE
                  </span>
                  <h4 className="mt-2 font-semibold text-lg leading-tight truncate text-black">
                    Welcome To Dream
                  </h4>
                  <p className="text-sm text-gray-500">4/29/24</p>
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
      </div>

      <section className="bg-white ">
        <h1 className="text-center text-xl p-4 font-semibold text-black">
          Dream Stories
        </h1>
        <p className="text-center text-gray-700">
          Dreams Creators, who make Dream, Dream. Become a unique seller to be
          featured!
        </p>
        <div className="antialiased text-gray-900">
          <div className=" p-8 flex items-center justify-center">
            <div className="bg-gray-200 xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-2/2">
              <div className="bg-white rounded-lg overflow-hidden shadow-2xl flex">
                {/* Image */}
                <Image
                  className="h-48 w-48 object-cover object-end"
                  src="/"
                  width={400}
                  height={400}
                  alt="Creator 1"
                />
                {/* Text content */}
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <span className="inline-block py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide bg-teal-200 text-teal-800">
                      UPDATE
                    </span>
                    <h4 className="mt-10 font-semibold text-lg leading-tight truncate text-black">
                      Coming Soon!
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

        <div className="antialiased text-gray-900">
          <div className=" p-8 flex items-center justify-center">
            <div className="bg-gray-200 xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-2/2">
              <div className="bg-white rounded-lg overflow-hidden shadow-2xl flex">
                {/* Image */}
                <Image
                  className="h-48 w-48 object-cover object-end"
                  src="/"
                  width={400}
                  height={400}
                  alt="Creator 2"
                />
                {/* Text content */}
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <span className="inline-block py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide bg-teal-200 text-teal-800">
                      UPDATE
                    </span>
                    <h4 className="mt-10 font-semibold text-lg leading-tight truncate text-black">
                      Coming Soon!
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

        <div className="antialiased text-gray-900">
          <div className=" p-8 flex items-center justify-center">
            <div className="bg-gray-200 xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-2/2">
              <div className="bg-white rounded-lg overflow-hidden shadow-2xl flex">
                {/* Image */}
                <Image
                  className="h-48 w-48 object-cover object-end"
                  src="/"
                  width={400}
                  height={400}
                  alt="Creator 3"
                />
                {/* Text content */}
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <span className="inline-block py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide bg-teal-200 text-teal-800">
                      UPDATE
                    </span>
                    <h4 className="mt-10 font-semibold text-lg leading-tight truncate text-black">
                      Coming Soon!
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
      </section>
    </>
  );
}
