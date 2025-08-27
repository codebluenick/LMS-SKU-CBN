import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lama Dev School Management Dashboard",
  description: "Next.js School Management System",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="h-screen flex">
        {/* LEFT (Horizontal menu layout)*/}
        <div className="w-[14%] md:w[8%] lg:w[16%] xl:w[14%] bg-red-200">l</div>
        {/* RIGHT (Dashboard view layout)*/}
        <div className="w-[86%] md:w[8%] lg:w[84%] xl:w[86%%] bg-blue-200">r</div>
      </div>
  );
}
