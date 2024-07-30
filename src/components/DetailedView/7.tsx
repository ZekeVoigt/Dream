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
import { ChartContainer } from "../ui/chart";
import { PolarAngleAxis, RadialBar, RadialBarChart } from "recharts";

interface DetailedView1Props {
  handleClose: () => void;
}

const DetailedView7: React.FC<DetailedView1Props> = ({ handleClose }) => (
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
            Learn
          </h1>
          <p className="text-neutral-800 mt-2 text-xl">
            Hi! Here you will learn about how to sell and control your seller
            dashboard to support you and you business.
          </p>
        </div>
      </div>

      <div className="bg-zinc-50 dark:bg-neutral-800 p-5 md:p-14 rounded-3xl mb-4">
        <Card>
          <CardHeader className="flex justify-center gap-4 space-y-0 pb-2 [&>div]:flex-1">
            <div>
              <CardTitle className="text-2xl font-bold">
                Learn How to Sell
              </CardTitle>
              <CardDescription>
                Master the art of selling with our comprehensive guide.
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="flex gap-4 p-4">
            <div className="grid items-center gap-2">
              <div className="grid flex-1 auto-rows-min gap-0.5"></div>
              <div className="grid flex-1 auto-rows-min gap-0.5"></div>
              <div className="grid flex-1 auto-rows-min gap-0.5"></div>
            </div>
            <ChartContainer
              config={{
                steps: {
                  label: "Steps",
                  color: "hsl(var(--chart-1))",
                },
                resources: {
                  label: "Resources",
                  color: "hsl(var(--chart-2))",
                },
                support: {
                  label: "Support",
                  color: "hsl(var(--chart-3))",
                },
              }}
              className="mx-auto aspect-square w-full max-w-[80%] mr-10"
            >
              <RadialBarChart
                margin={{
                  left: -10,
                  right: -10,
                  top: -10,
                  bottom: -10,
                }}
                data={[
                  {
                    category: "support",
                    value: (6 / 8) * 100,
                    fill: "var(--color-support)",
                  },
                  {
                    category: "resources",
                    value: (12 / 15) * 100,
                    fill: "var(--color-resources)",
                  },
                  {
                    category: "steps",
                    value: (8 / 10) * 100,
                    fill: "var(--color-steps)",
                  },
                ]}
                innerRadius="20%"
                barSize={24}
                startAngle={90}
                endAngle={450}
              >
                <PolarAngleAxis
                  type="number"
                  domain={[0, 100]}
                  dataKey="value"
                  tick={false}
                />
                <RadialBar dataKey="value" background cornerRadius={5} />
              </RadialBarChart>
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

export default DetailedView7;
