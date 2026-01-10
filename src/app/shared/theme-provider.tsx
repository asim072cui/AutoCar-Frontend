"use client";

import { Provider } from "jotai";
import { siteConfig } from "@/config/site.config";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import React from "react";

/* ======================
   THEME PROVIDER
====================== */
export function ThemeProvider({
  children,
}: React.PropsWithChildren) {
  return (
    <NextThemeProvider
      enableSystem={false}
      defaultTheme={String(siteConfig.mode)}
    >
      {children}
    </NextThemeProvider>
  );
}

/* ======================
   JOTAI PROVIDER
====================== */
export function JotaiProvider({
  children,
}: React.PropsWithChildren) {
  return <Provider>{children}</Provider>;
}
