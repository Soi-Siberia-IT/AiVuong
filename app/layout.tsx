import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MusicToggle from "@/components/musicToggle";
import { AppProvider } from "@/context/AppContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Happy Birthday Ái Vương",
  description: "Mông chị có một ngày sinh nhật thật vui vẻ và hạnh phúc! Chúc chị luôn xinh đẹp, thành công và tràn đầy niềm vui trong cuộc sống. Happy Birthday! 🎉🎂🎁",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AppProvider>
          {children}
          <div className="absolute bottom-4 right-4">
            <MusicToggle />
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
