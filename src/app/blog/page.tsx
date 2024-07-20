"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MountainIcon } from "lucide-react";

const blog = () => {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <main className="flex-1 bg-background">
        <section className="bg-white bg-muted py-12 md:py-24">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="/icons/DreamLogo.png"
                  width="800"
                  height="500"
                  alt="Featured Blog Post"
                  className="rounded-lg w-full aspect-[16/10] object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="bg-zinc-900 text-white inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Featured
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  The Future E-commerce
                </h1>
                <p className="text-zinc-500 text-muted-foreground">
                  Discover how people like you are being internet entrepreneurs.
                </p>
                <Link
                  href="#"
                  className="bg-zinc-900 text-white inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  prefetch={false}
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Latest Posts</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-background rounded-lg shadow-sm overflow-hidden">
                <img
                  src="/placeholder.svg"
                  width="800"
                  height="400"
                  alt="Blog Post 1"
                  className="w-full aspect-[2/1] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">
                    Mastering React: A Comprehensive Guide
                  </h3>
                  <p className="text-zinc-500 text-muted-foreground line-clamp-3 mb-4">
                    Dive into the world of React and learn how to build
                    powerful, scalable web applications. From beginner to
                    advanced, this guide covers everything you need to know.
                  </p>
                  <Link
                    href="#"
                    className="bg-zinc-900 text-white inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    Read More
                  </Link>
                </div>
              </div>
              <div className="bg-background rounded-lg shadow-sm overflow-hidden">
                <img
                  src="/placeholder.svg"
                  width="800"
                  height="400"
                  alt="Blog Post 2"
                  className="w-full aspect-[2/1] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">
                    The Rise of Serverless Computing
                  </h3>
                  <p className="text-zinc-500 text-muted-foreground line-clamp-3 mb-4">
                    Explore the benefits of serverless computing and how it's
                    transforming the way we build and deploy web applications.
                    Learn how to leverage serverless technologies to streamline
                    your development process.
                  </p>
                  <Link
                    href="#"
                    className="bg-zinc-900 text-white inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    Read More
                  </Link>
                </div>
              </div>
              <div className="bg-background rounded-lg shadow-sm overflow-hidden">
                <img
                  src="/placeholder.svg"
                  width="800"
                  height="400"
                  alt="Blog Post 3"
                  className="w-full aspect-[2/1] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">
                    Designing for Accessibility: Best Practices
                  </h3>
                  <p className="text-zinc-500 text-muted-foreground line-clamp-3 mb-4">
                    Learn how to create inclusive and accessible web experiences
                    that cater to users with diverse needs. Discover practical
                    tips and techniques to make your designs more inclusive.
                  </p>
                  <Link
                    href="#"
                    className="bg-zinc-900 text-white inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Dream Stories</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-background rounded-lg shadow-sm overflow-hidden">
                <img
                  src="/placeholder.svg"
                  width="800"
                  height="400"
                  alt="Dream Story 1"
                  className="w-full aspect-[2/1] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">
                    From Hobby to Thriving Business
                  </h3>
                  <p className="text-zinc-500 text-muted-foreground line-clamp-3 mb-4">
                    Read how Jane, a stay-at-home mom, turned her passion for
                    handmade jewelry into a successful online business.
                  </p>
                  <Link
                    href="#"
                    className="bg-zinc-900 text-white inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    Read More
                  </Link>
                </div>
              </div>
              <div className="bg-background rounded-lg shadow-sm overflow-hidden">
                <img
                  src="/placeholder.svg"
                  width="800"
                  height="400"
                  alt="Dream Story 2"
                  className="w-full aspect-[2/1] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">
                    From Side Hustle to Full-Time Gig
                  </h3>
                  <p className="text-zinc-500 text-muted-foreground line-clamp-3 mb-4">
                    Discover how Mike, a software engineer, turned his
                    woodworking hobby into a thriving online shop.
                  </p>
                  <Link
                    href="#"
                    className="bg-zinc-900 text-white inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    Read More
                  </Link>
                </div>
              </div>
              <div className="bg-background rounded-lg shadow-sm overflow-hidden">
                <img
                  src="/placeholder.svg"
                  width="800"
                  height="400"
                  alt="Dream Story 3"
                  className="w-full aspect-[2/1] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">
                    From Passion to Profit: A Crafting Journey
                  </h3>
                  <p className="text-zinc-500 text-muted-foreground line-clamp-3 mb-4">
                    Learn how Sarah, a stay-at-home mom, turned her love for
                    knitting into a thriving online business.
                  </p>
                  <Link
                    href="#"
                    className="bg-zinc-900 text-white inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    Read More
                  </Link>
                </div>
              </div>
              <div className="bg-background rounded-lg shadow-sm overflow-hidden">
                <img
                  src="/placeholder.svg"
                  width="800"
                  height="400"
                  alt="Dream Story 4"
                  className="w-full aspect-[2/1] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">
                    From Passion to Profit: A Crafting Journey
                  </h3>
                  <p className="text-zinc-500 text-muted-foreground line-clamp-3 mb-4">
                    Learn how Sarah, a stay-at-home mom, turned her love for
                    knitting into a thriving online business.
                  </p>
                  <Link
                    href="#"
                    className="bg-zinc-900 text-white inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    Read More
                  </Link>
                </div>
              </div>
              <div className="bg-background rounded-lg shadow-sm overflow-hidden">
                <img
                  src="/placeholder.svg"
                  width="800"
                  height="400"
                  alt="Dream Story 5"
                  className="w-full aspect-[2/1] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">
                    From Passion to Profit: A Crafting Journey
                  </h3>
                  <p className="text-zinc-500 text-muted-foreground line-clamp-3 mb-4">
                    Learn how Sarah, a stay-at-home mom, turned her love for
                    knitting into a thriving online business.
                  </p>
                  <Link
                    href="#"
                    className="bg-zinc-900 text-white inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    Read More
                  </Link>
                </div>
              </div>
              <div className="bg-background rounded-lg shadow-sm overflow-hidden">
                <img
                  src="/placeholder.svg"
                  width="800"
                  height="400"
                  alt="Dream Story 6"
                  className="w-full aspect-[2/1] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">
                    From Passion to Profit: A Crafting Journey
                  </h3>
                  <p className="text-zinc-500 text-muted-foreground line-clamp-3 mb-4">
                    Learn how Sarah, a stay-at-home mom, turned her love for
                    knitting into a thriving online business.
                  </p>
                  <Link
                    href="#"
                    className="bg-zinc-900 text-white inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <aside className="bg-muted border-t px-4 md:px-6 py-8">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Newsletter</h3>
            <p className="text-zinc-500 text-muted-foreground">
              Subscribe to our newsletter to stay up-to-date with the latest
              blog posts and industry news.
            </p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button className="bg-zinc-900 text-white" type="submit">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default blog;
