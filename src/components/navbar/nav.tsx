import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-3"
      style={{ background: "rgba(11,34,64,0.15)", backdropFilter: "blur(8px)" }}
    >
      {/* Logo */}
      <div className="text-white font-bold text-xl">
        Aqua<span style={{ color: "#C8922A" }}>Safe</span> Florida
      </div>

      {/* Desktop Nav */}
      <div className="flex items-center gap-2">
        {/* CTA */}
        <a href="#form">
          <Button
            className="cursor-pointer ml-4 font-bold text-white"
            style={{ background: "#C8922A" }}
          >
            Free Quote →
          </Button>
        </a>
      </div>
    </nav>
  );
}