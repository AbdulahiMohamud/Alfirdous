import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Home from "./Components/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Alfirdous Seattle",
  description: "Seattle event group",
};

export default function RootLayout( ) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Home/>
      
      
      </body>
    </html>
  );
}
