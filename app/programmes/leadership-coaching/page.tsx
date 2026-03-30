import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { IconUser, IconUsers, IconDirectionClarity, IconAccountability, IconGrowthAction } from "@/components/icons/Icons";

function CheckIcon({ color = "#4229C9" }: { color?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="10" cy="10" r="9" stroke={color} strokeWidth="1.5"/>
      <path d="M6.5 10l2.5 2.5 4.5-5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const coachingAreas = [
  { title: "Career Development", description: "Navigate career transitions, build your creative business, or advance in your current role" },
  { title: "Entrepreneurship", description: "Launch or scale your venture with strategic guidance and practical support" },
  { title: "Leadership Skills", description: "Develop confidence, communication skills, and authentic leadership presence" },
  { title: "Creative Projects", description: "Get unstuck and complete portfolio projects that showcase your abilities" },
  { title: "Work-Life Balance", description: "Create sustainable practices that support both your ambitions and wellbeing" },
  { title: "Mindset & Confidence", description: "Overcome limiting beliefs and build the confidence to pursue your goals" },
];

const steps = [
  { num: 1, title: "Initial Consultation", description: "We start with a free 30-minute consultation to understand your goals and see if we're a good fit" },
  { num: 2, title: "Create Your Plan", description: "Together, we'll design a coaching plan tailored to your specific needs and timeline" },
  { num: 3, title: "Regular Sessions", description: "Attend your scheduled sessions and work on action steps between meetings" },
  { num: 4, title: "Track Progress", description: "We'll regularly review your progress and adjust your plan to ensure you're moving forward" },
];

const features = [
  { title: "Direction & Clarity", description: "Gain clarity on your goals, values, and vision for your creative career or venture", icon: <IconDirectionClarity size={34} color="#4229C9" /> },
  { title: "Accountability", description: "Stay on track with regular check-ins and supportive accountability structures", icon: <IconAccountability size={34} color="#4229C9" /> },
  { title: "Growth & Action", description: "Move from planning to doing with actionable steps and practical strategies", icon: <IconGrowthAction size={34} color="#4229C9" /> },
];

export default function LeadershipCoachingPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section className="relative w-full flex items-center justify-center text-center px-5 lg:px-[85px]" style={{ height: "346px", background: "linear-gradient(180deg, #2a1898 0%, #4229C9 40%, #4a90d9 80%, #6ab4f5 100%)" }}>
          <div className="w-full max-w-[1068px]">
            <h1 className="font-poppins text-white mb-4 text-2xl sm:text-3xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.4", letterSpacing: "-0.02em", textAlign: "center" }}>Leadership Coaching</h1>
            <p className="text-white/90 mx-auto text-base sm:text-lg lg:text-[24px]" style={{ fontFamily: "var(--font-dm-sans), Roboto, sans-serif", fontWeight: 400, lineHeight: "1.6", letterSpacing: "-0.02em", textAlign: "center", maxWidth: "784px" }}>
              Personalized support for your growth journey through 1:1 and group coaching sessions
            </p>
          </div>
        </section>

        {/* ── Coaching That Works ── */}
        <section className="bg-white py-10 lg:py-16 px-5 sm:px-8 lg:px-[85px]">
          <div className="max-w-[1153px] mx-auto">
            <h2 className="font-poppins text-[#111827] mb-8 text-center text-xl sm:text-2xl lg:text-[32px]" style={{ fontWeight: 600, lineHeight: "1.2", letterSpacing: "-0.25px" }}>Coaching That Works for You</h2>
            <div className="font-poppins text-[#374151] text-center text-sm sm:text-base lg:text-[20px]" style={{ fontWeight: 400, lineHeight: "1.8", letterSpacing: "-0.25px" }}>
              <p className="mb-4">Our coaching services provide dedicated support for Black and migrant creatives at any stage of their journey. Whether you need focused guidance on a specific challenge or ongoing support for long-term goals, our experienced coaches meet you where you are.</p>
              <p>Through trauma-informed, culturally sensitive coaching, we help you gain clarity, build confidence, and take action toward the future you envision.</p>
            </div>
          </div>
        </section>

        {/* ── Coaching Options ── */}
        <section className="px-5 sm:px-8 lg:px-[96px] py-10 lg:py-[60px]" style={{ backgroundColor: "rgba(71, 235, 224, 0.05)" }}>
          <div className="max-w-[1248px] mx-auto">
            <h2 className="font-poppins text-[#111827] text-center mb-10 text-xl sm:text-2xl lg:text-[28px]" style={{ fontWeight: 600, lineHeight: "36px", letterSpacing: "-0.25px" }}>Coaching Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 1:1 */}
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 flex flex-col gap-4">
                <IconUser size={31} color="#4229C9" />
                <p className="font-poppins text-[#111827] text-lg lg:text-[24px]" style={{ fontWeight: 600, lineHeight: "28px", letterSpacing: "-0.01em" }}>1:1 Coaching</p>
                <p className="font-poppins text-[#374151] text-sm" style={{ fontWeight: 400, lineHeight: "20px" }}>Personalized coaching sessions tailored to your unique goals, challenges, and aspirations</p>
                <ul className="flex flex-col gap-2">
                  {["Weekly or bi-weekly sessions", "Customized action plans", "Email support between sessions", "60-minute sessions"].map((item) => (
                    <li key={item} className="flex items-center gap-2 font-poppins text-[#374151] text-sm"><CheckIcon color="#4229C9" /> {item}</li>
                  ))}
                </ul>
                <Link href="/apply?type=1-1-coaching" className="font-poppins font-semibold text-white inline-flex items-center justify-center mt-2 hover:bg-[#3520A8] transition-colors self-start" style={{ width: "245px", height: "44px", borderRadius: "8px", backgroundColor: "#4229C9", fontSize: "14px" }}>Book 1:1 Coaching</Link>
              </div>
              {/* Group */}
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 flex flex-col gap-4">
                <IconUsers size={31} color="#1E72AB" />
                <p className="font-poppins text-[#111827] text-lg lg:text-[24px]" style={{ fontWeight: 600, lineHeight: "28px", letterSpacing: "-0.01em" }}>Group Coaching</p>
                <p className="font-poppins text-[#374151] text-sm" style={{ fontWeight: 400, lineHeight: "20px" }}>Learn and grow alongside peers facing similar challenges in a supportive group environment</p>
                <ul className="flex flex-col gap-2">
                  {["Small groups (6-8 participants)", "Monthly group sessions", "Peer accountability and support", "90-minute sessions"].map((item) => (
                    <li key={item} className="flex items-center gap-2 font-poppins text-[#374151] text-sm"><CheckIcon color="#1E72AB" /> {item}</li>
                  ))}
                </ul>
                <Link href="/apply?type=group-coaching" className="font-poppins font-semibold text-white inline-flex items-center justify-center mt-2 hover:opacity-90 transition-colors self-start" style={{ width: "245px", height: "44px", borderRadius: "8px", backgroundColor: "#1E72AB", fontSize: "14px" }}>Join Group Coaching</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Programme Features ── */}
        <section className="bg-white py-10 lg:py-16 px-5 sm:px-8 lg:px-[96px]">
          <div className="max-w-[1248px] mx-auto">
            <h2 className="font-poppins text-[#111827] text-center mb-10 text-xl sm:text-2xl lg:text-[28px]" style={{ fontWeight: 600, lineHeight: "36px", letterSpacing: "-0.25px" }}>Programme Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f) => (
                <div key={f.title} className="bg-white flex flex-col p-6" style={{ borderRadius: "12px", border: "0.2px solid #E5E7EB", gap: "10px", minHeight: "189px" }}>
                  <div className="flex-shrink-0">{f.icon}</div>
                  <p className="font-poppins text-[#111827] text-lg lg:text-[24px]" style={{ fontWeight: 600, lineHeight: "28px", letterSpacing: "-0.01em" }}>{f.title}</p>
                  <p className="font-poppins text-[#000000] text-sm" style={{ fontWeight: 400, lineHeight: "20px" }}>{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Coaching Areas ── */}
        <section className="px-5 sm:px-8 lg:px-[96px] py-10 lg:py-[60px]" style={{ backgroundColor: "rgba(121,121,121,0.05)" }}>
          <div className="max-w-[1248px] mx-auto">
            <h2 className="font-poppins text-[#111827] text-center mb-10 text-xl sm:text-2xl lg:text-[28px]" style={{ fontWeight: 600, lineHeight: "36px", letterSpacing: "-0.25px" }}>Coaching Areas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto" style={{ maxWidth: "1110px" }}>
              {coachingAreas.map((area) => (
                <div key={area.title} className="bg-white flex flex-col justify-center p-6" style={{ borderRadius: "12px", gap: "10px", boxShadow: "0 4px 4px rgba(0,0,0,0.05)", minHeight: "100px" }}>
                  <p className="font-poppins text-[#111827] text-base lg:text-[24px]" style={{ fontWeight: 600, lineHeight: "1.3", letterSpacing: "-0.01em" }}>{area.title}</p>
                  <p className="font-poppins text-[#374151] text-sm" style={{ fontWeight: 400, lineHeight: "20px" }}>{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it Works ── */}
        <section className="bg-white py-10 lg:py-16 px-5 sm:px-8 lg:px-[85px]">
          <div className="max-w-[800px] mx-auto">
            <h2 className="font-poppins text-[#111827] text-center mb-10 text-xl sm:text-2xl lg:text-[28px]" style={{ fontWeight: 600, lineHeight: "36px", letterSpacing: "-0.25px" }}>How it Works</h2>
            <div className="flex flex-col gap-8">
              {steps.map((step) => (
                <div key={step.num} className="flex items-start gap-5">
                  <div className="flex-shrink-0 flex items-center justify-center rounded-full text-white font-poppins font-bold" style={{ width: "40px", backgroundColor: "#4229C9", fontSize: "16px" }}>{step.num}</div>
                  <div>
                    <p className="font-poppins font-semibold text-[#111827] text-base lg:text-lg">{step.title}</p>
                    <p className="font-poppins text-[#374151] mt-1 text-sm" style={{ fontWeight: 400, lineHeight: "22px" }}>{step.description}</p>
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
          <h2 className="font-poppins text-white text-2xl lg:text-[32px]" style={{ fontWeight: 600, lineHeight: "1.3", letterSpacing: "-0.25px" }}>Start Your Coaching Journey</h2>
          <p className="font-poppins text-white/80 text-sm lg:text-base" style={{ fontWeight: 400, lineHeight: "24px" }}>Book a free consultation to explore how coaching can support your growth</p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mt-2 w-full sm:w-auto">
            <Link href="/apply?type=consultation" className="font-poppins font-medium inline-flex items-center justify-center hover:bg-white/10 transition-colors" style={{ height: "50px", padding: "0 20px", borderRadius: "8px", border: "1px solid white", backgroundColor: "transparent", color: "white", fontSize: "14px" }}>Book Free Consultation</Link>
            <Link href="/programmes/leadership-training" className="font-poppins font-medium inline-flex items-center justify-center hover:bg-white/90 transition-colors" style={{ height: "50px", padding: "0 20px", borderRadius: "8px", border: "2px solid white", backgroundColor: "white", color: "#4229C9", fontSize: "14px" }}>Explore Training</Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
