import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import "./globals.css";

const ibmPlexSans = localFont({
  src: "./fonts/ibm-plex-sans.woff2",
  weight: "300 400",
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sofía Orrego | Portafolio",
  description: "Portafolio de Sofía Orrego.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es" className={ibmPlexSans.variable}>
      <body>{children}</body>
    </html>
  );
}
