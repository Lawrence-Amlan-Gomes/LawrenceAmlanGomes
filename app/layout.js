import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Nav from "@/components/nav/Nav";
import colors from "./colors/colors";
import { dbConnect } from "@/services/mongo";
import MobileNav from "@/components/MoblileNav";

export const metadata = {
  title: "Lawrence Amlan",
  description: "Personal Portfolio",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          href="/icon.png"
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <body
        className={`${colors.bg} w-screen h-screen overflow-hidden relative`}
      >
        <div className="sm:w-full sm:h-[10%] h-0 w-0 overflow-hidden relative">
          <Nav />
        </div>
        <div className="w-full sm:h-0 sm:w-0 h-[10%] opacity-100 sm:opacity-0 relative">
          <MobileNav />
        </div>
        <div className="w-full sm:h-[90%] h-[80%] overflow-hidden relative">
          {children}
        </div>
        <div className="w-full sm:h-0 sm:w-0 border-[#222222] text-[#dddddd] text-[11px] flex justify-center items-center border-t-[1px] h-[10%] opacity-100 sm:opacity-0 relative">
          Lawrence Amlan Gomes
        </div>
      </body>
    </html>
  );
}
