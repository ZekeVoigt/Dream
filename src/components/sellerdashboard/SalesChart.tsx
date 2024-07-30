import {
  createContext,
  JSXElementConstructor,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardTitle,
} from "../ui/card";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { AnimatePresence } from "framer-motion";
import DetailedView8 from "@/components/DetailedView/8";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import {
  RadialBarChart,
  PolarAngleAxis,
  RadialBar,
  Area,
  AreaChart,
  XAxis,
  YAxis,
} from "recharts";

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

export const SalesChart: React.FC<SellerDashboardProps> = ({
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
      <AnimatePresence>
        {open && <DetailedView8 handleClose={handleClose} />}
      </AnimatePresence>
    </Card>
  );
};
