import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/global_components/navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "COMPASS Institution",
  description: "A website for COMPASS Institution at UCSD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}