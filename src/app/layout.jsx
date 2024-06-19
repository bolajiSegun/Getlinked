import Navbar from "@/components/Nav/Navbar";
import "./globals.css";
import { montserrat } from "@/utils/fonts";

export const metadata = {
  title: "Getlinked",
  description: "Getlinked Hackathon 1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar /> {children}
      </body>
    </html>
  );
}
