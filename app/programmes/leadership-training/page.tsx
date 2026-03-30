import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { IconCohort, IconClock, IconBadge, IconTarget, IconLightbulb } from "@/components/icons/Icons";

const features = [
  { title: "Cohort-Based Learning", description: "Learn alongside peers who share similar experiences and challenges, building lasting connections and support networks", icon: <IconCohort size={35} color="#4229C9" /> },
  { title: "Hybrid Delivery", description: "Flexible online and in-person sessions designed to fit your schedule while maximizing learning impact", icon: <IconClock size={35} color="#4229C9" /> },
  { title: "Practical Application", description: "Real-world projects and portfolio-ready work that demonstrates your leadership capabilities", icon: <IconBadge size={35} color="#4229C9" /> },
];

const learnings = [
  { title: "Skill Development", description: "Self-awareness, emotional intelligence, personal values, and goal-setting for sustainable success" },
  { title: "Leading Teams", description: "Communication, delegation, conflict resolution, and building high-performing teams" },
  { title: "Decision-Making", description: "Values-led decision-making frameworks for complex situations and strategic thinking" },
  { title: "Confidence Building", description: "Develop executive presence, public speaking skills, and authentic leadership style" },
  { title: "Design Thinking", description: "Human-centered problem-solving approaches for innovation and creative solutions" },
  { title: "Strategic Planning", description: "Vision-setting, roadmapping, and execution strategies for long-term success" },
];

const durationItems = ["12-week cohort programme", "Weekly sessions (online + in-person)", "2–3 hours per session", "Practical assignments between sessions"];
const includedItems = ["All training materials and resources", "Access to mentors and facilitators", "Peer learning community", "Certificate of completion"];

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="10" cy="10" r="9" stroke="#4229C9" strokeWidth="1.5"/>
      <path d="M6.5 10l2.5 2.5 4.5-5" stroke="#4229C9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function LeadershipTrainingPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section
          className="relative w-full flex items-center justify-center text-center px-5 lg:px-[85px]"
          style={{ height: "346px", background: "linear-gradient(180deg, #2a1898 0%, #4229C9 40%, #4a90d9 80%, #6ab4f5 100%)" }}
        >
          <div className="w-full max-w-[1068px]">
            <h1 className="font-poppins text-white mb-4 text-2xl sm:text-3xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.4", letterSpacing: "-0.02em", textAlign: "center" }}>
              Leadership Training (LUD)
            </h1>
            <p className="text-white/90 mx-auto text-base sm:text-lg lg:text-[24px]" style={{ fontFamily: "var(--font-dm-sans), Roboto, sans-serif", fontWeight: 400, lineHeight: "1.6", letterSpacing: "-0.02em", textAlign: "center", maxWidth: "784px" }}>
              Develop the skills to lead yourself, lead teams, and create lasting impact through our comprehensive leadership development programme
            </p>
          </div>
        </section>

        {/* ── What is Leadership Training ── */}
        <section className="bg-white py-10 lg:py-16 px-5 sm:px-8 lg:px-[85px]">
          <div className="max-w-[1153px] mx-auto">
            <h2 className="font-poppins text-[#111827] mb-8 text-center text-xl sm:text-2xl lg:text-[32px]" style={{ fontWeight: 600, lineHeight: "1.2", letterSpacing: "-0.25px" }}>
              What is Leadership Training?
            </h2>
            <div className="font-poppins text-[#374151] text-center text-sm sm:text-base lg:text-[20px]" style={{ fontWeight: 400, lineHeight: "1.8", letterSpacing: "-0.25px" }}>
              <p className="mb-5">Our Leadership Upskilling & Development (LUD) programme is designed specifically for Black and migrant creatives who want to strengthen their leadership capabilities. Whether you&apos;re leading a team, starting a venture, or building your personal brand, this training equips you with the tools, frameworks, and confidence to succeed.</p>
              <p>Delivered through a trauma-informed, culturally grounded approach, our programme recognizes and honors lived experience while providing practical, actionable skills you can apply immediately.</p>
            </div>
          </div>
        </section>

        {/* ── Programme Features ── */}
        <section className="px-5 sm:px-8 lg:px-[96px] py-10 lg:py-[60px]" style={{ backgroundColor: "rgba(71, 235, 224, 0.05)" }}>
          <div className="max-w-[1248px] mx-auto">
            <h2 className="font-poppins text-[#111827] text-center mb-8 text-xl sm:text-2xl lg:text-[28px]" style={{ fontWeight: 600, lineHeight: "36px", letterSpacing: "-0.25px" }}>Programme Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[10px]">
              {features.map((f) => (
                <div key={f.title} className="bg-white border border-[#E5E7EB] rounded-2xl p-6 flex flex-col gap-4">
                  <div className="flex-shrink-0">{f.icon}</div>
                  <p className="font-poppins text-[#111827] text-lg lg:text-[24px]" style={{ fontWeight: 600, lineHeight: "28px", letterSpacing: "-0.01em" }}>{f.title}</p>
                  <p className="font-poppins text-[#000000] text-sm" style={{ fontWeight: 400, lineHeight: "20px" }}>{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What You'll Learn ── */}
        <section className="bg-white px-5 sm:px-8 lg:px-[96px] py-10 lg:py-[60px]">
          <div className="max-w-[1248px] mx-auto">
            <h2 className="font-poppins text-[#111827] text-center mb-8 text-xl sm:text-2xl lg:text-[28px]" style={{ fontWeight: 600, lineHeight: "36px", letterSpacing: "-0.25px" }}>What You&apos;ll Learn</h2>
            <div className="flex flex-col gap-[10px]">
              {[learnings.slice(0, 2), learnings.slice(2, 4), learnings.slice(4, 6)].map((row, rowIdx) => (
                <div key={rowIdx} className="grid grid-cols-1 sm:grid-cols-2 gap-[10px]">
                  {row.map((item) => (
                    <div key={item.title} className="border border-[#E5E7EB] rounded-xl p-5 lg:p-[40px_24px_24px_39px]">
                      <div className="flex items-start gap-3 lg:gap-4">
                        <CheckIcon />
                        <div>
                          <p className="font-poppins text-[#111827] font-semibold text-base lg:text-[24px]" style={{ lineHeight: "1.3", letterSpacing: "-0.01em" }}>{item.title}</p>
                          <p className="font-poppins text-[#000000] text-sm mt-2" style={{ fontWeight: 400, lineHeight: "20px" }}>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Programme Details ── */}
        <section className="bg-white pb-10 lg:pb-16 px-5 sm:px-8 lg:px-[85px]">
          <div className="mx-auto" style={{ maxWidth: "1440px" }}>
            <h2 className="font-poppins text-[#111827] text-center mb-10 text-xl sm:text-2xl lg:text-[28px]" style={{ fontWeight: 600, lineHeight: "36px", letterSpacing: "-0.25px" }}>Programme Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto" style={{ maxWidth: "1022px" }}>
              {[
                { icon: <IconTarget size={34} color="#4229C9" />, title: "Duration & Format", items: durationItems },
                { icon: <IconLightbulb size={34} color="#4229C9" />, title: "What's Included", items: includedItems },
              ].map((card) => (
                <div key={card.title} className="bg-white rounded-xl p-6 flex flex-col gap-[10px]" style={{ border: "1px solid #E5E7EB", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
                  {card.icon}
                  <p className="font-poppins text-[#111827] mt-3 text-lg lg:text-[24px]" style={{ fontWeight: 600, lineHeight: "28px", letterSpacing: "-0.01em" }}>{card.title}</p>
                  <ul className="flex flex-col">
                    {card.items.map((item) => (
                      <li key={item} className="font-poppins text-[#374151] flex items-center gap-2 text-sm" style={{ fontWeight: 400, lineHeight: "48px" }}>
                        <span className="text-[#4229C9]">•</span>{item}
                      </li>
                    ))}
                  </ul>
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
          <h2 className="font-poppins text-white text-2xl lg:text-[32px]" style={{ fontWeight: 600, lineHeight: "1.3", letterSpacing: "-0.25px", textAlign: "center" }}>Ready to Elevate Your Leadership?</h2>
          <p className="font-poppins text-white/80 text-sm lg:text-base" style={{ fontWeight: 400, lineHeight: "24px" }}>Join our cohort and transform the way you lead</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">
            <Link href="/apply" className="font-poppins font-medium inline-flex items-center justify-center hover:bg-white/10 transition-colors w-full sm:w-[150px]" style={{ height: "50px", borderRadius: "8px", border: "2px solid white", backgroundColor: "transparent", color: "white", fontSize: "15px" }}>Apply Now</Link>
            <Link href="/programmes/leadership-coaching" className="font-poppins font-medium inline-flex items-center justify-center hover:bg-white/90 transition-colors w-full sm:w-[150px]" style={{ height: "50px", borderRadius: "8px", border: "2px solid white", backgroundColor: "white", color: "#4229C9", fontSize: "15px" }}>Explore Coaching</Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
