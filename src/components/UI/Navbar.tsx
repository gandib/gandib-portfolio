"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import NextLink from "next/link";
import { siteConfig } from "@/src/config/site";
import { Logo } from "@/src/components/icons";
import { ThemeSwitch } from "./theme-switch";
import { usePathname, useRouter } from "next/navigation";

export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <NextUINavbar
      maxWidth="2xl"
      position="sticky"
      // className="bg-gray-600"
      isBordered={true}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            {/* <Logo /> */}
            <p className="font-bold text-lg  bg-gradient-to-l from-primary-500 to-fuchsia-500 bg-clip-text text-transparent">
              GANDIB DHARI ROY
            </p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start items-center ml-2">
          {/* <NavbarItem>
            <NextLink
              className={`text-sm font-bold ${pathname === "/recent" ? "text-primary-500" : ""}`}
              href="/recent"
            >
              Recent
            </NextLink>
          </NavbarItem> */}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden md:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        {siteConfig.navMenuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={pathname === item.href ? "primary" : "foreground"}
              href={item.href}
              size="lg"
              className="font-bold"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarItem className="hidden lg:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {/* <NavbarItem>
            <NextLink
              className={`text-lg ${pathname === "/recent" ? "text-primary-500" : ""}`}
              href="/recent"
            >
              Recent
            </NextLink>
          </NavbarItem> */}

          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={pathname === item.href ? "primary" : "foreground"}
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
