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
    <html lang="en" className={`${inter.className}`}>
      <body>
        {/* provider is client component */}
          <Header />
          <main className="h-[calc(100vh-theme(data.md-header-h)-theme(data.md-footer-h))] bg-dark-900 px-3">
            {children}
          </main>
          <Footer />
      </body>
    </html>
  );
}
