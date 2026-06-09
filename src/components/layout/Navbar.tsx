"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Bell, User, Menu, X, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { SearchSystem } from "@/components/SearchSystem";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Trending", href: "/trending" },
  { name: "New Episodes", href: "/new" },
  { name: "Movies", href: "/movies" },
  { name: "Genres", href: "/genres" },
  { name: "Schedule", href: "/schedule" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "glass-dark py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-anime-red rounded-lg flex items-center justify-center neon-glow-red transition-transform group-hover:scale-110">
              <Play className="fill-white text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white">
              AKAI<span className="text-anime-red">STREAM</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white hover:text-glow-red transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-5">
          <div className="hidden lg:block">
            <SearchSystem />
          </div>
          <button className="text-white/70 hover:text-white transition-colors cursor-pointer relative">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-anime-red rounded-full neon-glow-red" />
          </button>
          <div className="w-10 h-10 rounded-full border-2 border-white/10 overflow-hidden cursor-pointer hover:border-anime-red transition-colors">
            <User className="w-full h-full p-2 bg-white/5" />
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-dark border-t border-white/10 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col p-6 gap-4">
            <div className="mb-4">
               <SearchSystem />
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-white/70 hover:text-white py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
