import Link from "next/link";

export default function affiliate() {
  return (
    <div className="w-full">
      <section className="bg-zinc-900 py-20 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Unlock Your Earning Potential
            </h1>
            <p className="mt-4 text-lg text-gray-200 md:text-xl lg:text-2xl">
              Join our Affiliate Program and start earning commissions today
              with Dream
            </p>
            <div className="mt-8">
              <Link
                href="https://forms.gle/i2TEGYShxu3aFSjh7"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-lg font-medium text-zinc-900 transition-colors  focus:ring-offset-2"
                prefetch={false}
              >
                Become an Affiliate
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-[#F3F4F6] p-6 shadow-md">
              <h3 className="text-xl font-bold text-[#1F2937]">
                Earn Commissions
              </h3>
              <p className="mt-4 text-[#6B7280]">
                Earn a commission on every sale you refer to our products and
                services.
              </p>
            </div>
            <div className="rounded-lg bg-[#F3F4F6] p-6 shadow-md">
              <h3 className="text-xl font-bold text-[#1F2937]">
                Flexible Payouts
              </h3>
              <p className="mt-4 text-[#6B7280]">
                Choose from a variety of payout options, including direct
                deposit, PayPal, and more.
              </p>
            </div>
            <div className="rounded-lg bg-[#F3F4F6] p-6 shadow-md">
              <h3 className="text-xl font-bold text-[#1F2937]">
                Dedicated Support
              </h3>
              <p className="mt-4 text-[#6B7280]">
                Get personalized support from our affiliate team to help you
                succeed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
