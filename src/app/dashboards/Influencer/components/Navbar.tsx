"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar({ title }: { title: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="navbar-container bg-gradient-light text-accent shadow-elevated flex justify-between items-center px-6 py-4">
        {/* Page Title */}
        <h1 className="text-2xl font-heading font-bold">{title}</h1>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={toggleMenu}
            className="flex items-center focus:outline-none"
          >
            <Image
              src="/images/dashboard/profile/avatar/test-profile (1).png"
              alt="Profile"
              width={48}
              height={48}
              className="rounded-full border-2 border-primary shadow-elevated"
              priority
            />
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-elevated text-sm z-10">
              <div className="p-4 text-center">
                <Image
                  src="/images/dashboard/profile/avatar/test-profile (1).png"
                  alt="Profile"
                  width={64}
                  height={64}
                  className="rounded-full mx-auto border-2 border-primary"
                  priority
                />
                <p className="font-bold mt-2">Jash</p>
                <p className="text-muted text-xs">The Charismatic Entertainer</p>
              </div>
              <hr className="my-2" />
              <ul className="text-left">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Your Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Theme
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Account Settings
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Log Out
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </motion.div>
  );
}
