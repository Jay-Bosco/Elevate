import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { IconDocument, IconVideo, IconLightbulb } from "@/components/icons/Icons";

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
      <path d="M12 3v13M7 11l5 5 5-5M5 20h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const categories = [
  {
    title: "Guild & Templates",
    description: "Downloadable PDFs and Worksheets",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 16C7 16.2652 7.10536 16.5196 7.29289 16.7071C7.48043 16.8946 7.73478 17 8 17H16C16.2652 17 16.5196 16.8946 16.7071 16.7071C16.8946 16.5196 17 16.2652 17 16C17 15.7348 16.8946 15.4804 16.7071 15.2929C16.5196 15.1054 16.2652 15 16 15H8C7.73478 15 7.48043 15.1054 7.29289 15.2929C7.10536 15.4804 7 15.7348 7 16ZM8 11H16C16.2652 11 16.5196 11.1054 16.7071 11.2929C16.8946 11.4804 17 11.7348 17 12C17 12.2652 16.8946 12.5196 16.7071 12.7071C16.5196 12.8946 16.2652 13 16 13H8C7.73478 13 7.48043 12.8946 7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929C7.48043 11.1054 7.73478 11 8 11ZM12 9H8C7.73478 9 7.48043 8.89464 7.29289 8.70711C7.10536 8.51957 7 8.26522 7 8C7 7.73478 7.10536 7.48043 7.29289 7.29289C7.48043 7.10536 7.73478 7 8 7H12C12.2652 7 12.5196 7.10536 12.7071 7.29289C12.8946 7.48043 13 7.73478 13 8C13 8.26522 12.8946 8.51957 12.7071 8.70711C12.5196 8.89464 12.2652 9 12 9ZM24 22V8.41375C24.0008 8.15101 23.9494 7.89072 23.8488 7.64802C23.7482 7.40532 23.6003 7.18504 23.4137 7L17 0.58625C16.815 0.399725 16.5947 0.251842 16.352 0.151199C16.1093 0.0505564 15.849 -0.000839418 15.5863 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585787C0.210714 0.96086 0 1.46957 0 2V22C0 22.5304 0.210714 23.0391 0.585786 23.4142C0.960859 23.7893 1.46957 24 2 24H22C22.5304 24 23.0391 23.7893 23.4142 23.4142C23.7893 23.0391 24 22.5304 24 22ZM2 2H15V8C15 8.26522 15.1054 8.51957 15.2929 8.70711C15.4804 8.89464 15.7348 9 16 9H22V22H2V2ZM17 7V3.4125L20.5863 7H17Z" fill="#4229C9"/>
      </svg>
    ),
  },
  {
    title: "Video Tutorials",
    description: "Short lessons and walkthroughs",
    icon: (
      <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 6.33333L23.0707 3.29867C23.2739 3.19711 23.4997 3.14917 23.7267 3.1594C23.9536 3.16962 24.1742 3.23766 24.3675 3.35707C24.5608 3.47649 24.7203 3.6433 24.831 3.8417C24.9417 4.04009 24.9999 4.26348 25 4.49067V13.5093C24.9999 13.7365 24.9417 13.9599 24.831 14.1583C24.7203 14.3567 24.5608 14.5235 24.3675 14.6429C24.1742 14.7623 23.9536 14.8304 23.7267 14.8406C23.4997 14.8508 23.2739 14.8029 23.0707 14.7013L17 11.6667V6.33333ZM1 3.66667C1 2.95942 1.28095 2.28115 1.78105 1.78105C2.28115 1.28095 2.95942 1 3.66667 1H14.3333C15.0406 1 15.7189 1.28095 16.219 1.78105C16.719 2.28115 17 2.95942 17 3.66667V14.3333C17 15.0406 16.719 15.7189 16.219 16.219C15.7189 16.719 15.0406 17 14.3333 17H3.66667C2.95942 17 2.28115 16.719 1.78105 16.219C1.28095 15.7189 1 15.0406 1 14.3333V3.66667Z" stroke="#4229C9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Blog Articles",
    description: "Insights and practical advice",
    icon: (
      <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.8333 6.83333C14.8333 5.41885 14.2714 4.06229 13.2712 3.0621C12.271 2.0619 10.9145 1.5 9.5 1.5H1.5V21.5H10.8333C11.8942 21.5 12.9116 21.9214 13.6618 22.6716C14.4119 23.4217 14.8333 24.4391 14.8333 25.5M14.8333 6.83333V25.5M14.8333 6.83333C14.8333 5.41885 15.3952 4.06229 16.3954 3.0621C17.3956 2.0619 18.7522 1.5 20.1667 1.5H28.1667V21.5H18.8333C17.7725 21.5 16.7551 21.9214 16.0049 22.6716C15.2548 23.4217 14.8333 24.4391 14.8333 25.5" stroke="#4229C9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const featured = [
  {
    badge: "Guide",
    badgeBg: "#4229C94D",
    badgeColor: "#4229C9",
    meta: "PDF • 15 pages",
    title: "The Beginner's Guide to Design Thinking",
    description: "Learn the fundamentals of design thinking and how to apply human-centered problem-solving to your creative projects and business challenges.",
    borderColor: "#4229C9",
    iconBg: "#4229C94D",
    icon: <IconDocument size={22} color="#4229C9" />,
    btnBg: "#4229C9",
    btnColor: "white",
    btnLabel: "Download Free",
  },
  {
    badge: "Template",
    badgeBg: "#47EBE033",
    badgeColor: "#1D9189",
    meta: "Google Doc • Editable",
    title: "Personal Brand Canvas",
    description: "A structured template to help you define your unique value proposition, target audience, and brand messaging as a creative professional.",
    borderColor: "#47EBE0",
    iconBg: "#47EBE033",
    icon: <IconLightbulb size={22} color="#1D9189" />,
    btnBg: "#47EBE0",
    btnColor: "#111827",
    btnLabel: "Get Template",
  },
  {
    badge: "Video",
    badgeBg: "#4229C94D",
    badgeColor: "#4229C9",
    meta: "15 minutes",
    title: "5 Steps to Launch Your Creative Business",
    description: "Watch this free masterclass on the essential steps to turn your creative skills into a viable business, from mindset to marketing.",
    borderColor: "#4229C9",
    iconBg: "#4229C94D",
    icon: <IconVideo size={22} color="#4229C9" />,
    btnBg: "#4229C9",
    btnColor: "white",
    btnLabel: "Watch Now",
  },
  {
    badge: "Workbook",
    badgeBg: "#47EBE033",
    badgeColor: "#1D9189",
    meta: "PDF • 20 pages",
    title: "Confidence Building Workbook for Creatives",
    description: "A trauma-informed workbook with exercises and reflections to help you build authentic confidence and overcome limiting beliefs.",
    borderColor: "#47EBE0",
    iconBg: "#47EBE033",
    icon: <IconDocument size={22} color="#1D9189" />,
    btnBg: "#47EBE0",
    btnColor: "#111827",
    btnLabel: "Download Free",
  },
  {
    badge: "Toolkit",
    badgeBg: "#4229C94D",
    badgeColor: "#4229C9",
    meta: "Spreadsheet • Editable",
    title: "Freelance Pricing Calculator",
    description: "Calculate your ideal freelance rates based on your expenses, desired income, and available working hours. Includes pricing strategies guide.",
    borderColor: "#4229C9",
    iconBg: "#4229C94D",
    icon: <IconLightbulb size={22} color="#4229C9" />,
    btnBg: "#4229C9",
    btnColor: "white",
    btnLabel: "Get Calculator",
  },
];

export default function FreeResourcesPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section className="w-full flex items-center justify-center text-center px-5" style={{ minHeight: "346px", background: "linear-gradient(180deg, #2a1898 0%, #4229C9 40%, #4a90d9 80%, #6ab4f5 100%)" }}>
          <div style={{ width: "100%", maxWidth: "1191px", display: "flex", flexDirection: "column", gap: "24px", alignItems: "center", justifyContent: "center" }}>
            <h1 className="font-poppins text-white" style={{ fontWeight: 600, fontSize: "40px", lineHeight: "64px", letterSpacing: "-0.02em", textAlign: "center", width: "100%", maxWidth: "1068px" }}>Free Resources</h1>
            <p className="text-white/90" style={{ fontFamily: "var(--font-dm-sans), Roboto, sans-serif", fontWeight: 400, fontSize: "24px", lineHeight: "36px", letterSpacing: "-0.02em", textAlign: "center", width: "100%", maxWidth: "736px" }}>
              Accessible learning materials and tools to support your creative and entrepreneurial journey
            </p>
          </div>
        </section>

        {/* ── Knowledge Should Be Accessible ── */}
        <section className="bg-white" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
          <div style={{ width: "100%", maxWidth: "1153px", minHeight: "139px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "32px" }}>
            <h2 className="font-poppins text-[#111827]" style={{ fontWeight: 600, fontSize: "32px", lineHeight: "1.2", letterSpacing: "-0.25px", textAlign: "center", width: "100%" }}>Knowledge Should Be Accessible</h2>
            <p className="font-poppins text-[#000000]" style={{ fontWeight: 400, fontSize: "20px", lineHeight: "32px", letterSpacing: "0px", textAlign: "center", width: "100%", maxWidth: "1153px",  }}>
              We believe that valuable knowledge and tools shouldn't have barriers. Our free resources are<br />designed to provide practical support to anyone looking to grow, regardless of their financial situation.
            </p>
          </div>
        </section>

        {/* ── Browse Resources ── */}
        <section className="px-5 sm:px-8 lg:px-[104px]" style={{ backgroundColor: "#47EBE00D", paddingTop: "60px", paddingBottom: "60px" }}>
          <div className="max-w-[1232px] mx-auto">
            <h2 className="font-poppins font-bold text-[#111827] text-center mb-10" style={{ fontSize: "28px", lineHeight: "1.3" }}>Browse Resources</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {categories.map((cat) => (
                <div key={cat.title} className="bg-white flex flex-col items-center text-center gap-4 p-6" style={{ borderWidth: "0.2px", borderStyle: "solid", borderColor: "#E5E7EB", borderRadius: "12px" }}>
                  <div className="flex items-center justify-center" style={{ width: "48px", height: "48px", borderRadius: "5px", backgroundColor: "#4229C94D", gap: "10px", flexShrink: 0 }}>{cat.icon}</div>
                  <p className="font-poppins font-semibold text-[#111827]" style={{ fontSize: "18px" }}>{cat.title}</p>
                  <p className="font-poppins text-[#000000]" style={{ fontWeight: 400, fontSize: "14px", lineHeight: "1.5" }}>{cat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Featured Resources ── */}
        <section className="bg-white py-14 px-5 sm:px-8 lg:px-[104px]">
          <div className="max-w-[1232px] mx-auto">
            <h2 className="font-poppins font-bold text-[#111827] text-center mb-10" style={{ fontSize: "28px", lineHeight: "1.3" }}>Featured Resources</h2>
            <div className="flex flex-col gap-4">
              {featured.map((r, i) => (
                <div key={i} className="flex items-center justify-between gap-4 p-5" style={{ width: "100%", maxWidth: "1144px", minHeight: "178px", borderRadius: "12px", border: `0.5px solid ${r.borderColor}`, boxShadow: `0px 4px 4px 0px ${r.borderColor}`, backgroundColor: "#F7FAFA" }}>
                  <div className="flex items-start gap-4 flex-1">
                    {/* File icon */}
                    <div className="flex-shrink-0 flex items-center justify-center" style={{ width: "48px", height: "48px", borderRadius: "5px", backgroundColor: r.iconBg, gap: "10px" }}>
                      {r.icon}
                    </div>
                    <div className="flex flex-col gap-1.5 flex-1">
                      {/* Badge + meta */}
                      <div className="flex items-center gap-2">
                        <span className="font-poppins inline-flex items-center justify-center" style={{ backgroundColor: r.badgeBg, color: r.badgeColor, width: "68px", height: "18px", borderRadius: "10px", gap: "10px", fontSize: "11px", fontWeight: 600, whiteSpace: "nowrap" }}>{r.badge}</span>
                        <span className="font-poppins" style={{ fontSize: "10px", lineHeight: "10px", letterSpacing: "0", color: "#797979", fontWeight: 400, position: "relative", top: "4px" }}>{r.meta}</span>
                      </div>
                      {/* Title */}
                      <p className="font-poppins font-semibold text-[#111827]" style={{ fontSize: "15px", lineHeight: "1.4" }}>{r.title}</p>
                      {/* Description */}
                      <p className="font-poppins text-[#000000]" style={{ fontWeight: 400, fontSize: "13px", lineHeight: "1.6" }}>{r.description}</p>
                      {/* Download button */}
                      <Link href="#" className="font-poppins font-semibold inline-flex items-center gap-1.5 mt-1" style={{ height: "28px", padding: "0 12px", borderRadius: "6px", backgroundColor: r.btnBg, color: r.btnColor, fontSize: "12px", width: "fit-content" }}>
                        <DownloadIcon /> {r.btnLabel}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Join Our Community ── */}
        <section className="bg-white pb-14 pt-6 px-5 sm:px-8 lg:px-[88px]">
          <div style={{ width: "100%", maxWidth: "1265px", minHeight: "241px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "24px", textAlign: "center" }}>
            <svg width="48" height="48" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 25V22.3333C1 20.9188 1.5619 19.5623 2.5621 18.5621C3.56229 17.5619 4.91885 17 6.33333 17H11.6667C13.0812 17 14.4377 17.5619 15.4379 18.5621C16.4381 19.5623 17 20.9188 17 22.3333V25M18.3333 1.17333C19.4806 1.46707 20.4974 2.13427 21.2235 3.06975C21.9497 4.00523 22.3438 5.15577 22.3438 6.34C22.3438 7.52423 21.9497 8.67477 21.2235 9.61025C20.4974 10.5457 19.4806 11.2129 18.3333 11.5067M25 25V22.3333C24.9932 21.1562 24.5972 20.0144 23.8737 19.0859C23.1502 18.1573 22.1398 17.4943 21 17.2M3.66667 6.33333C3.66667 7.74782 4.22857 9.10438 5.22876 10.1046C6.22896 11.1048 7.58551 11.6667 9 11.6667C10.4145 11.6667 11.771 11.1048 12.7712 10.1046C13.7714 9.10438 14.3333 7.74782 14.3333 6.33333C14.3333 4.91885 13.7714 3.56229 12.7712 2.5621C11.771 1.5619 10.4145 1 9 1C7.58551 1 6.22896 1.5619 5.22876 2.5621C4.22857 3.56229 3.66667 4.91885 3.66667 6.33333Z" stroke="#4229C9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h2 className="font-poppins text-[#111827]" style={{ fontWeight: 600, fontSize: "32px", lineHeight: "1.2", letterSpacing: "-0.25px", textAlign: "center", width: "100%", maxWidth: "503px" }}>Join Our Community for More</h2>
            <p className="font-poppins text-[#000000]" style={{ fontWeight: 400, fontSize: "20px", lineHeight: "24px", letterSpacing: "-0.25px", textAlign: "center", width: "100%", maxWidth: "959px" }}>
              Get access to exclusive resources, connect with other creatives, and receive regular updates on new free materials when you join our community
            </p>
            <div className="flex flex-col sm:flex-row items-center mt-2" style={{ gap: "16px", width: "100%", maxWidth: "400px" }}>
              <Link href="#" className="font-poppins font-semibold inline-flex items-center justify-center" style={{ width: "209px", height: "50px", borderRadius: "8px", padding: "12px", gap: "8px", border: "1px solid #4229C9", backgroundColor: "#4229C9", color: "white", fontSize: "14px", flexShrink: 0 }}>Join Community (Free)</Link>
              <Link href="/events" className="font-poppins font-semibold inline-flex items-center justify-center" style={{ width: "209px", height: "50px", borderRadius: "8px", padding: "12px", gap: "8px", border: "1px solid #4229C9", backgroundColor: "transparent", color: "#4229C9", fontSize: "14px", flexShrink: 0 }}>Attend Free Events</Link>
            </div>
          </div>
        </section>

        {/* ── Ready for Deeper Learning CTA ── */}
        <section className="w-full flex flex-col items-center justify-center text-center px-5 py-16 lg:py-0" style={{ minHeight: "350px", backgroundColor: "#4229C9", gap: "10px" }}>
          <h2 className="font-poppins font-bold text-white" style={{ fontSize: "32px", lineHeight: "1.3", letterSpacing: "-0.25px" }}>Ready for Deeper Learning?</h2>
          <p className="font-poppins text-white/80" style={{ fontWeight: 400, fontSize: "16px", lineHeight: "24px" }}>Explore our paid programmes and products for more structured, comprehensive support</p>
          <div className="flex items-center gap-4 mt-2">
            <Link href="/programmes" className="font-poppins font-medium inline-flex items-center justify-center" style={{ height: "44px", padding: "0 24px", borderRadius: "8px", border: "1px solid white", backgroundColor: "transparent", color: "white", fontSize: "14px" }}>View Programmes</Link>
            <Link href="/products" className="font-poppins font-medium inline-flex items-center justify-center" style={{ height: "44px", padding: "0 24px", borderRadius: "8px", border: "2px solid white", backgroundColor: "white", color: "#4229C9", fontSize: "14px" }}>Browse Products</Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

