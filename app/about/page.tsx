import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const visionMission = [
  {
    title: "Vision",
    description: "A world where Black and migrant individuals can live and work without the constraints of financial instability, systemic exclusion, or lack of opportunity — ending cycles of destitution and building stability, confidence, and dignity.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.0833 36.1667C28.5182 36.1667 36.1667 28.5182 36.1667 19.0833C36.1667 9.64847 28.5182 2 19.0833 2C9.64847 2 2 9.64847 2 19.0833C2 28.5182 9.64847 36.1667 19.0833 36.1667Z" stroke="#4229C9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.0833 29.3333C24.7443 29.3333 29.3333 24.7443 29.3333 19.0833C29.3333 13.4224 24.7443 8.83333 19.0833 8.83333C13.4224 8.83333 8.83333 13.4224 8.83333 19.0833C8.83333 24.7443 13.4224 29.3333 19.0833 29.3333Z" stroke="#4229C9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.0833 22.5C20.9703 22.5 22.5 20.9703 22.5 19.0833C22.5 17.1964 20.9703 15.6667 19.0833 15.6667C17.1964 15.6667 15.6667 17.1964 15.6667 19.0833C15.6667 20.9703 17.1964 22.5 19.0833 22.5Z" stroke="#4229C9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Mission",
    description: "To deliver practical, culturally grounded programmes that enable participants to monetise skills, build confidence, start ventures, and access real income opportunities.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="#4229C9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Value Proposition",
    description: "For low-income Black and migrant creatives (20–45), our hybrid platform provides skills, confidence, and support to build sustainable livelihoods through online and in-person learning.",
    icon: (
      <svg width="22" height="33" viewBox="0 0 22 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.87635 26.375H16.1264M7.58469 31.5H14.418M5.87635 21.25C5.87806 17.8333 5.02389 16.9792 3.31385 15.2708C1.60381 13.5625 0.79406 11.832 0.751352 9.29167C0.67106 4.08125 4.16802 0.75 11.0014 0.75C17.8364 0.75 21.3351 4.08125 21.2514 9.29167C21.2121 11.832 20.3972 13.5625 18.6889 15.2708C16.9822 16.9792 16.1281 17.8333 16.1264 21.25" stroke="#4229C9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const differences = [
  { title: "Lived-experience-led programme design", titleW: "100%", titleNowrap: true, descW: "492px", description: "Our programmes are shaped by those who understand the challenges firsthand, ensuring relevance and authenticity." },
  { title: "Culturally relevant and dignity-first delivery", titleW: "520px", titleNowrap: false, descW: "469px", description: "We center respect, cultural understanding, and dignity in every interaction and programme delivery." },
  { title: "A full ecosystem: mindset + skills + leadership + income pathways", titleW: "395px", titleNowrap: false, descW: "546px", description: "We don't just teach skills—we support the whole person through mindset shifts, leadership development, and clear paths to income." },
  { title: "Hybrid access: online options and community-based delivery", titleW: "405px", titleNowrap: false, descW: "526px", description: "Flexible learning that meets people where they are, with both online and in-person options for maximum accessibility." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section className="w-full flex items-center justify-center text-center px-5 py-16" style={{ minHeight: "346px", background: "linear-gradient(180deg, #2a1898 0%, #4229C9 40%, #4a90d9 80%, #6ab4f5 100%)" }}>
          <div style={{ width: "100%", maxWidth: "1191px", display: "flex", flexDirection: "column", gap: "24px", alignItems: "center", justifyContent: "center" }}>
            <h1 className="font-poppins text-white text-3xl sm:text-4xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.4", letterSpacing: "-0.02em", textAlign: "center", width: "100%", maxWidth: "1191px" }}>About Elev8 (ElevateBrand CiC)</h1>
            <p className="text-white/90" style={{ fontFamily: "var(--font-dm-sans), Roboto, sans-serif", fontWeight: 400, fontSize: "18px", lineHeight: "1.6", letterSpacing: "-0.02em", textAlign: "center", width: "100%", maxWidth: "736px" }}>
              Elev8 is a community-rooted social enterprise supporting Black and migrant creatives, leaders, and individuals facing systemic barriers or economic precarity.
            </p>
          </div>
        </section>

        {/* ── About Text + Image ── */}
        <section className="bg-white py-10 px-5 sm:px-8 lg:px-[86px]">
          <div style={{ width: "100%", maxWidth: "1270px", display: "flex", flexWrap: "wrap", flexDirection: "row", alignItems: "center", gap: "33px" }}>
            {/* Text block */}
            <div style={{ width: "100%", maxWidth: "674px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontFamily: "var(--font-dm-sans), Roboto, sans-serif", fontWeight: 400, fontSize: "24px", lineHeight: "36px", letterSpacing: "-0.02em", color: "#000000" }}>
                Elev8 is a community-rooted social enterprise supporting Black and migrant creatives, leaders, and individuals facing systemic barriers or economic precarity.
              </p>
              <p style={{ fontFamily: "var(--font-dm-sans), Roboto, sans-serif", fontWeight: 400, fontSize: "24px", lineHeight: "36px", letterSpacing: "-0.02em", color: "#000000" }}>
                We help people move from survival to stability through practical learning, coaching, leadership development, and entrepreneurship support.
              </p>
            </div>
            {/* Image */}
            <div style={{ width: "100%", maxWidth: "563px", borderRadius: "12px", overflow: "hidden" }}>
              <img
                src="/about-team.png"
                alt="Team collaboration"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>

        {/* ── Vision / Mission cards ── */}
        <section className="px-5 sm:px-8 lg:px-[161px]" style={{ backgroundColor: "#47EBE00D", paddingTop: "36px", paddingBottom: "36px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ width: "100%", maxWidth: "990px", gap: "47px", margin: "0 auto" }}>
            {visionMission.map((item, i) => (
              <div key={i} className="bg-white flex flex-col" style={{ width: "100%", maxWidth: "300px", minHeight: "323px", borderWidth: "0.2px", borderStyle: "solid", borderColor: "#E5E7EB", borderRadius: "12px", paddingTop: "24px", paddingRight: "28px", paddingBottom: "24px", paddingLeft: "28px", gap: "10px" }}>
                <div style={{ width: "100%", maxWidth: "237px", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div className="flex-shrink-0">{item.icon}</div>
                  <p className="font-poppins font-semibold text-[#111827]" style={{ fontSize: "20px", lineHeight: "1.3" }}>{item.title}</p>
                  <p className="font-poppins text-[#000000]" style={{ fontWeight: 400, fontSize: "14px", lineHeight: "22px" }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── What Makes Us Different ── */}
        <section className="bg-white py-16 px-5 sm:px-8 lg:px-[88px]">
          <div className="max-w-[1265px] mx-auto">
            {/* Icon + heading + subtitle */}
            <div className="flex flex-col items-center text-center mb-10 gap-3">
              <svg width="48" height="48" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 25V22.3333C1 20.9188 1.5619 19.5623 2.5621 18.5621C3.56229 17.5619 4.91885 17 6.33333 17H11.6667C13.0812 17 14.4377 17.5619 15.4379 18.5621C16.4381 19.5623 17 20.9188 17 22.3333V25M18.3333 1.17333C19.4806 1.46707 20.4974 2.13427 21.2235 3.06975C21.9497 4.00523 22.3438 5.15577 22.3438 6.34C22.3438 7.52423 21.9497 8.67477 21.2235 9.61025C20.4974 10.5457 19.4806 11.2129 18.3333 11.5067M25 25V22.3333C24.9932 21.1562 24.5972 20.0144 23.8737 19.0859C23.1502 18.1573 22.1398 17.4943 21 17.2M3.66667 6.33333C3.66667 7.74782 4.22857 9.10438 5.22876 10.1046C6.22896 11.1048 7.58551 11.6667 9 11.6667C10.4145 11.6667 11.771 11.1048 12.7712 10.1046C13.7714 9.10438 14.3333 7.74782 14.3333 6.33333C14.3333 4.91885 13.7714 3.56229 12.7712 2.5621C11.771 1.5619 10.4145 1 9 1C7.58551 1 6.22896 1.5619 5.22876 2.5621C4.22857 3.56229 3.66667 4.91885 3.66667 6.33333Z" stroke="#4229C9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h2 className="font-poppins font-bold text-[#111827]" style={{ fontSize: "28px", lineHeight: "1.3" }}>What Makes us Different</h2>
              <p className="font-poppins text-[#000000]" style={{ fontWeight: 400, fontSize: "16px", lineHeight: "1.6" }}>Experience-led. Community-rooted. Impact-driven.</p>
            </div>
            {/* 2x2 grid */}
            {/* 2x2 grid */}
            <div style={{ width: "100%", maxWidth: "1265px", display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Row 1 */}
              <div style={{ width: "100%", maxWidth: "1265px", display: "flex", flexWrap: "wrap", flexDirection: "row", gap: "24px" }}>
                {differences.slice(0, 2).map((d) => (
                  <div key={d.title} className="flex flex-col" style={{ width: "100%", maxWidth: "620px", minHeight: "184px", padding: "28px 32px", gap: "16px", justifyContent: "center", border: "1px solid #4229C9", borderRadius: "12px", boxShadow: "0px 4px 4px 0px #4229C940" }}>
                    <p className="font-poppins text-[#111827]" style={{ fontWeight: 500, fontSize: "24px", lineHeight: "28px", letterSpacing: "-0.01em", width: "100%", maxWidth: "100%" }}>{d.title}</p>
                    <p className="font-poppins text-[#000000]" style={{ fontWeight: 400, fontSize: "16px", lineHeight: "20px", letterSpacing: "0", width: "100%", maxWidth: "100%" }}>{d.description}</p>
                  </div>
                ))}
              </div>
              {/* Row 2 */}
              <div style={{ width: "100%", maxWidth: "1265px", display: "flex", flexWrap: "wrap", flexDirection: "row", gap: "24px" }}>
                {differences.slice(2, 4).map((d) => (
                  <div key={d.title} className="flex flex-col" style={{ width: "100%", maxWidth: "620px", minHeight: "184px", padding: "28px 32px", gap: "16px", justifyContent: "center", border: "1px solid #4229C9", borderRadius: "12px", boxShadow: "0px 4px 4px 0px #4229C940" }}>
                    <p className="font-poppins text-[#111827]" style={{ fontWeight: 500, fontSize: "24px", lineHeight: "28px", letterSpacing: "-0.01em", width: "100%", maxWidth: "100%" }}>{d.title}</p>
                    <p className="font-poppins text-[#000000]" style={{ fontWeight: 400, fontSize: "16px", lineHeight: "20px", letterSpacing: "0", width: "100%", maxWidth: "100%" }}>{d.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
