import type { Metadata } from "next";
import {
  ClerkProvider,
  /*
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  */
} from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import Navbar from "@/app/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "lms-web-app",
  description: "AI-generated study aids.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}

/*
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <div className="flex justify-between m-2">
                <UserButton />
                <SignedOut />
              </div>
            </SignedIn>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
*/