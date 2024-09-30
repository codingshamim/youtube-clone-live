import Navbar from "@/components/navbar/Navbar";
import "../globals.css";
import { Montserrat } from "next/font/google";

import HamburgerProvider from "@/providers/HamburgerProvider";
import Sidebar from "@/components/sidebar/Sidebar";

const mono = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`dark:bg-black dark:text-white ${mono.className}`}>
        <HamburgerProvider>
          <Navbar />
          <main className="custom-container flex gap-2 w-full">
            <Sidebar />
            <div className="w-full md:w-[80%] mt-2 md:px-4 rounded-md">
              {" "}
              {children}
            </div>
          </main>
        </HamburgerProvider>
      </body>
    </html>
  );
}
