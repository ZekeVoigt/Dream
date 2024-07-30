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
} from "../ui/card";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";

interface DetailedView1Props {
  handleClose: () => void;
}

const DetailedView4: React.FC<DetailedView1Props> = ({ handleClose }) => (
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
            Notifications
          </h1>
          <p className="text-neutral-800 mt-2 text-xl">
            Welcome to your Notifications! Be sure to check here for seller
            updates and to respond to testimonials.
          </p>
          <p className="text-sm mt-2">
            Watch "Notifications"{" "}
            <Link href="/" className="text-blue-500">
              Tutorial
            </Link>{" "}
          </p>
        </div>
      </div>

      <div className="bg-zinc-50 dark:bg-neutral-800 p-5 md:p-14 rounded-3xl mb-4">
        <Card>
          <CardHeader className="p-4 pb-0">
            <CardTitle className="text-2xl font-bold text-zinc-900">
              Notifications
            </CardTitle>
            <CardDescription>
              Notifications will appear here so make sure to open often!
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-row items-baseline gap-4 p-4 pt-0">
            <div className="mt-3 flex items-baseline gap-1 tabular-nums leading-none  font-semibold">
              <span className="animate-ping text-blue-600">•</span> You have 1
              pending notification(s)
            </div>
          </CardContent>
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

export default DetailedView4;
