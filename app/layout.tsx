import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import "./globals.css";

const lato = localFont({
  src: [
    { path: "./fonts/lato-regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/lato-italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/lato-bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-lato",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Sofía Orrego | Portafolio",
  description: "Portafolio de Sofía Orrego.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es" className={lato.variable}>
      <body>{children}</body>
    </html>
  );
}
