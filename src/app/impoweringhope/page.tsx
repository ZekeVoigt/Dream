import Image from "next/image";
import Link from "next/link";

export default function impoweringhope() {
  return (
    <div className="bg-zinc-200">
      <div className="flex justify-center p-10 font-semibold text-3xl ">
        Impowering Hope
      </div>
      <div className="flex justify-center">
        <div className="p-5 border rounded-2xl mr-5 max-w-lg bg-white text-black">
          &quot;Every Dyslexic person has the chance to change the world because
          of how we think; that&apos;s something many people wish they could do.
          Dyslexia is not a disability, not a burden; it&apos;s not a hassle,
          it&apos;s a gift&quot;
        </div>
      </div>
      <div className="flex justify-center p-5 mt-10">
        <div className="border rounded-3xl mr-5">
          <div className="overflow-hidden rounded-lg  flex flex-col">
            {/* Image */}
            <div className="relative">
              <Image
                className="object-cover object-end"
                src="/impoweringhope/kids1.png"
                width={400}
                height={300}
                alt="Impower"
              />
            </div>
            {/* Text Context */}
            <div className="bg-white p-6">
              <h4 className="mt-2 font-semibold text-lg leading-tight truncate text-black flex justify-center">
                Create A Future
              </h4>
            </div>
          </div>
        </div>

        <div className="border rounded-3xl ml-5">
          <div className="overflow-hidden rounded-lg flex flex-col">
            {/* Image */}
            <div className="relative">
              <Image
                className="object-cover object-end"
                src="/impoweringhope/kids2.jpg"
                width={400}
                height={400}
                alt="Impower"
              />
            </div>
            {/* Text Context */}
            <div className="bg-white p-6">
              <h4 className="mt-2 font-semibold text-lg leading-tight truncate text-black flex justify-center">
                Give today
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="border rounded-3xl p-5 mt-10 bg-white">
          <div className="text-3xl flex justify-center">
            What is Impowering Hope?
          </div>
          <p className="flex justify-center p-5 max-w-l">
            Impowering Hope helps Dyslexic kids who struggle in school.
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="border rounded-3xl p-5 mt-10 mb-10 bg-white">
          <div className="text-3xl flex justify-center">How can I help?</div>
          <p className="flex justify-center p-5 max-w-2xl mx-auto">
            Hi! I am Zeke Voigt and I hope you user experiance has been amazing
            so far on Dream. Dream is here to take over the DropShipping realm
            and simplifying Entrepreneurship because it should not be hard!
            Digital DropShipping is simple. No buying test projects from a
            sketchy place over seas or even seller fees! All you have to do is
            make a useful digital product and post it on our seller dashboard,
            and boom you make money! If you would like to learn more about what
            Dream is please head over to our super awsome{" "}
            <Link className="text-blue-600 hover:underline" href={"/features"}>
              {" "}
              features{" "}
            </Link>
            page.
          </p>
        </div>
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
                  <h4 className=" max-w-lg  mt-10 font-semibold text-lg leading-tight truncate text-black ">
                    Impowering Hope with the start of Dream. Read About it now.
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
        <p>
          There are many ways you can help! One is by going to our store and
          buying an item. Depending on the item a percentage of that sale will
          come out of Dreams pocket and be sent to the National Dyslexia
          Association. Another option is to head to the National Dyslexia
          Association and click the &quot;Donate&quot; button. Thank you for
          anything you can give helping these kids is very important to Dream!
        </p>
      </div>
      <section className="h-60"></section>
    </div>
  );
}
