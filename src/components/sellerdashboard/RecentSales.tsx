import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "../ui/card";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { AnimatePresence } from "framer-motion";
import DetailedView3 from "@/components/DetailedView/3";
import { CreditCard } from "lucide-react";

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

export const RecentSales: React.FC<SellerDashboardProps> = ({
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
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-2xl font-bold text-zinc-900">
          <span>Recent Sales</span>
          <CreditCard className="h-4 w-4 text-muted-foreground" />
        </CardTitle>
      </CardHeader>

      <CardContent className="grid gap-4">
        <div className="grid gap-8 mt-8">
          <div className="flex items-center gap-4">
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">Olivia Martin</p>
              <p className="text-sm text-muted-foreground">
                olivia.martin@email.com
              </p>
            </div>
            <div className="ml-auto font-medium">+$1,999.00</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">Jackson Lee</p>
              <p className="text-sm text-muted-foreground">
                jackson.lee@email.com
              </p>
            </div>
            <div className="ml-auto font-medium">+$39.00</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">
                Isabella Nguyen
              </p>
              <p className="text-sm text-muted-foreground">
                isabella.nguyen@email.com
              </p>
            </div>
            <div className="ml-auto font-medium">+$299.00</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">William Kim</p>
              <p className="text-sm text-muted-foreground">will@email.com</p>
            </div>
            <div className="ml-auto font-medium">+$99.00</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">Sofia Davis</p>
              <p className="text-sm text-muted-foreground">
                sofia.davis@email.com
              </p>
            </div>
            <div className="ml-auto font-medium">+$39.00</div>
          </div>
        </div>
      </CardContent>
      <AnimatePresence>
        {open && <DetailedView3 handleClose={handleClose} />}
      </AnimatePresence>
    </Card>
  );
};
