"use client";

import Link from "next/link";

const community = () => {
  return (
    <div className="flex flex-col min-h-[100vh] items-center">
      <main className="flex-1 w-full">
        <section className="w-full h-screen flex items-center bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-4 md:px-6 flex flex-col justify-center">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Dream Marketplace Community
                </h1>
                <p className="text-zinc-500 max-w-[600px] text-muted-foreground md:text-xl mx-auto">
                  Join our vibrant Discord community and connect with fellow
                  dropshippers, sellers, collectors, and enthusiasts in the
                  world of digital assets.
                </p>
                <div className="flex justify-center">
                  <Link
                    href="https://discord.gg/wPq5mE5c"
                    className="bg-zinc-900 text-white inline-flex h-10 items-center justify-center rounded-md bg-secondary px-8 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Join Discord
                  </Link>
                </div>
              </div>
              <img
                src="/BusinessLogos/Discord.webp"
                width="550"
                height="550"
                alt="Community"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-first"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted text-center">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Discover Our Vibrant Channels
              </h2>
              <p className="text-zinc-500 max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Explore the various channels within our Discord community and
                engage with like-minded individuals.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col space-y-4 text-left">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Announcements</h3>
                  <p className="text-zinc-500 text-muted-foreground">
                    Stay up-to-date with the latest news, updates, and
                    announcements from the Dream Marketplace team.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">General Chat</h3>
                  <p className="text-zinc-500 text-muted-foreground">
                    Engage in casual conversations, share your thoughts, and
                    connect with the community.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Help Desk</h3>
                  <p className="text-zinc-500 text-muted-foreground">
                    Get the Help you need fast through are Help Desk.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Events</h3>
                  <p className="text-zinc-500 text-muted-foreground">
                    Stay informed about upcoming community events, workshops,
                    and meetups.
                  </p>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Channels"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="bg-zinc-900 w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-white text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Join the Dream Marketplace Community
              </h2>
              <p className="text-zinc-500 mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Connect with fellow traders, collectors, and enthusiasts in the
                world of digital assets. Explore the various channels and engage
                with the community.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Link
                href="https://discord.gg/wPq5mE5c"
                className="bg-white inline-flex h-10 items-center justify-center rounded-md bg-secondary px-8 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Join Discord
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default community;
