"use client";

import Link from "next/link";
import HamburgerButton from "@/layouts/hamburger-button";
import SearchWidget from "@/components/search/search";
import Sidebar from "@/layouts/hydrogen/sidebar";
import HeaderMenuRight from "@/layouts/header-menu-right";
import StickyHeader from "@/layouts/sticky-header";
import { useRouter } from "next/navigation";
import { Title } from "rizzui";

export default function Header() {
  const router = useRouter();
  

  return (
    <StickyHeader className="z-[90] 2xl:py-5 3xl:px-8  4xl:px-10">
    <div className="flex w-full max-w-2xl items-center">
    <HamburgerButton
      view='hello'
      placement="left"
      className="text-webSecondary dark:text-gray-300"
      // hide={false}
    />
     
        <Link
          href={"/"}
          aria-label="Site Logo"
          className="me-4 shrink-0 text-gray-800 hover:text-gray-900 lg:me-5 xl:hidden"
        >
            <div className="flex-shrink-0">
            <img
              onClick={() => router.push("/admin")}
              className="cursor-pointer w-17 lg:w-40 bg-gray-600 rounded-lg"
              src="/image/Logo.png"
              alt="Logo"
            />
          </div>
        </Link>

        <SearchWidget />
      </div>

      <HeaderMenuRight />
    </StickyHeader>
  );
}
