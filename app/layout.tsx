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

const title = "Sofía Orrego | Portafolio de arquitectura";
const description = "Proyectos de arquitectura, paisaje y patrimonio de Sofía Orrego.";
const socialImage = {
  url: "/opengraph.jpg",
  width: 1200,
  height: 630,
  type: "image/jpeg",
  alt: "Sofía Orrego. Portafolio de arquitectura con imágenes de Lodge Senior, el Archivo Tomi Ungerer y el Pabellón de Cine de Lebu.",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sofiaorrego.github.io"),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: "Sofía Orrego",
    url: "/",
    title,
    description,
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es" className={ibmPlexSans.variable}>
      <body>{children}</body>
    </html>
  );
}
