"use client";

import React, { useState } from "react";
import { Nav } from "./ui/dashboardnav";

type Props = {};

import {
  ChevronRight,
  LayoutDashboard,
  PackageOpen,
  Settings,
  UsersRound,
} from "lucide-react";
import { TooltipProvider } from "./ui/tooltip";
import { Button } from "./ui/button";

export default function SideNavBar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="relative min-w-[80px] pt-24 px-3 pb-10 border-r">
      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Dashboard",
            icon: LayoutDashboard,
            variant: "default",
            href: "/",
          },
          {
            title: "Users",
            icon: UsersRound,
            variant: "ghost",
            href: "/users",
          },
          {
            title: "Orders",
            icon: PackageOpen,
            variant: "ghost",
            href: "/orders",
          },
          {
            title: "Settings",
            icon: Settings,
            variant: "ghost",
            href: "/setting",
          },
        ]}
      />
    </div>
  );
}
