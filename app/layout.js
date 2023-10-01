import "@/styles/globals/globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/globals/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HelpmeOut",
  description: "Show them, don't just tell",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-[100vh] flex flex-col`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
