import { Inter } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./Components/Providers";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Analytics Dashboard",
  description: "Created by Queendoline",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${jakarta.className} dark:bg-black bg-gray-scale`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
