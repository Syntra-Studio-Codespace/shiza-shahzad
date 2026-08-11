import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shiza Shahzad - Microbiologist & Molecular Geneticist",
  description:
    "Portfolio of Shiza Shahzad, a microbiologist and molecular geneticist, featuring research, experience, publications, and professional work.",
  metadataBase: new URL("https://shiza-shahzad.example"),
  openGraph: {
    title: "Shiza Shahzad - Microbiologist & Molecular Geneticist",
    description:
      "A precise, editorial scientific portfolio for Shiza Shahzad.",
    type: "profile",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#F4EBDD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
