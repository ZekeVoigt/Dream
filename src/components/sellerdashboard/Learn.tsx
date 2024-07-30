import { createContext, useContext, useEffect, useRef, useState } from "react";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardTitle,
} from "../ui/card";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { AnimatePresence } from "framer-motion";
import DetailedView7 from "@/components/DetailedView/7";
import { ChartContainer } from "../ui/chart";
import { RadialBarChart, PolarAngleAxis, RadialBar } from "recharts";

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

export const Learn: React.FC<SellerDashboardProps> = ({
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
      <AnimatePresence>
        {open && <DetailedView7 handleClose={handleClose} />}
      </AnimatePresence>
    </Card>
  );
};
