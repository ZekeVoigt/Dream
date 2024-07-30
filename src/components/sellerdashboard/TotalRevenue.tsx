import { createContext, useContext, useEffect, useRef, useState } from "react";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardTitle,
} from "../ui/card";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";
import { AnimatePresence } from "framer-motion";
import DetailedView6 from "@/components/DetailedView/6";
import { Badge, DollarSign } from "lucide-react";
import { ChartContainer } from "../ui/chart";
import { Bar, BarChart, Rectangle, XAxis } from "recharts";

interface CardContent {
  name: string;
  type: string;
  status: string;
  date: string;
  amount: string;
  email?: string;
}

interface SellerDashboardProps {
  cardContent: CardContent[];
  className?: string;
  xChunk?: any;
}

export const CarouselContext = createContext<{ onCardClose: () => void }>({
  onCardClose: () => {},
});

export const Totalrevenue: React.FC<SellerDashboardProps> = ({
  cardContent,
  className,
  xChunk,
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose();
  };

  return (
    <Card className={className} x-chunk={xChunk} onClick={handleOpen}>
      <CardHeader className="p-4 pb-0">
        <CardTitle className="flex items-center justify-between text-2xl font-bold text-zinc-900">
          Total Revenue
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="">
        <div className="text-2xl font-bold">$45,231.89</div>
        <p className="text-xs text-muted-foreground">+20.1% from last month</p>
        <div className="flex items-baseline gap-4">
          <ChartContainer
            config={{
              calories: {
                label: "Calories",
                color: "hsl(var(--chart-1))",
              },
            }}
            className="ml-auto w-[64px]"
          >
            <BarChart
              accessibilityLayer
              margin={{
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              }}
              data={[
                {
                  date: "2024-01-01",
                  calories: 354,
                },
                {
                  date: "2024-01-02",
                  calories: 514,
                },
                {
                  date: "2024-01-03",
                  calories: 345,
                },
                {
                  date: "2024-01-04",
                  calories: 734,
                },
                {
                  date: "2024-01-05",
                  calories: 645,
                },
                {
                  date: "2024-01-06",
                  calories: 456,
                },
                {
                  date: "2024-01-07",
                  calories: 345,
                },
              ]}
            >
              <Bar
                dataKey="calories"
                fill="var(--color-calories)"
                radius={2}
                fillOpacity={0.2}
                activeIndex={6}
                activeBar={<Rectangle fillOpacity={0.8} />}
              />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={4}
                hide
              />
            </BarChart>
          </ChartContainer>
        </div>
      </CardContent>
      <AnimatePresence>
        {open && <DetailedView6 handleClose={handleClose} />}
      </AnimatePresence>
    </Card>
  );
};
