"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Button } from "../ui/button";
import Link from "next/link";
import { Separator } from "../ui/separator";
import DetailedView5 from "@/components/DetailedView/5";
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

export const Help: React.FC<SellerDashboardProps> = ({
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
          If you have any questions or need support, please don't hesitate to
          reach out. Our team is available 24/7 to assist you via Discord or
          Email.
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
      <AnimatePresence>
        {open && <DetailedView5 handleClose={handleClose} />}
      </AnimatePresence>
    </Card>
  );
};
