"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { MenuIcon } from "lucide-react";

import { Button, buttonVariants } from "./ui/button";
import { Separator } from "./ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export const routes = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "pricing" },
  { label: "About", href: "about" },
  { label: "Contact", href: "contact" },
];

export default function Header() {
  const pathName = usePathname();
  const activeRoute =
    routes.find(
      (route) => route.href.length > 1 && pathName.includes(route.href)
    ) || routes[0];

  return (
    <header className="container flex h-16 items-center justify-between px-6 py-4 sm:h-24 lg:px-16">
      <div className="flex items-center justify-between gap-x-39 sm:gap-4">
        {/* Mobile Navbar */}
        <Link href="/" className="">
          <Image
            src="/assets/shared/desktop/logo.svg"
            alt="logo"
            width={135}
            height={38}
          />
        </Link>
        <MobileSidebar />
        {/* Desktop Navbar */}
        <nav className="hidden sm:flex">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={buttonVariants({
                variant:
                  activeRoute.href === route.href
                    ? "navbarItemActive"
                    : "navbarItem",
              })}
            >
              {route.label}
            </Link>
          ))}
        </nav>
      </div>
      <Button variant={"navbarButton"} className="hidden sm:block" size={"lg"}>
        <Link href="/contact">Schedule a Demo</Link>
      </Button>
    </header>
  );
}

export function MobileSidebar() {
  const [isOpen, setOpen] = useState(false);
  const pathName = usePathname();
  const activeRoute =
    routes.find(
      (route) => route.href.length > 1 && pathName.includes(route.href)
    ) || routes[0];
  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant={"ghost"} size={"icon"} className="mt-2">
            <MenuIcon className="size-8 text-[#36536B]" />
          </Button>
        </SheetTrigger>
        <SheetContent
          className="flex flex-col items-center bg-[#1B262F] pt-24"
          side="right"
        >
          <Separator className="" />
          <nav className="flex flex-col items-center justify-center gap-y-4 pt-16">
            {routes.map((route) => {
              return (
                <Link
                  href={route.href}
                  key={route.label}
                  className={buttonVariants({
                    variant:
                      activeRoute.href === route.href
                        ? "navbarItemMobileActive"
                        : "navbarItemMobile",
                  })}
                  onClick={() => setOpen((prev) => !prev)}
                >
                  {route.label}
                </Link>
              );
            })}
          </nav>
          <Button variant={"navbarButton"} className="mt-4" size={"xl"}>
            <Link href="/contact">Schedule a Demo</Link>
          </Button>
        </SheetContent>
      </Sheet>
    </div>
  );
}
