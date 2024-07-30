"Use client";

import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  DiscIcon,
  HeadphonesIcon,
  GaugeIcon,
  LightbulbIcon,
  ChevronDownIcon,
} from "lucide-react";

const Help = () => {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-zinc-900">
      <main className="flex-1">
        <section className="bg-zinc-900 py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-white text-3xl font-bold tracking-tighter text-primary-foreground sm:text-5xl xl:text-6xl/none">
                    Get the support you need with our Discord Help Desk
                  </h1>
                  <p className="text-white max-w-[600px] text-primary-foreground/80 md:text-xl">
                    Our dedicated team is here to help you with any questions or
                    issues you may have. Join our Discord server to get started.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="https://discord.gg/wPq5mE5c"
                    className="text-zinc-950 bg-white inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-6 text-sm font-medium text-primary shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Join Discord
                  </Link>
                </div>
              </div>
              <img
                src="/Dream.png"
                width="550"
                height="550"
                alt="Discord Help Desk"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section
          id="features"
          className="bg-zinc-100 bg-muted py-12 md:py-24 lg:py-32"
        >
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-zinx-950 text-3xl font-bold tracking-tighter text-foreground sm:text-5xl">
                  Features to help you succeed
                </h2>
                <p className="text-zinc-500 max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our Discord help desk offers a range of features to ensure you
                  get the support you need.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3">
              <div className="bg-white flex flex-col items-center justify-center space-y-2 rounded-lg bg-background p-6 shadow">
                <HeadphonesIcon className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold text-foreground">
                  Dedicated Support
                </h3>
                <p className="text-zinc-500 text-muted-foreground">
                  Our team is available 24/7 to assist you with any questions or
                  issues.
                </p>
              </div>
              <div className="bg-white flex flex-col items-center justify-center space-y-2 rounded-lg bg-background p-6 shadow">
                <GaugeIcon className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold text-foreground">
                  Fast Response Times
                </h3>
                <p className="text-zinc-500 text-muted-foreground">
                  We pride ourselves on our quick response times to ensure your
                  issues are resolved promptly.
                </p>
              </div>
              <div className="bg-white flex flex-col items-center justify-center space-y-2 rounded-lg bg-background p-6 shadow">
                <LightbulbIcon className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold text-foreground">
                  Helpful Resources
                </h3>
                <p className="text-zinc-500 text-muted-foreground">
                  Access our extensive knowledge base and community forums to
                  find answers to your questions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="faq"
          className="bg-white bg-background py-12 md:py-24 lg:py-32"
        >
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="text-zinc-500 max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here are some common questions and answers about our Discord
                  help desk.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-foreground">
                      How do I join the Discord server?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="text-zinc-500">
                      To join our Discord server, simply click the "Join
                      Discord" button at the top of the page or underneath this
                      text. This will take you to the invite link, where you can
                      click to join.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-foreground">
                      What kind of support can I get in the Discord server?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="text-zinc-500">
                      Our Discord server is staffed by a team of knowledgeable
                      support agents who can assist you with a wide range of
                      issues, from troubleshooting to feature requests. Feel
                      free to ask us anything!
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-foreground">
                      How quickly can I expect a response in the Discord server?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="text-zinc-500">
                      We strive to respond to all inquiries within 30 minutes
                      during our normal business hours. However, during peak
                      times, the response may take a bit longer. Rest assured,
                      we'll get back to you as soon as possible.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-foreground">
                      Is there a cost to use the Discord help desk?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="text-zinc-500">
                      No, like the rest of Dream our Discord help desk is
                      completely free to use. We believe in providing
                      high-quality support to all of our users.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <Link
              href="https://discord.gg/wPq5mE5c"
              className="text-white bg-zinc-950 inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-6 text-sm font-medium text-primary shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Join Discord
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Help;
