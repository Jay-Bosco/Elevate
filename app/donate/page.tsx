import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

function CheckCircle() {
  return (
    <div className="flex-shrink-0" style={{ width: "41px", height: "41px", position: "relative" }}>
      <svg width="34.17" height="34.17" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", top: "3.42px", left: "3.42px" }}>
        <path d="M17.0833 0C13.7046 0 10.4017 1.00192 7.59235 2.87906C4.78301 4.7562 2.5934 7.42425 1.3004 10.5458C0.00740194 13.6674 -0.330905 17.1023 0.328259 20.4161C0.987423 23.73 2.61445 26.7739 5.0036 29.1631C7.39275 31.5522 10.4367 33.1793 13.7505 33.8384C17.0644 34.4976 20.4993 34.1593 23.6208 32.8663C26.7424 31.5733 29.4105 29.3837 31.2876 26.5743C33.1648 23.765 34.1667 20.4621 34.1667 17.0833C34.1621 12.5539 32.3609 8.21135 29.1581 5.00859C25.9553 1.80582 21.6127 0.00452261 17.0833 0Z" fill="#4229C9" fillOpacity="0.5"/>
        <path d="M25.9786 13.0055L15.4075 23.5767C15.0871 23.897 14.6527 24.0769 14.1997 24.0769C13.7467 24.0769 13.3122 23.897 12.9919 23.5767L8.18805 18.7712C7.87686 18.449 7.70467 18.0174 7.70856 17.5695C7.71246 17.1216 7.89212 16.6931 8.20886 16.3764C8.5256 16.0597 8.95407 15.88 9.40199 15.8761C9.84991 15.8722 10.2814 16.0444 10.6036 16.3556L14.1997 19.9533L23.563 10.5917C23.8865 10.2879 24.3154 10.122 24.759 10.1289C25.2026 10.1357 25.6262 10.315 25.94 10.6286C26.2539 10.9422 26.4334 11.3656 26.4406 11.8092C26.4478 12.2529 26.2821 12.6819 25.9786 13.0055Z" fill="#4229C9"/>
      </svg>
    </div>
  );
}

const tiers = [
  { amount: "£25", description: "Provides materials for one workshop participant" },
  { amount: "£100", description: "Funds a full scholarship for someone in need" },
  { amount: "£500", description: "Supports an entire cohort for one month" },
];

const reasons = [
  { title: "Increase Access", description: "Enable more creatives to participate regardless of financial circumstances" },
  { title: "Fund Programmes", description: "Support delivery of training, coaching, and community events" },
  { title: "Scale Impact", description: "Help us reach more communities and expand our programme offerings" },
  { title: "Create Resources", description: "Develop free tools, templates, and learning materials for the community" },
];

const otherWays = [
  {
    title: "Partner with Us",
    description: "Explore corporate giving, grants, and workplace partnerships",
    btnLabel: "Get in Touch",
    btnHref: "#",
    icon: (
      <svg width="32" height="32" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 25V22.3333C1 20.9188 1.5619 19.5623 2.5621 18.5621C3.56229 17.5619 4.91885 17 6.33333 17H11.6667C13.0812 17 14.4377 17.5619 15.4379 18.5621C16.4381 19.5623 17 20.9188 17 22.3333V25M18.3333 1.17333C19.4806 1.46707 20.4974 2.13427 21.2235 3.06975C21.9497 4.00523 22.3438 5.15577 22.3438 6.34C22.3438 7.52423 21.9497 8.67477 21.2235 9.61025C20.4974 10.5457 19.4806 11.2129 18.3333 11.5067M25 25V22.3333C24.9932 21.1562 24.5972 20.0144 23.8737 19.0859C23.1502 18.1573 22.1398 17.4943 21 17.2M3.66667 6.33333C3.66667 7.74782 4.22857 9.10438 5.22876 10.1046C6.22896 11.1048 7.58551 11.6667 9 11.6667C10.4145 11.6667 11.771 11.1048 12.7712 10.1046C13.7714 9.10438 14.3333 7.74782 14.3333 6.33333C14.3333 4.91885 13.7714 3.56229 12.7712 2.5621C11.771 1.5619 10.4145 1 9 1C7.58551 1 6.22896 1.5619 5.22876 2.5621C4.22857 3.56229 3.66667 4.91885 3.66667 6.33333Z" stroke="#4229C9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Spread the Word",
    description: "Help us reach more people by sharing our mission with your network",
    btnLabel: "Share Our Work",
    btnHref: "#",
    icon: (
      <svg width="22" height="33" viewBox="0 0 22 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.87635 26.375H16.1264M7.58469 31.5H14.418M5.87635 21.25C5.87806 17.8333 5.02389 16.9792 3.31385 15.2708C1.60381 13.5625 0.79406 11.832 0.751352 9.29167C0.67106 4.08125 4.16802 0.75 11.0014 0.75C17.8364 0.75 21.3351 4.08125 21.2514 9.29167C21.2121 11.832 20.3972 13.5625 18.6889 15.2708C16.9822 16.9792 16.1281 17.8333 16.1264 21.25" stroke="#4229C9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function DonatePage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section className="w-full flex items-center justify-center text-center px-5" style={{ minHeight: "346px", background: "linear-gradient(180deg, #2a1898 0%, #4229C9 40%, #4a90d9 80%, #6ab4f5 100%)" }}>
          <div style={{ width: "100%", maxWidth: "1191px", display: "flex", flexDirection: "column", gap: "24px", alignItems: "center", justifyContent: "center" }}>
            <h1 className="font-poppins text-white" style={{ fontWeight: 600, fontSize: "40px", lineHeight: "64px", letterSpacing: "-0.02em", textAlign: "center", width: "100%", maxWidth: "1068px" }}>Support Our Work</h1>
            <p className="text-white/90" style={{ fontFamily: "var(--font-dm-sans), Roboto, sans-serif", fontWeight: 400, fontSize: "24px", lineHeight: "36px", letterSpacing: "-0.02em", textAlign: "center", width: "100%", maxWidth: "736px", height: "72px" }}>
              Help us create pathways to dignity and opportunity for Black and migrant creatives
            </p>
          </div>
        </section>

        {/* ── Your Donation Makes a Difference ── */}
        <section className="px-5 sm:px-8 lg:px-[143px]" style={{ backgroundColor: "#47EBE00D", paddingTop: "61px", paddingBottom: "61px", minHeight: "329px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "100%", maxWidth: "1154px", minHeight: "207px", display: "flex", flexDirection: "column", alignItems: "center", gap: "32px" }}>
            <h2 className="font-poppins text-[#111827] text-center" style={{ fontWeight: 600, fontSize: "32px", lineHeight: "1.2", letterSpacing: "-0.25px", width: "100%", maxWidth: "1154px" }}>Your Donation Makes a Difference</h2>
            <div className="flex flex-col sm:flex-row" style={{ gap: "24px", width: "100%", maxWidth: "870px" }}>
              {tiers.map((t) => (
                <div key={t.amount} className="bg-white flex flex-col items-center text-center" style={{ flex: 1, minHeight: "132px", borderWidth: "0.1px", borderStyle: "solid", borderColor: "#37065940", borderRadius: "12px", padding: "24px", gap: "10px", justifyContent: "center", boxShadow: "0px 4px 4px 0px #00000040" }}>
                  <p className="font-poppins text-center" style={{ fontWeight: 600, fontSize: "32px", lineHeight: "28px", letterSpacing: "-0.01em", color: "#2F217B", width: "100%", maxWidth: "226px" }}>{t.amount}</p>
                  <p className="font-poppins text-[#000000]" style={{ fontWeight: 400, fontSize: "14px", lineHeight: "1.6" }}>{t.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Your Support Matters ── */}
        <section className="bg-white px-5 sm:px-8 lg:px-[175px]" style={{ paddingTop: "40px", paddingBottom: "32px" }}>
          <div style={{ width: "100%", maxWidth: "1110px", margin: "0 auto" }}>
            <h2 className="font-poppins font-bold text-[#111827] text-center mb-10" style={{ fontSize: "32px", lineHeight: "1.2", letterSpacing: "-0.25px" }}>Why Your Support Matters</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ columnGap: "60px", rowGap: "32px", width: "100%", maxWidth: "1097px" }}>
              {reasons.map((r) => (
                <div key={r.title} className="flex items-start" style={{ gap: "10px", width: "100%", maxWidth: "517px", minHeight: "84px" }}>
                  <CheckCircle />
                  <div>
                    <p className="font-poppins text-[#111827]" style={{ fontWeight: 600, fontSize: "24px", lineHeight: "28px", letterSpacing: "-0.01em", marginBottom: "4px" }}>{r.title}</p>
                    <p className="font-poppins text-[#000000]" style={{ fontWeight: 400, fontSize: "16px", lineHeight: "20px", letterSpacing: "0" }}>{r.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Other Ways to Support ── */}
        <section className="px-5 sm:px-8 lg:px-[104px] py-14" style={{ backgroundColor: "#7979790D" }}>
          <div className="max-w-[1232px] mx-auto">
            <h2 className="font-poppins font-bold text-[#111827] text-center mb-10" style={{ fontSize: "32px", lineHeight: "1.2", letterSpacing: "-0.25px" }}>Other Ways to Support</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherWays.map((w) => (
                <div key={w.title} className="flex flex-col gap-4 p-6" style={{ borderWidth: "0.2px", borderStyle: "solid", borderColor: "#E5E7EB", borderRadius: "12px" }}>
                  <div className="flex-shrink-0">{w.icon}</div>
                  <p className="font-poppins font-semibold text-[#111827]" style={{ fontSize: "18px" }}>{w.title}</p>
                  <p className="font-poppins text-[#000000]" style={{ fontWeight: 400, fontSize: "14px", lineHeight: "1.6" }}>{w.description}</p>
                  <Link href={w.btnHref} className="font-poppins font-semibold inline-flex items-center justify-center" style={{ width: w.title === "Spread the Word" ? "120px" : "100px", height: "25px", borderRadius: "8px", border: "1px solid #370659", backgroundColor: "white", color: "#370659", fontSize: "11px", opacity: 0.6, padding: "0 12px", gap: "8px" }}>{w.btnLabel}</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Make a Difference Today CTA ── */}
        <section className="w-full flex flex-col items-center justify-center text-center px-5 py-16 lg:py-0" style={{ minHeight: "280px", backgroundColor: "#4229C9", gap: "12px" }}>
          <h2 className="font-poppins font-bold text-white" style={{ fontSize: "32px", lineHeight: "1.3", letterSpacing: "-0.25px" }}>Make a Difference Today</h2>
          <p className="font-poppins text-white/80" style={{ fontWeight: 400, fontSize: "16px", lineHeight: "24px" }}>Every contribution creates real pathways to opportunity</p>
          <Link href="#" className="font-poppins font-semibold inline-flex items-center justify-center mt-2" style={{ height: "50px", padding: "0 32px", borderRadius: "8px", backgroundColor: "white", color: "#4229C9", fontSize: "15px" }}>Donate Now</Link>
          <p className="font-poppins text-white/60" style={{ fontSize: "12px", marginTop: "4px" }}>
            All donations support programme delivery and scholarships •{" "}
            <Link href="/metrics" className="text-white/80 underline">View our impact reports</Link>
          </p>
        </section>

      </main>
      <Footer />
    </>
  );
}
