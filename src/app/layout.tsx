import "./globals.css";
import logo from "/public/company/logo.png";
import { Inter } from "next/font/google";
import Nav from "@/components/layout/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Top Prop",
  description: "Website for Top Prop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body>
        <Nav />
        {children}
      </body>
      <link rel="icon" type="image/x-icon" href={logo.src} />
    </html>
  );
}
