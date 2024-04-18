import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LayoutProps } from "../../.next/types/app/layout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NavBar from "../components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cat Lab System",
  description: "powered by Cat Lab",
};
export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
         <body className={inter.className}>
        {/* provider is client component */}
          <Header />
            {children}
          <Footer />
      </body>
    </html>
  );
}
