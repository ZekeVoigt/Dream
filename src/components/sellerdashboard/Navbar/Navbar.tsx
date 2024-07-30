import Link from "next/link";
import { Bell, Home, Package2, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AnimatePresence } from "framer-motion";
import DetailedView4 from "@/components/DetailedView/4";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useOutsideClick } from "@/hooks/use-outside-click";

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

const SideNavbar = ({}) => {
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
    <div className="hidden w-60 h-[45rem] border rounded-3xl bg-white md:block ml-5 mt-8">
      <div className="flex max-h-screen flex-col gap-4 bg-white mt-5 mb-5">
        <div onClick={handleOpen}>
          <div className="flex h-12 items-center border rounded-3xl px-2 lg:h-12 lg:px-4 p-2 bg-white mx-2">
            <Link
              href="/"
              className="flex w-10 items-center gap-2 font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span>Dream</span>
            </Link>
            <Button
              variant="outline"
              size="icon"
              className="ml-auto h-8 w-8 bg-black hover:bg-black border rounded-full"
            >
              <Bell className="h-4 w-4 bg-black text-white" />
              <span className="sr-only">Toggle notifications</span>
              <AnimatePresence>
                {open && <DetailedView4 handleClose={handleClose} />}
              </AnimatePresence>
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-2">
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-2 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-2 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Home className="h-4 w-4" />
              Seller Dashboard
            </Link>

            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-2 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Users className="h-4 w-4" />
              Messages
            </Link>
          </nav>
        </div>
        <div className="p-4 mt-[17rem]">
          <Card className="bg-zinc-50 rounded-xl">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-black text-lg">Help?</CardTitle>
              <CardDescription className="text-zinc-500">
                We are here to help you succeed. Please reach out through the
                button below!
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-2">
              <Button
                size="lg"
                className="w-full bg-black text-white hover:bg-gray-200"
              >
                Get Help
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
