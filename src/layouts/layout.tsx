import type { Metadata } from "next";
import { inter, lexendDeca } from "@/app/fonts";
import cn from "@/utils/class-names";
import NextProgress from "@/components/next-progress";
import HydrogenLayout from "@/layouts/hydrogen/layout";
import { ThemeProvider, JotaiProvider } from "@/app/shared/theme-provider";
import GlobalDrawer from "@/app/shared/drawer-views/container";
import GlobalModal from "@/app/shared/modal-views/container";

import "../app/globals.css";

export const metadata: Metadata = {
  title: "Admin dashboard",
  description: "Manage the content of your site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
     
      suppressHydrationWarning
    >
      <body
        suppressHydrationWarning
        className={cn(inter.variable, lexendDeca.variable, "font-inter")}
      >
        <ThemeProvider>
          <NextProgress />
          <JotaiProvider>
            
            <HydrogenLayout>{children}</HydrogenLayout>
            <GlobalDrawer />
            <GlobalModal />
          </JotaiProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
