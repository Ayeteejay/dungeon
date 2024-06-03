import getGameData from "./lib/getGameData";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dungeon™",
  description: "Start your quest.",
};

export default async function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {

const gameData = await getGameData();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <main className="mx-auto mt-24 px-6  xl:px-0 max-w-screen-lg">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
