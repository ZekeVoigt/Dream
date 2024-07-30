"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { useOutsideClick } from "@/hooks/use-outside-click";
import DetailedView4 from "@/components/DetailedView/4";
import { AnimatePresence } from "framer-motion";

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
  xChunk?: any; // Define a proper type if you know what xChunk is supposed to be
}

export const CarouselContext = createContext<{
  onCardClose: () => void;
}>({
  onCardClose: () => {},
});

export const Notifications: React.FC<SellerDashboardProps> = ({
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

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
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
      <AnimatePresence>
        {open && <DetailedView4 handleClose={handleClose} />}
      </AnimatePresence>
    </Card>
  );
};
