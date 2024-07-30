import { motion } from "framer-motion";
import { X, ArrowUpRight, Table, Badge } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardTitle,
  CardFooter,
} from "../ui/card";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";
import { Separator } from "../ui/separator";

interface DetailedView1Props {
  handleClose: () => void;
}

const DetailedView5: React.FC<DetailedView1Props> = ({ handleClose }) => (
  <div className="fixed inset-0 h-[150vh] z-50 overflow-auto">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
    />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative"
      style={{ maxHeight: "calc(100vh - 80px)", overflowY: "auto" }} // Add this line
    >
      <button
        className="sticky top-4 h-8 w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
        onClick={handleClose}
      >
        <X className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
      </button>
      <div className="flex items-center justify-between mb-10">
        <div className="text-center w-full">
          <h1 className="text-xl md:text-5xl font-bold text-neutral-800">
            Getting Help
          </h1>
          <p className="text-neutral-800 mt-2 text-xl">
            Welcome to getting help. Get the help you need quick.
          </p>
          <p className="text-sm mt-2">
            Watch "Getting Help"{" "}
            <Link href="/" className="text-blue-500">
              Tutorial
            </Link>{" "}
          </p>
        </div>
      </div>

      <div className="bg-zinc-50 dark:bg-neutral-800 p-5 md:p-14 rounded-3xl mb-4">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2 [&>div]:flex-1">
            <div>
              <CardTitle className="text-2xl font-bold text-zinc-900">
                Need Help?
              </CardTitle>
              <CardDescription>We're here to assist you.</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 p-6 pb-2">
            <div className="text-base text-muted-foreground">
              For help please click the "Contact Support" button below. This
              will send you to our discord were you can head to "Help" and leave
              a forumn. Or you can Email us at Dream@gmail.com (*Note you will
              not get help qucikly by emailing us, Discord help dashboard is
              recommended).
            </div>
            <div className="flex items-center gap-2">
              <Button asChild className="bg-zinc-900 text-white">
                <Link href="https://discord.gg/wPq5mE5c">Contact Support</Link>
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-row border-t p-4">
            <div className="flex w-full items-center gap-2">
              <Separator orientation="vertical" className="mx-2 h-10 w-px" />
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-xs text-muted-foreground">Email Us</div>
                <div className="flex items-baseline gap-1 text-lg font-bold tabular-nums leading-none">
                  Dream@gmail.com
                </div>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>

      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          A tutorial video will go here.
        </p>
      </div>
    </motion.div>
  </div>
);

export default DetailedView5;
