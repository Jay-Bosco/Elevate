import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "600px" }}>

      {/* ── Layer 1: People photo ─────────────────────────────────────────── */}
      <Image
        src="/hero-bg.jpg"
        alt="Elevate community workshop"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* ── Layer 2: Gradient overlay ──────────────────────────────────────── */}
      <Image
        src="/hero-overlay.png"
        alt=""
        fill
        priority
        className="object-cover object-center"
        style={{ opacity: 0.92 }}
        sizes="100vw"
        aria-hidden="true"
      />

      {/* ── Layer 3: Extra depth vignette ────────────────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 20%, rgba(8,4,48,0.45) 100%)",
        }}
      />

      {/* ── Layer 4: Content ─────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-8 py-24 sm:py-28 lg:py-36" style={{ gap: "24px" }}>

        {/* Heading */}
        <h1
          className="font-poppins text-white mx-auto mb-4"
          style={{
            fontWeight: 600,
            fontSize: "clamp(36px, 5.5vw, 64px)",
            lineHeight: "clamp(44px, 6.5vw, 72px)",
            letterSpacing: "-0.02em",
            maxWidth: "491px",
            textAlign: "center",
          }}
        >
          From Exclusion
          <br />
          to{" "}
          <span style={{ color: "#FFFFFF" }}>Elevation</span>
        </h1>

        {/* Divider line */}
        <div>
          <Image
            src="/hero-divider.png"
            alt=""
            width={370}
            height={4}
            aria-hidden="true"
            className="mx-auto w-[200px] sm:w-[300px] lg:w-[370px]"
          />
        </div>

        {/* Subtitle */}
        <p
          className="font-poppins text-white mx-auto"
          style={{
            fontWeight: 400,
            fontSize: "clamp(14px, 2.5vw, 16px)",
            lineHeight: "28px",
            letterSpacing: "-0.02em",
            maxWidth: "min(714px, 90vw)",
            textAlign: "center",
          }}
        >
          ElevateBrand CiC (Elev8) supports Black and migrant creatives through design
          thinking education, leadership development, coaching, and entrepreneurship
          support — grounded in lived experience and community-led learning.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
          {/* Apply for a Cohort */}
          <Link
            href="/programmes"
            className="font-poppins bg-white hover:bg-white/90 transition-all duration-200 inline-flex items-center justify-center w-full sm:w-auto"
            style={{
              minWidth: "200px",
              height: "50px",
              borderRadius: "8px",
              border: "2px solid #FFFFFF",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "100%",
              letterSpacing: "0",
              color: "#4229C9",
              padding: "0 24px",
            }}
          >
            Apply for a Cohort
          </Link>

          {/* Explore Digital Products */}
          <Link
            href="/products"
            className="font-poppins text-white hover:bg-white/20 transition-all duration-200 inline-flex items-center justify-center w-full sm:w-auto"
            style={{
              minWidth: "200px",
              height: "50px",
              borderRadius: "8px",
              border: "2px solid #FFFFFF",
              backgroundColor: "rgba(66, 41, 201, 0.24)",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "100%",
              letterSpacing: "0",
              padding: "0 24px",
            }}
          >
            Explore Digital Products
          </Link>
        </div>

        {/* Partner / Funder link */}
        <div className="flex items-center justify-center" style={{ gap: "10px" }}>
          <span
            className="font-poppins text-white"
            style={{ fontWeight: 400, fontSize: "12px", lineHeight: "100%", letterSpacing: "0" }}
          >
            Are you a partner or Funder?
          </span>
          <Link
            href="/partners"
            className="font-poppins text-white hover:text-white/80 flex items-center transition-colors duration-150"
            style={{ fontWeight: 400, fontSize: "12px", lineHeight: "100%", letterSpacing: "0", gap: "6px" }}
          >
            <span style={{ textDecoration: "underline" }}>Learn more</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
              <circle cx="10" cy="10" r="9" stroke="white" strokeWidth="1.5"/>
              <path d="M8.5 7l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
