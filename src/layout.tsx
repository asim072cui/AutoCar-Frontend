import type { Metadata } from "next";
import { inter, lexendDeca } from "@/app/fonts";
import cn from "@/utils/class-names";
import NextProgress from "@/components/next-progress";
import HydrogenLayout from "@/layouts/hydrogen/layout";
import { ThemeProvider, JotaiProvider } from "@/app/shared/theme-provider";
import GlobalDrawer from "@/app/shared/drawer-views/container";
import GlobalModal from "@/app/shared/modal-views/container";
// import { DrawerProvider } from "@/app/shared/drawer-views/use-drawer";


import "./globals.css";

export const metadata: Metadata = {
  title: "Auto Car Admin Dashboard",
  description: "Admin dashboard for Auto Car application",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      // 💡 Prevent next-themes hydration warning
      suppressHydrationWarning
    >
      <body
        // to prevent any warning that is caused by third party extensions like Grammarly
        suppressHydrationWarning
        className={cn(inter.variable, lexendDeca.variable, "font-inter")}
      >
        <ThemeProvider>
          <NextProgress />
          <JotaiProvider>
            {/* <DrawerProvider> */}
              <HydrogenLayout>{children}</HydrogenLayout>
              <GlobalDrawer />
              <GlobalModal />
            {/* </DrawerProvider> */}
          </JotaiProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
