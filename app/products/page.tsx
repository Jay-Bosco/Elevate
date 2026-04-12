import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

function StarIcon({ color = "#4229C9", fill = "rgba(66,41,201,0.1)" }: { color?: string; fill?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill={fill}/>
    </svg>
  );
}

function CheckCircle() {
  return (
    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <path d="M17.0833 0C13.7046 0 10.4017 1.00192 7.59235 2.87906C4.78301 4.7562 2.5934 7.42425 1.3004 10.5458C0.00740194 13.6674 -0.330905 17.1023 0.328259 20.4161C0.987423 23.73 2.61445 26.7739 5.0036 29.1631C7.39275 31.5522 10.4367 33.1793 13.7505 33.8384C17.0644 34.4976 20.4993 34.1593 23.6208 32.8663C26.7424 31.5733 29.4105 29.3837 31.2876 26.5743C33.1648 23.765 34.1667 20.4621 34.1667 17.0833C34.1621 12.5539 32.3609 8.21135 29.1581 5.00859C25.9553 1.80582 21.6127 0.00452261 17.0833 0Z" fill="#4229C9" fillOpacity="0.3"/>
      {/* Checkmark — fill #5D42ED */}
      <path d="M25.9786 13.0055L15.4075 23.5767C15.0871 23.897 14.6527 24.0769 14.1997 24.0769C13.7467 24.0769 13.3122 23.897 12.9919 23.5767L8.18805 18.7712C7.87686 18.449 7.70467 18.0174 7.70856 17.5695C7.71246 17.1216 7.89212 16.6931 8.20886 16.3764C8.5256 16.0597 8.95407 15.88 9.40199 15.8761C9.84991 15.8722 10.2814 16.0444 10.6036 16.3556L14.1997 19.9533L23.563 10.5917C23.8865 10.2879 24.3154 10.122 24.759 10.1289C25.2026 10.1357 25.6262 10.315 25.94 10.6286C26.2539 10.9422 26.4334 11.3656 26.4406 11.8092C26.4478 12.2529 26.2821 12.6819 25.9786 13.0055Z" fill="#4229C9"/>
    </svg>
  );
}

function DownloadIcon({ color = "#6B7280" }: { color?: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="flex-shrink-0" style={{ display: "inline", verticalAlign: "middle", marginRight: "5px" }}>
      <path d="M12 3v13M7 11l5 5 5-5M5 20h14" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const categories = [
  { title: "eBooks", description: "In-depth guides covering leadership, entrepreneurship, creative business development, and practical skills", features: ["Downloadable PDF format", "Workbook sections included", "Practical templates & tools"], btnLabel: "Browse eBooks", href: "/products/ebooks", iconBg: "#4229C94D", iconBorder: undefined, btnColor: "#4229C9", starColor: "#4229C9", starFill: "rgba(66,41,201,0.1)",
    icon: <svg width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 24.3333C1 23.4493 1.35119 22.6014 1.97631 21.9763C2.60143 21.3512 3.44928 21 4.33333 21H22.3333M1 24.3333C1 25.2174 1.35119 26.0652 1.97631 26.6904C2.60143 27.3155 3.44928 27.6667 4.33333 27.6667H22.3333V1H4.33333C3.44928 1 2.60143 1.35119 1.97631 1.97631C1.35119 2.60143 1 3.44928 1 4.33333V24.3333Z" stroke="#4229C9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { title: "Audiobooks", description: "Learn on the go with audio versions of our most popular guides, perfect for busy creatives", features: ["High-quality audio narration", "Listen anywhere, anytime", "Companion PDF included"], btnLabel: "Browse Audiobooks", href: "/products/audiobooks", iconBg: "#1E72AB4D", iconBorder: undefined, btnColor: "#178BDD", starColor: "#1E72AB", starFill: "rgba(30,114,171,0.1)",
    icon: <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 21.5V13.5C1.5 10.3174 2.76428 7.26516 5.01472 5.01472C7.26516 2.76428 10.3174 1.5 13.5 1.5C16.6826 1.5 19.7348 2.76428 21.9853 5.01472C24.2357 7.26516 25.5 10.3174 25.5 13.5V21.5M25.5 22.8333C25.5 23.5406 25.219 24.2189 24.719 24.719C24.2189 25.219 23.5406 25.5 22.8333 25.5H21.5C20.7928 25.5 20.1145 25.219 19.6144 24.719C19.1143 24.2189 18.8333 23.5406 18.8333 22.8333V18.8333C18.8333 18.1261 19.1143 17.4478 19.6144 16.9477C20.1145 16.4476 20.7928 16.1667 21.5 16.1667H25.5V22.8333ZM1.5 22.8333C1.5 23.5406 1.78095 24.2189 2.28105 24.719C2.78115 25.219 3.45942 25.5 4.16667 25.5H5.5C6.20724 25.5 6.88552 25.219 7.38562 24.719C7.88572 24.2189 8.16667 23.5406 8.16667 22.8333V18.8333C8.16667 18.1261 7.88572 17.4478 7.38562 16.9477C6.88552 16.4476 6.20724 16.1667 5.5 16.1667H1.5V22.8333Z" stroke="#178BDD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { title: "Education Programs", description: "Structured online courses with video lessons, assignments, and community support", features: ["Self-paced video modules", "Practical assignments", "Certificate of completion"], btnLabel: "View Programs", href: "/products/programs", iconBg: "#4229C94D", iconBorder: undefined, btnColor: "#4229C9", starColor: "#4229C9", starFill: "rgba(66,41,201,0.1)",
    icon: <svg width="29" height="21" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.6651 7.66714V15.6671M26.8918 8.89648C27.1305 8.79118 27.333 8.61817 27.4743 8.39888C27.6157 8.17959 27.6896 7.92366 27.6869 7.66279C27.6842 7.40192 27.605 7.14757 27.4592 6.93125C27.3133 6.71494 27.1072 6.54615 26.8664 6.44581L15.4384 1.24048C15.091 1.08201 14.7136 1 14.3318 1C13.9499 1 13.5725 1.08201 13.2251 1.24048L1.79843 6.44048C1.56105 6.54444 1.35912 6.71532 1.21732 6.93223C1.07552 7.14914 1 7.40267 1 7.66181C1 7.92095 1.07552 8.17448 1.21732 8.39139C1.35912 8.6083 1.56105 8.77918 1.79843 8.88314L13.2251 14.0938C13.5725 14.2523 13.9499 14.3343 14.3318 14.3343C14.7136 14.3343 15.091 14.2523 15.4384 14.0938L26.8918 8.89648Z" stroke="#4229C9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.33179 11.0005V15.6672C6.33179 16.728 7.17464 17.7454 8.67493 18.4956C10.1752 19.2457 12.2101 19.6672 14.3318 19.6672C16.4535 19.6672 18.4884 19.2457 19.9886 18.4956C21.4889 17.7454 22.3318 16.728 22.3318 15.6672V11.0005" stroke="#4229C9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
];

const featured = [
  { badge: "NEW", badgeBg: "#4229C94D", badgeText: "#5D42ED", badgeW: "44px", btnColor: "#4229C9", title: "The Creative Leader's Toolkit", description: "A comprehensive guide to developing your leadership style, building teams, and making values-led decisions as a creative entrepreneur.", price: "€ 19", meta: "Instant digital download • 120 pages", href: "/products/creative-leaders-toolkit" },
  { badge: "Popular", badgeBg: "#1E72AB4A", badgeText: "#1E72AB", badgeW: "60px", btnColor: "#178BDD", title: "From Side Hustle to Business", description: "A step-by-step course on transforming your creative passion into a sustainable income stream, with real examples and templates.", price: "€ 49", meta: "Online course • 9 modules • 4 hours", href: "/products/side-hustle-to-business" },
];

const reasons = [
  { title: "Affordable Access", description: "High-quality learning resources at a fraction of the cost of traditional training programs" },
  { title: "Learn Your Way", description: "Go at your own pace, revisit materials as needed, and fit learning around your schedule" },
  { title: "Practical & Actionable", description: "Real-world templates, frameworks, and exercises you can apply immediately" },
  { title: "Culturally Grounded", description: "Content created by and for Black and migrant creatives, reflecting real experiences" },
];

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section className="w-full flex items-center justify-center text-center px-5 py-16" style={{ minHeight: "346px", background: "linear-gradient(180deg, #2a1898 0%, #4229C9 40%, #4a90d9 80%, #6ab4f5 100%)" }}>
          <div style={{ width: "100%", maxWidth: "1191px", display: "flex", flexDirection: "column", gap: "24px", alignItems: "center", justifyContent: "center" }}>
            <h1 className="font-poppins text-white text-3xl sm:text-4xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.4", letterSpacing: "-0.02em", textAlign: "center", width: "100%", maxWidth: "1068px" }}>Digital Products</h1>
            <p className="text-white/90" style={{ fontFamily: "var(--font-dm-sans), Roboto, sans-serif", fontWeight: 400, fontSize: "24px", lineHeight: "36px", letterSpacing: "-0.02em", textAlign: "center", width: "100%", maxWidth: "736px" }}>
              Self-paced learning resources to support your creative and entrepreneurial journey
            </p>
          </div>
        </section>

        {/* ── Learn at Your Own Pace ── */}
        <section className="bg-white py-10 lg:py-16 px-5 sm:px-8 lg:px-[105px]">
          <div className="max-w-[1230px] mx-auto text-center">
            <h2 className="font-poppins text-[#111827] mb-6 text-xl sm:text-2xl lg:text-[32px]" style={{ fontWeight: 600, lineHeight: "1.2", letterSpacing: "-0.25px" }}>Learn at Your Own Pace</h2>
            <p className="font-poppins text-[#000000] mx-auto text-sm sm:text-base lg:text-[20px]" style={{ fontWeight: 400, lineHeight: "1.8", letterSpacing: "-0.25px", maxWidth: "1153px" }}>
              Our digital products provide accessible, affordable learning opportunities for creatives who want to upskill on their own schedule. From comprehensive guides to audio learning experiences, these resources are designed to meet you where you are in your journey.
            </p>
          </div>
        </section>

        {/* ── Available Products ── */}
        <section style={{ backgroundColor: "rgba(71,235,224,0.05)", padding: "60px 69px" }}>
          <div>
            <h2 className="font-poppins font-bold text-[#111827] text-center mb-10 text-xl sm:text-2xl lg:text-[28px]">Available Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: "16px", maxWidth: "1124px", margin: "0 auto" }}>
              {categories.map((cat) => (
                <div key={cat.title} className="bg-white flex flex-col" style={{ borderWidth: "0.2px", borderStyle: "solid", borderColor: "#E5E7EB", borderRadius: "12px", padding: "24px", minHeight: "388px" }}>
                  <div className="flex flex-col">
                  <div className="flex items-center justify-center flex-shrink-0 mb-5" style={{ width: "48px", height: "48px", borderRadius: "5px", backgroundColor: cat.iconBg, border: cat.iconBorder }}>{cat.icon}</div>
                  <p className="font-poppins text-[#111827] mb-4" style={{ fontWeight: 600, fontSize: "24px", lineHeight: "28px", letterSpacing: "-0.01em" }}>{cat.title}</p>
                  <p className="font-poppins text-[#374151] mb-5" style={{ fontWeight: 400, fontSize: "14px", lineHeight: "16px", letterSpacing: "0" }}>{cat.description}</p>
                  <ul className="flex flex-col gap-3">
                    {cat.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 font-poppins text-[#374151] text-sm"><StarIcon color={cat.starColor} fill={cat.starFill} /> {f}</li>
                    ))}
                  </ul>
                  </div>
                  <Link href={cat.href} className="font-poppins font-semibold text-white inline-flex items-center justify-center transition-colors mt-auto" style={{ width: "100%", maxWidth: "316px", height: "32px", borderRadius: "8px", paddingTop: "12px", paddingBottom: "12px", backgroundColor: cat.btnColor, fontSize: "14px" }}>{cat.btnLabel}</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Featured Products ── */}
        <section className="bg-white py-10 lg:py-16 px-5 sm:px-8 lg:px-[96px]">
          <div className="max-w-[1248px] mx-auto">
            <h2 className="font-poppins font-bold text-[#111827] text-center mb-10 text-xl sm:text-2xl lg:text-[28px]">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featured.map((p) => (
                <div key={p.title} className="border border-[#E5E7EB] rounded-2xl p-6 flex flex-col gap-3 bg-white hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <span className="font-poppins" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", backgroundColor: p.badgeBg, color: p.badgeText, width: p.badgeW, height: "18px", borderRadius: "5px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.02em", whiteSpace: "nowrap", lineHeight: 1 }}>{p.badge}</span>
                    <span className="font-poppins font-bold text-[#111827] text-xl lg:text-[22px]">{p.price}</span>
                  </div>
                  <p className="font-poppins font-semibold text-[#111827] text-base lg:text-lg">{p.title}</p>
                  <p className="font-poppins text-[#374151] flex-1 text-sm" style={{ lineHeight: "22px" }}>{p.description}</p>
                  <div className="flex flex-wrap items-center justify-between gap-3 mt-2">
                    <span className="font-poppins text-[#6B7280] text-xs inline-flex items-center"><DownloadIcon color="#6B7280" />{p.meta}</span>
                    <Link href={p.href} className="font-poppins font-semibold text-white inline-flex items-center justify-center transition-colors" style={{ height: "38px", padding: "0 18px", borderRadius: "8px", backgroundColor: p.btnColor, fontSize: "13px" }}>Purchase Now</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Choose ── */}
        <section className="px-5 sm:px-8 lg:px-[96px] py-10 lg:py-[60px]" style={{ backgroundColor: "rgba(71,235,224,0.05)" }}>
          <div className="max-w-[1248px] mx-auto">
            <h2 className="font-poppins font-bold text-[#111827] text-center mb-10 text-xl sm:text-2xl lg:text-[28px]">Why Choose Digital Products?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ columnGap: "60px", rowGap: "32px" }}>
              {reasons.map((r) => (
                <div key={r.title} className="flex items-start" style={{ gap: "10px", width: "100%", maxWidth: "517px" }}>
                  <CheckCircle />
                  <div>
                    <p className="font-poppins font-semibold text-[#111827] mb-1 text-base">{r.title}</p>
                    <p className="font-poppins text-[#374151] text-sm" style={{ lineHeight: "22px" }}>{r.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="w-full flex flex-col items-center justify-center text-center px-5 py-16 lg:py-0"
          style={{ minHeight: "350px", background: "linear-gradient(135deg, #2a1898 0%, #4229C9 50%, #1a7fc4 100%)", gap: "10px" }}
        >
          <h2 className="font-poppins font-bold text-white text-2xl lg:text-[32px]" style={{ lineHeight: "1.3", letterSpacing: "-0.25px" }}>Start Learning Today</h2>
          <p className="font-poppins text-white/80 text-sm lg:text-base" style={{ lineHeight: "24px" }}>Invest in your growth with our curated digital products</p>
          <div className="flex flex-col sm:flex-row items-center justify-center mt-2" style={{ gap: "8px", width: "100%", maxWidth: "415px" }}>
            <Link href="/products" className="font-poppins font-medium inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-colors" style={{ width: "209px", height: "50px", borderRadius: "8px", border: "1px solid white", backgroundColor: "transparent", color: "white", fontSize: "15px", padding: "0 12px", flexShrink: 0 }}>Browse All Products</Link>
            <Link href="/free-resources" className="font-poppins font-medium inline-flex items-center justify-center gap-2 hover:bg-white/90 transition-colors" style={{ width: "209px", height: "50px", borderRadius: "8px", border: "2px solid white", backgroundColor: "white", color: "#4229C9", fontSize: "15px", padding: "0 12px", flexShrink: 0 }}>View Free Resources</Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
