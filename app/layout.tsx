import type { Metadata } from "next";
import { DM_Sans, Lora, Noto_Naskh_Arabic } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/app/components/site-shell";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-display",
  subsets: ["latin"],
});

const arabic = Noto_Naskh_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic", "latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rajo Charity | Care that reaches further",
    template: "%s | Rajo Charity",
  },
  description:
    "Rajo Charity works alongside communities to make care, opportunity, and hope reach further.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${lora.variable} ${arabic.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
