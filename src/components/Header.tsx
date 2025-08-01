"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTheme } from "next-themes";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/pricing", label: "Pricing" },
    { href: "/resources", label: "Resources" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "mx-4 md:mx-8 mt-4"
        : "mx-0 mt-0"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={`max-w-7xl mx-auto px-4 md:px-6 py-4 transition-all duration-300 ${isScrolled
          ? "bg-background/80 backdrop-blur-md rounded-2xl shadow-lg border border-border/50"
          : "bg-transparent"
          }`}
        layout
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src={mounted && resolvedTheme === 'dark' ? "/logo_dark.svg" : "/logo_light.svg"}
              alt="Zarespace Digital"
              width={40}
              height={40}
              className="transition-opacity duration-300"
            />
            <span className={`hidden md:block font-bold text-l transition-colors duration-300 font-ttlakes ${isScrolled ? "text-foreground" : "text-slate-950 dark:text-white"
              }`}>
              Zarespace Digital
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors duration-300 hover:text-primary ${isScrolled ? "text-foreground" : "text-slate-950 dark:text-white"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Theme Toggle, CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button
              className={`hidden sm:flex ${isScrolled
                ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                : "bg-primary hover:bg-primary/90 text-primary-foreground"
                }`}
            >
              Get Started
            </Button>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 transition-colors duration-300 ${isScrolled ? "text-foreground" : "text-slate-950 dark:text-white"
                }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-4 pt-4 border-t border-border/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors duration-300 hover:text-primary ${isScrolled ? "text-foreground" : "text-slate-950 dark:text-white"
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started
              </Button>
            </nav>
          </motion.div>
        )}
      </motion.div>
    </motion.header>
  );
}