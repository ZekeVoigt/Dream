import { motion } from "framer-motion";
import { X, ArrowUpRight, Badge } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Card, CardHeader, CardDescription, CardContent } from "../ui/card";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "../ui/table";

interface DetailedView1Props {
  handleClose: () => void;
}

const DetailedView2: React.FC<DetailedView1Props> = ({ handleClose }) => (
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
            Transactions
          </h1>
          <p className="text-neutral-800 mt-2 text-xl">
            Welcome to your Transactions! Here you can checkout when your
            products are being sold.
          </p>
          <p className="text-sm mt-2">
            Watch "Transactions"{" "}
            <Link href="/" className="text-blue-500">
              Tutorial
            </Link>{" "}
          </p>
        </div>
      </div>

      <div className="bg-zinc-50 dark:bg-neutral-800 p-5 md:p-14 rounded-3xl mb-4">
        <Card>
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <div className="grid gap-2 ml-4">
              <CardDescription className="text-2xl font-bold text-zinc-900">
                Transactions
              </CardDescription>
            </div>
            <Button
              asChild
              size="sm"
              className="ml-auto gap-1 bg-zinc-900 text-white"
            >
              <Link href="/sell">
                See All
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead className="hidden xl:table-column">Type</TableHead>
                  <TableHead className="hidden xl:table-column">
                    Status
                  </TableHead>
                  <TableHead className="hidden xl:table-column">Date</TableHead>
                  <TableHead className="text-right -ml-20">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Liam Johnson</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      liam@example.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden xl:table-column">Sale</TableCell>
                  <TableCell className="hidden xl:table-column">
                    <Badge className="text-xs">Approved</Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                    2023-06-23
                  </TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Olivia Smith</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      olivia@example.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden xl:table-column">
                    Refund
                  </TableCell>
                  <TableCell className="hidden xl:table-column">
                    <Badge className="text-xs">Declined</Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                    2023-06-24
                  </TableCell>
                  <TableCell className="text-right">$150.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Noah Williams</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      noah@example.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden xl:table-column">
                    Subscription
                  </TableCell>
                  <TableCell className="hidden xl:table-column">
                    <Badge className="text-xs">Approved</Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                    2023-06-25
                  </TableCell>
                  <TableCell className="text-right">$350.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Emma Brown</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      emma@example.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden xl:table-column">Sale</TableCell>
                  <TableCell className="hidden xl:table-column">
                    <Badge className="text-xs">Approved</Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                    2023-06-26
                  </TableCell>
                  <TableCell className="text-right">$450.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Liam Johnson</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      liam@example.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden xl:table-column">Sale</TableCell>
                  <TableCell className="hidden xl:table-column">
                    <Badge className="text-xs">Approved</Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                    2023-06-27
                  </TableCell>
                  <TableCell className="text-right">$550.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
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

export default DetailedView2;
