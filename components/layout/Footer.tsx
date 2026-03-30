import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black">
      {/* Main footer */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-[85px] py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:flex lg:justify-between gap-8 lg:gap-[57px]">

          {/* Brand — full width on mobile */}
          <div className="col-span-2 lg:flex-shrink-0 lg:w-[368px]">
            <div className="mb-4">
              <Image src="/logo.png" alt="Elevate" width={40} height={40} unoptimized className="h-10 w-10 object-contain"/>
            </div>
            <p className="text-white/70 font-poppins text-sm lg:text-base" style={{ fontWeight: 400, lineHeight: "24px", maxWidth: "368px" }}>
              ElevateBrand CiC (Elev8) - supporting Black and Migrant creatives through practical learning and community
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-white font-poppins font-semibold mb-4 text-base lg:text-[24px]" style={{ lineHeight: "28px" }}>Quick Links</p>
            <ul className="flex flex-col gap-3">
              {[{ label: "About", href: "/about" }, { label: "Programmes", href: "/programmes" }, { label: "Impact", href: "/metrics" }].map((l) => (
                <li key={l.label}><Link href={l.href} className="text-white/70 hover:text-white transition-colors font-poppins text-sm lg:text-base">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* For Partners */}
          <div>
            <p className="text-white font-poppins font-semibold mb-4 text-base lg:text-[24px]" style={{ lineHeight: "28px" }}>For Partners</p>
            <ul className="flex flex-col gap-3">
              {[{ label: "Partnerships", href: "/partners" }, { label: "Digital Products", href: "/products" }].map((l) => (
                <li key={l.label}><Link href={l.href} className="text-white/70 hover:text-white transition-colors font-poppins text-sm lg:text-base">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-poppins font-semibold mb-4 text-base lg:text-[24px]" style={{ lineHeight: "28px" }}>Contact</p>
            <ul className="flex flex-col gap-3">
              <li><Link href="/contact" className="text-white/70 hover:text-white transition-colors font-poppins text-sm lg:text-base">Get in Touch</Link></li>
              <li><a href="mailto:hello@elev8cic.co.uk" className="text-white/70 hover:text-white transition-colors font-poppins text-sm lg:text-base">hello@elev8cic.co.uk</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-5 py-8 lg:py-16">
          <p className="text-white/50 text-center font-poppins text-xs lg:text-sm">© 2026 ElevateBrand CiC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
