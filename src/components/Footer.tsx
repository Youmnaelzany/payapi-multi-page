"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";

import { routes } from "./Header";
import { buttonVariants } from "./ui/button";

export default function Footer() {
  const pathName = usePathname();
  const activeRoute =
    routes.find(
      (route) => route.href.length > 1 && pathName.includes(route.href)
    ) || routes[0];

  return (
    <footer className="flex h-auto w-full flex-col items-center justify-center gap-8 bg-[#1B262F] px-6 py-16 sm:h-24 sm:flex-row sm:justify-between sm:py-0 lg:px-16">
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
        <Link href="/">
          <Image
            src="/assets/shared/desktop/logo-white.svg"
            alt="logo"
            width={135}
            height={38}
          />
        </Link>
        <nav className="flex flex-col items-center justify-center text-center sm:flex-row sm:text-left">
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
      <div className="flex items-center gap-x-4 sm:mt-0">
        <Link href="/">
          <ImFacebook2 className="size-5 fill-[#FBFCFE] hover:fill-[#DA6D97]" />
        </Link>
        <Link href="/">
          <FaXTwitter className="size-5 fill-[#FBFCFE] hover:fill-[#DA6D97]" />
        </Link>
        <Link href="/">
          <FaLinkedin className="size-5 fill-[#FBFCFE] hover:fill-[#DA6D97]" />
        </Link>
      </div>
    </footer>
  );
}
