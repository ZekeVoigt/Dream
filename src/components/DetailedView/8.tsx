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
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import { Area, AreaChart, XAxis, YAxis } from "recharts";
import {
  JSXElementConstructor,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";

interface DetailedView1Props {
  handleClose: () => void;
}

const DetailedView8: React.FC<DetailedView1Props> = ({ handleClose }) => (
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
            Sales Chart
          </h1>
          <p className="text-neutral-800 mt-2 text-xl">
            Welcome to your Sales Chart! The Sales chart is just so you have a
            visual of your Sales.
          </p>
        </div>
      </div>

      <div className="bg-zinc-50 dark:bg-neutral-800 p-5 md:p-14 rounded-3xl mb-4">
        <Card>
          <CardHeader className="space-y-0 pb-0">
            <CardDescription>Time in Bed</CardDescription>
            <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
              8
              <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
                hr
              </span>
              35
              <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
                min
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ChartContainer
              config={{
                time: {
                  label: "Time",
                  color: "hsl(var(--chart-2))",
                },
              }}
            >
              <AreaChart
                accessibilityLayer
                data={[
                  {
                    date: "2024-01-01",
                    time: 8.5,
                  },
                  {
                    date: "2024-01-02",
                    time: 7.2,
                  },
                  {
                    date: "2024-01-03",
                    time: 8.1,
                  },
                  {
                    date: "2024-01-04",
                    time: 6.2,
                  },
                  {
                    date: "2024-01-05",
                    time: 5.2,
                  },
                  {
                    date: "2024-01-06",
                    time: 8.1,
                  },
                  {
                    date: "2024-01-07",
                    time: 7.0,
                  },
                ]}
                margin={{
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                }}
              >
                <XAxis dataKey="date" hide />
                <YAxis domain={["dataMin - 5", "dataMax + 2"]} hide />
                <defs>
                  <linearGradient id="fillTime" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-time)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-time)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="time"
                  type="natural"
                  fill="url(#fillTime)"
                  fillOpacity={0.4}
                  stroke="var(--color-time)"
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                  formatter={(
                    value:
                      | string
                      | number
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | Iterable<ReactNode>
                      | ReactPortal
                      | PromiseLikeOfReactNode
                      | null
                      | undefined
                  ) => (
                    <div className="flex min-w-[120px] items-center text-xs text-muted-foreground">
                      Time in bed
                      <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                        {value}
                        <span className="font-normal text-muted-foreground">
                          hr
                        </span>
                      </div>
                    </div>
                  )}
                />
              </AreaChart>
            </ChartContainer>
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

export default DetailedView8;
