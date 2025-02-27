"use client";

/* import { useState } from "react"; */
import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from 'next/image'
import logoBox from '../../../public/logobox.png'

const Navbar = () => {

  {/* For Mobile If Needed
   const [isMenuOpen, setIsMenuOpen] = useState(false);
  */}

  return (
    <nav className="relative top-0 left-0 w-full z-50 bg-[#2864ec]">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          {/* Logo and Text */}
          <div className="flex items-center space-x-2"> {/* Use flex and space-x for spacing */}
            <div className="flex-shrink-0 relative w-12 h-12"> {/* Set specific width and height for the logo */}
              <Image
                src={logoBox}
                alt="Lectern logo"
                style={{ objectFit: "cover" }} 
              />
            </div>
            <Link href="/" className="text-xl font-extrabold text-white dark:text-white">
              lectern
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="flex space-x-6">
            <header className="flex justify-end items-center h-16">
              <SignedOut>
                <SignInButton>
                  <button className="text-white hover:text-gray-200 font-semilight py-2 px-4 rounded">
                  Sign In
                  </button>
                </SignInButton> 
                <SignInButton>
                  <button className="bg-gray-800 font-semilight hover:bg-gray-700 transi text-white font-bold py-2 px-4 rounded">
                  Get Started
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <div className="flex justify-between m-2">
                  <UserButton />

                </div>
              </SignedIn>
            </header>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


/*

IF NEEDED: Mobile View Menu

  Mobile Menu Button
  <button
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    className="sm:hidden p-2 text-black dark:text-white focus:outline-none"
    aria-label="Toggle menu"
  >
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
  </button>


  Mobile Menu 
  {isMenuOpen && (
    <div className="sm:hidden flex flex-col items-center gap-y-4 pb-4">
      <Link href="/page1" className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300">
        page1
      </Link>
      <Link href="/page2" className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300">
        page2
      </Link>
      <Link href="/page3" className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300">
        page3
      </Link>
    </div>
  )}
*/
