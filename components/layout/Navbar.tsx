"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

// ─── Programmes dropdown items ───────────────────────────────────────────────
const programmesDropdown = [
  {
    label: "Leadership Training",
    href: "/programmes/leadership-training",
    description: "Build the skills to lead with impact and confidence",
  },
  {
    label: "Leadership Coaching",
    href: "/programmes/leadership-coaching",
    description: "One-to-one coaching to unlock your leadership potential",
  },
];

// ─── Primary nav links ────────────────────────────────────────────────────────
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Programmes", href: "/programmes", hasDropdown: true },
  { label: "Products", href: "/products" },
  { label: "Events", href: "/events" },
  { label: "Metrics", href: "/metrics" },
  { label: "Free Resources", href: "/free-resources" },
  { label: "Donate", href: "/donate" },
  { label: "About Us", href: "/about" },
];

// ─── Chevron icon ─────────────────────────────────────────────────────────────
function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProgOpen, setMobileProgOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white border-b border-[#E5E7EB] shadow-sm">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[85px]">
          <div className="flex items-center justify-between h-[76px] gap-[10px]">

            {/* ── Logo ───────────────────────────────────────────────────────── */}
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/logo.png"
                alt="Elevate"
                width={40}
                height={40}
                priority
                className="h-10 w-10 object-contain"
              />
            </Link>

            {/* ── Desktop Nav ─────────────────────────────────────────────────── */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 font-poppins">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  // Programmes with dropdown
                  <div key={link.label} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setDropdownOpen((prev) => !prev)}
                      className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
                        dropdownOpen || pathname.startsWith("/programmes")
                          ? "text-[#4229C9]"
                          : "text-[#1F2937] hover:text-[#4229C9] hover:bg-[#EEEBF9]"
                      }`}
                    >
                      {link.label}
                      <ChevronDown open={dropdownOpen} />
                    </button>

                    {/* Dropdown panel */}
                    {dropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white rounded-xl shadow-2xl shadow-black/10 border border-[#E5E7EB] py-2 z-50">
                        {/* Arrow pointer */}
                        <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-white border-t border-l border-[#E5E7EB] rotate-45 rounded-tl-sm" />

                        {programmesDropdown.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setDropdownOpen(false)}
                            className="block px-5 py-3 text-sm font-medium text-[#1F2937] hover:text-[#4229C9] hover:bg-[#F8F9FF] transition-colors duration-150"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  // Regular nav link
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
                      pathname === link.href
                        ? "text-[#4229C9]"
                        : "text-[#1F2937] hover:text-[#4229C9] hover:bg-[#EEEBF9]"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* ── CTA Button ──────────────────────────────────────────────────── */}
            <Link
              href="/join"
              className="hidden lg:inline-flex items-center justify-center bg-[#4229C9] hover:bg-[#3520A8] active:bg-[#2A198A] text-white font-poppins font-medium transition-colors duration-150 whitespace-nowrap flex-shrink-0"
              style={{
                width: "159px",
                height: "48px",
                borderRadius: "12px",
                padding: "12px 24px",
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "-0.01em",
              }}
            >
              Join Us Today
            </Link>

            {/* ── Mobile Hamburger ────────────────────────────────────────────── */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md text-[#1F2937] hover:bg-[#F3F4F6] transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ─────────────────────────────────────────────────── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* Slide-in drawer */}
          <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col">
            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#E5E7EB]">
              <Link href="/" onClick={() => setMobileOpen(false)}>
                <Image
                  src="/logo.png"
                  alt="Elevate"
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-9 h-9 flex items-center justify-center rounded-md text-[#6B7280] hover:bg-[#F3F4F6] transition-colors"
                aria-label="Close menu"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Drawer links */}
            <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-0.5">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setMobileProgOpen((prev) => !prev)}
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-[#1F2937] hover:bg-[#F8F9FF] transition-colors"
                    >
                      {link.label}
                      <ChevronDown open={mobileProgOpen} />
                    </button>

                    {mobileProgOpen && (
                      <div className="ml-3 mt-1 mb-1 space-y-0.5 border-l-2 border-[#EEF0FF] pl-3">
                        {programmesDropdown.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-2 rounded-md text-sm text-[#6B7280] hover:text-[#4229C9] hover:bg-[#EEEBF9] transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2.5 rounded-lg text-sm font-medium text-[#1F2937] hover:text-[#4229C9] hover:bg-[#EEEBF9] transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Drawer footer CTA */}
            <div className="px-5 py-5 border-t border-[#E5E7EB]">
              <Link
                href="/join"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center bg-[#4229C9] hover:bg-[#3520A8] text-white text-sm font-semibold px-5 py-3 rounded-md transition-colors"
              >
                Join Us Today
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
