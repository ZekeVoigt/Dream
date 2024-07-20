"use client";

export function Filter() {
  return (
    <main>
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black md:flex-row dark:text-white">
        <div className="order-first w-full flex-none md:max-w-[125px] mt-4">
          <nav>
            <h3 className="hidden text-xs text-neutral-500 md:block dark:text-neutral-400">
              Collections
            </h3>
            <ul className="hidden md:block">
              <li className="flex text-black dark:text-white">
                <p className="w-full mt-2 text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100 underline underline:offset-4">
                  All
                </p>
              </li>
              {/* SOFTWARE */}
              <li className="mt-2 flex text-black dark:text-white">
                <a
                  className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100"
                  href=""
                >
                  Software
                </a>
              </li>
              {/* DESIGN */}
              <li className="mt-2 flex text-black dark:text-white">
                <a
                  className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100"
                  href=""
                >
                  Design
                </a>
              </li>
              {/* COURSES */}
              <li className="mt-2 flex text-black dark:text-white">
                <a
                  className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100"
                  href=""
                >
                  Courses
                </a>
              </li>
              {/* TEMPLATES */}
              <li className="mt-2 flex text-black dark:text-white">
                <a
                  className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100"
                  href=""
                >
                  Templates
                </a>
              </li>
              {/* EDUCATION */}
              <li className="mt-2 flex text-black dark:text-white">
                <a
                  className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100"
                  href=""
                >
                  Education
                </a>
              </li>
              {/* DIGITAL IMAGES */}
              <li className="mt-2 flex text-black dark:text-white">
                <a
                  className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100"
                  href=""
                >
                  Digital Images
                </a>
                {/* DIGITAL AUDIO */}
              </li>
              <li className="mt-2 flex text-black dark:text-white">
                <a
                  className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100"
                  href=""
                >
                  Digital Audio
                </a>
              </li>
              {/* WEBSITE ASSETS */}
              <li className="mt-2 flex text-black dark:text-white">
                <a
                  className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100"
                  href=""
                >
                  Website Assets
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
}
