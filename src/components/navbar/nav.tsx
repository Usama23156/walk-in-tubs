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
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
      style={{ background: "rgba(11,34,64,0.15)", backdropFilter: "blur(8px)" }}
    >
      {/* Logo */}
      <div className="text-white font-bold text-xl">
        Aqua<span style={{ color: "#C8922A" }}>Safe</span> Florida
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-2">
        <NavigationMenu>
          <NavigationMenuList>

            {/* Walk-in Tubs dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className="bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10"
                style={{ background: "transparent", color: "#fff" }}
              >
                Walk-in Tubs
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 p-4 w-55">
                  {[
                    { title: "Standard Tubs", desc: "Classic walk-in design" },
                    { title: "Hydrotherapy", desc: "16 therapeutic jets" },
                    { title: "Bariatric Tubs", desc: "Extra wide & sturdy" },
                  ].map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink
                        href="#"
                        className="block rounded-md p-3 hover:bg-slate-100 transition-colors"
                      >
                        <div
                          className="text-sm font-semibold mb-0.5"
                          style={{ color: "#0B2240" }}
                        >
                          {item.title}
                        </div>
                        <div className="text-xs" style={{ color: "#7A8FA6" }}>
                          {item.desc}
                        </div>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Safety Features */}
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-white/10"
                style={{ color: "#fff" }}
              >
                Safety Features
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Financing */}
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-white/10"
                style={{ color: "#fff" }}
              >
                Financing
                </NavigationMenuLink>
              </NavigationMenuItem>

            {/* About */}
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-white/10"
                style={{ color: "#fff" }}
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

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

      {/* Mobile — Sheet */}
      <div className="flex md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10 px-2"
            >
              {/* Hamburger icon */}
              <div className="flex flex-col gap-1.5 cursor-pointer">
                <span className="block w-6 h-0.5 bg-white" />
                <span className="block w-6 h-0.5 bg-white" />
                <span className="block w-6 h-0.5 bg-white" />
              </div>
            </Button>
          </SheetTrigger>

          <SheetContent side="right" style={{ background: "#0B2240" }}>
            <div className="text-white font-bold text-lg mb-8 ml-5 mt-2">
              Aqua<span style={{ color: "#C8922A" }}>Safe</span> Florida
            </div>

            <div className="flex flex-col gap-1">
              {["Walk-in Tubs", "Safety Features", "Financing", "About"].map((item) => (
                <a
                  key={item}
                  href="#"
                  onClick={() => setOpen(false)}
                  className="text-white/80 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="mt-8">
              <a href="#form" onClick={() => setOpen(false)}>
                <Button
                  className="w-full cursor-pointer font-bold text-white"
                  style={{ background: "#C8922A" }}
                >
                  Get Free Quote →
                </Button>
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}