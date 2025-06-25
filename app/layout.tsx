import "./globals.css";
import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Служба замовника",
  description: "Якісне супроводження будівництва",
  verification: {
    google: "google0327f958737a26e3", // Додано тег для верифікації
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
