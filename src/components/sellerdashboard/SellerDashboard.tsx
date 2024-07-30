"use client";

import React, {
  useState,
  useRef,
  useEffect,
  useContext,
  createContext,
} from "react";
import { AnimatePresence } from "framer-motion";
import { CardContent } from "@/components/ui/card";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Notifications } from "@/components/sellerdashboard/Notifications";
import { Help } from "@/components/sellerdashboard/Help";
import { Products } from "@/components/sellerdashboard/Products";
import { Totalrevenue } from "@/components/sellerdashboard/TotalRevenue";
import { RecentSales } from "@/components/sellerdashboard/RecentSales";
import { Transactions } from "@/components/sellerdashboard/Transactions";
import DetailedView1 from "@/components/DetailedView/1";
import DetailedView2 from "@/components/DetailedView/2";
import DetailedView3 from "@/components/DetailedView/3";
import DetailedView4 from "@/components/DetailedView/4";
import DetailedView5 from "@/components/DetailedView/5";
import DetailedView6 from "@/components/DetailedView/6";
import DetailedView7 from "@/components/DetailedView/7";
import DetailedView8 from "@/components/DetailedView/8";
import { Learn } from "@/components/sellerdashboard/Learn";
import { SalesChart } from "@/components/sellerdashboard/SalesChart";
import SideNavbar from "@/components/sellerdashboard/Navbar/Navbar";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { NavBarTop } from "@/components/sellerdashboard/Navbar/Navbartop";
import { AuthProvider } from "@/context/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";

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

export const CarouselContext = createContext<{
  onCardClose: () => void;
}>({
  onCardClose: () => {},
});

export const SellerDashboard: React.FC<SellerDashboardProps> = () => {
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

  const handleClose = () => {
    setOpen(false);
    onCardClose();
  };

  return (
    <ProtectedRoute>
      <div className="flex">
        <SideNavbar /> {/* Positioning Navbar on the left */}
        <div className="ml-10">
          {/* Add margin to accommodate the navbar */}
          <NavBarTop /> {/* Add the NavBarTop component */}
          <div className="chart-wrapper mx-auto flex max-w-6xl flex-col flex-wrap items-start justify-center gap-6 p-6 sm:flex-row sm:p-8">
            <div className="grid w-full gap-6 sm:grid-cols-2 lg:max-w-[22rem] lg:grid-cols-1 xl:max-w-[25rem]">
              {/* B1 */}
              <AnimatePresence>
                {open && <DetailedView1 handleClose={handleClose} />}
                <Products cardContent={[]} />
              </AnimatePresence>

              {/* B2 */}
              <AnimatePresence>
                {open && <DetailedView2 handleClose={handleClose} />}
              </AnimatePresence>
              <Transactions cardContent={[]} />
            </div>

            <div className="grid w-full flex-1 gap-6 lg:max-w-[20rem]">
              {/* B3 */}
              <AnimatePresence>
                {open && <DetailedView3 handleClose={handleClose} />}
              </AnimatePresence>
              <RecentSales cardContent={[]} />

              {/* B4 */}
              <AnimatePresence>
                {open && <DetailedView4 handleClose={handleClose} />}
              </AnimatePresence>
              <Notifications cardContent={[]} />

              {/* B5 */}
              <AnimatePresence>
                {open && <DetailedView5 handleClose={handleClose} />}
              </AnimatePresence>
              <Help cardContent={[]} />
            </div>

            <div className="grid w-full flex-1 gap-6">
              {/* B6 */}
              <AnimatePresence>
                {open && <DetailedView6 handleClose={handleClose} />}
              </AnimatePresence>
              <Totalrevenue cardContent={[]} />

              {/* B7 */}
              <AnimatePresence>
                {open && <DetailedView7 handleClose={handleClose} />}
              </AnimatePresence>
              <Learn cardContent={[]} />

              {/* B8 */}
              <AnimatePresence>
                {open && <DetailedView8 handleClose={handleClose} />}
              </AnimatePresence>
              <SalesChart cardContent={[]} />
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default SellerDashboard;
