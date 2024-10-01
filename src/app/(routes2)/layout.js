import Navbar from "@/components/navbar/Navbar";
import CommonProvider from "@/providers/CommonProvider";
import HamburgerProvider from "@/providers/HamburgerProvider";
import { Montserrat } from "next/font/google";
import "../globals.css";
const mono = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function layout({ children }) {
  return (
    <html lang="en">
      <body className={`dark:bg-black dark:text-white ${mono.className}`}>
        <CommonProvider>
          <HamburgerProvider>
            <Navbar />
            <main className="custom-container flex gap-2 w-full">
              {children}
            </main>
          </HamburgerProvider>
        </CommonProvider>
      </body>
    </html>
  );
}
