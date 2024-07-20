import { PackageIcon, UserIcon, BriefcaseIcon, MailIcon } from "lucide-react";
import Link from "next/link";

export default function SiteMap() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Welcome to Our SiteMap
        </h1>
        <p className="mt-4 text-muted-foreground">
          Explore our wide range of products.
        </p>
        <div className="mt-8 space-y-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/store"
              className="bg-zinc-100 group flex flex-col items-center justify-center gap-2 rounded-md bg-muted p-4 text-center transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              <PackageIcon className="h-8 w-8 text-muted-foreground group-hover:text-accent-foreground" />
              <div className="text-lg font-semibold">Products</div>
              <p className="text-sm text-muted-foreground">
                Browse our wide selection.
              </p>
            </Link>
            <Link
              href="https://discord.gg/wPq5mE5c"
              className="bg-zinc-100 group flex flex-col items-center justify-center gap-2 rounded-md bg-muted p-4 text-center transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              <UserIcon className="h-8 w-8 text-muted-foreground group-hover:text-accent-foreground" />
              <div className="text-lg font-semibold">About</div>
              <p className="text-sm text-muted-foreground">
                Learn more about our company.
              </p>
            </Link>
            <Link
              href="/features"
              className="bg-zinc-100 group flex flex-col items-center justify-center gap-2 rounded-md bg-muted p-4 text-center transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              <BriefcaseIcon className="h-8 w-8 text-muted-foreground group-hover:text-accent-foreground" />
              <div className="text-lg font-semibold">Features</div>
              <p className="text-sm text-muted-foreground">
                Check out the services we offer.
              </p>
            </Link>
            <Link
              href="https://discord.gg/wPq5mE5c"
              className="bg-zinc-100 group flex flex-col items-center justify-center gap-2 rounded-md bg-muted p-4 text-center transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              <MailIcon className="h-8 w-8 text-muted-foreground group-hover:text-accent-foreground" />
              <div className="text-lg font-semibold">Contact</div>
              <p className="text-sm text-muted-foreground">
                Get in touch with us via discord.
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-12 w-full max-w-4xl">
        <h2 className="text-center text-2xl font-bold tracking-tight text-foreground">
          Our Products
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="group flex flex-col items-center justify-center gap-2 rounded-md bg-muted p-4 text-center transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
            <img
              src="/placeholder.svg"
              width={150}
              height={150}
              alt="Product 1"
              className="h-24 w-24 rounded-md object-cover"
            />
            <div className="text-lg font-semibold">Softwares</div>
            <p className="text-sm text-muted-foreground"></p>
          </div>
          <div className="group flex flex-col items-center justify-center gap-2 rounded-md bg-muted p-4 text-center transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
            <img
              src="/placeholder.svg"
              width={150}
              height={150}
              alt="Product 2"
              className="h-24 w-24 rounded-md object-cover"
            />
            <div className="text-lg font-semibold">Courses</div>
          </div>
          <div className="group flex flex-col items-center justify-center gap-2 rounded-md bg-muted p-4 text-center transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
            <img
              src="/placeholder.svg"
              width={150}
              height={150}
              alt="Product 3"
              className="h-24 w-24 rounded-md object-cover"
            />
            <div className="text-lg font-semibold">Design</div>
          </div>
          <div className="group flex flex-col items-center justify-center gap-2 rounded-md bg-muted p-4 text-center transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
            <img
              src="/placeholder.svg"
              width={150}
              height={150}
              alt="Product 4"
              className="h-24 w-24 rounded-md object-cover"
            />
            <div className="text-lg font-semibold">NFTs</div>
          </div>
          <div className="group flex flex-col items-center justify-center gap-2 rounded-md bg-muted p-4 text-center transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
            <img
              src="/placeholder.svg"
              width={150}
              height={150}
              alt="Product 5"
              className="h-24 w-24 rounded-md object-cover"
            />
            <div className="text-lg font-semibold">Templates</div>
          </div>
          <div className="group flex flex-col items-center justify-center gap-2 rounded-md bg-muted p-4 text-center transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
            <img
              src="/placeholder.svg"
              width={150}
              height={150}
              alt="Product 6"
              className="h-24 w-24 rounded-md object-cover"
            />
            <div className="text-lg font-semibold">Education</div>
          </div>
          <div className="group flex flex-col items-center justify-center gap-2 rounded-md bg-muted p-4 text-center transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
            <img
              src="/placeholder.svg"
              width={150}
              height={150}
              alt="Product 7"
              className="h-24 w-24 rounded-md object-cover"
            />
            <div className="text-lg font-semibold">Digital Audio</div>
          </div>
          <div className="group flex flex-col items-center justify-center gap-2 rounded-md bg-muted p-4 text-center transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
            <img
              src="/placeholder.svg"
              width={150}
              height={150}
              alt="Product 8"
              className="h-24 w-24 rounded-md object-cover"
            />
            <div className="text-lg font-semibold">Images</div>
          </div>
        </div>
      </div>
    </div>
  );
}
