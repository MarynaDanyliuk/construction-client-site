import "./globals.css";
import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Служба замовника",
  description: "Якісне супроводження будівництва",
  verification: {
    google: "Nd3xkwZ_BVl7tJtoVkm8saw-T12xP08n97ebIZmMlK8", // ← Твій код
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
