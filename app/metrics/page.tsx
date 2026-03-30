import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

function CheckCircle() {
  return (
    <svg width="20" height="20" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <path d="M17.0833 0C13.7046 0 10.4017 1.00192 7.59235 2.87906C4.78301 4.7562 2.5934 7.42425 1.3004 10.5458C0.00740194 13.6674 -0.330905 17.1023 0.328259 20.4161C0.987423 23.73 2.61445 26.7739 5.0036 29.1631C7.39275 31.5522 10.4367 33.1793 13.7505 33.8384C17.0644 34.4976 20.4993 34.1593 23.6208 32.8663C26.7424 31.5733 29.4105 29.3837 31.2876 26.5743C33.1648 23.765 34.1667 20.4621 34.1667 17.0833C34.1621 12.5539 32.3609 8.21135 29.1581 5.00859C25.9553 1.80582 21.6127 0.00452261 17.0833 0Z" fill="#4229C9" fillOpacity="0.3"/>
      <path d="M25.9786 13.0055L15.4075 23.5767C15.0871 23.897 14.6527 24.0769 14.1997 24.0769C13.7467 24.0769 13.3122 23.897 12.9919 23.5767L8.18805 18.7712C7.87686 18.449 7.70467 18.0174 7.70856 17.5695C7.71246 17.1216 7.89212 16.6931 8.20886 16.3764C8.5256 16.0597 8.95407 15.88 9.40199 15.8761C9.84991 15.8722 10.2814 16.0444 10.6036 16.3556L14.1997 19.9533L23.563 10.5917C23.8865 10.2879 24.3154 10.122 24.759 10.1289C25.2026 10.1357 25.6262 10.315 25.94 10.6286C26.2539 10.9422 26.4334 11.3656 26.4406 11.8092C26.4478 12.2529 26.2821 12.6819 25.9786 13.0055Z" fill="#4229C9"/>
    </svg>
  );
}

const PeopleIcon = () => (
  <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 31.75V28.3333C1 26.521 1.71994 24.7829 3.00144 23.5014C4.28294 22.2199 6.02102 21.5 7.83333 21.5H14.6667C16.479 21.5 18.2171 22.2199 19.4986 23.5014C20.7801 24.7829 21.5 26.521 21.5 28.3333V31.75M23.2083 1.22208C24.6782 1.59843 25.981 2.45328 26.9114 3.65186C27.8417 4.85045 28.3467 6.32458 28.3467 7.84188C28.3467 9.35917 27.8417 10.8333 26.9114 12.0319C25.981 13.2305 24.6782 14.0853 23.2083 14.4617M31.75 31.75V28.3333C31.7413 26.8251 31.2339 25.3622 30.3069 24.1725C29.3799 22.9828 28.0853 22.1333 26.625 21.7562M4.41667 7.83333C4.41667 9.64565 5.1366 11.3837 6.4181 12.6652C7.6996 13.9467 9.43769 14.6667 11.25 14.6667C13.0623 14.6667 14.8004 13.9467 16.0819 12.6652C17.3634 11.3837 18.0833 9.64565 18.0833 7.83333C18.0833 6.02102 17.3634 4.28294 16.0819 3.00144C14.8004 1.71994 13.0623 1 11.25 1C9.43769 1 7.6996 1.71994 6.4181 3.00144C5.1366 4.28294 4.41667 6.02102 4.41667 7.83333Z" stroke="#4229C9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CurrencyIcon = () => (
  <svg width="23" height="41" viewBox="0 0 23 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5 1.25V38.8333M20.0417 8.08333H7.22917C5.64339 8.08333 4.12257 8.71328 3.00126 9.83459C1.87995 10.9559 1.25 12.4767 1.25 14.0625C1.25 15.6483 1.87995 17.1691 3.00126 18.2904C4.12257 19.4117 5.64339 20.0417 7.22917 20.0417H15.7708C17.3566 20.0417 18.8774 20.6716 19.9987 21.7929C21.1201 22.9142 21.75 24.4351 21.75 26.0208C21.75 27.6066 21.1201 29.1274 19.9987 30.2487C18.8774 31.3701 17.3566 32 15.7708 32H1.25" stroke="#4229C9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BadgeIcon = () => (
  <svg width="24" height="35" viewBox="0 0 24 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.83585 25.625V32.4583L11.9609 29.0417L17.0859 32.4583V25.625M15.3041 3.88647L14.7523 3.12797C14.4317 2.68818 14.0118 2.33035 13.5267 2.08366C13.0416 1.83696 12.5051 1.70837 11.9609 1.70837C11.4166 1.70837 10.8801 1.83696 10.395 2.08366C9.90993 2.33035 9.49 2.68818 9.16944 3.12797L8.61764 3.88647L7.69002 3.74126C7.15248 3.65649 6.60251 3.70005 6.08501 3.86839C5.56752 4.03672 5.09717 4.32506 4.71237 4.70986C4.32757 5.09466 4.03924 5.565 3.8709 6.0825C3.70256 6.59999 3.659 7.14996 3.74377 7.68751L3.88898 8.61513L3.13048 9.16692C2.69005 9.48704 2.33161 9.90682 2.08447 10.392C1.83733 10.8771 1.7085 11.4139 1.7085 11.9583C1.7085 12.5028 1.83733 13.0396 2.08447 13.5247C2.33161 14.0099 2.69005 14.4296 3.13048 14.7498L3.88898 15.3015L3.74377 16.2275C3.6587 16.7651 3.70203 17.3153 3.87023 17.833C4.03843 18.3507 4.32673 18.8213 4.71157 19.2063C5.0964 19.5913 5.56686 19.8798 6.08451 20.0483C6.60216 20.2167 7.15231 20.2603 7.69002 20.1754L8.61764 20.0302L9.16944 20.7887C9.49 21.2285 9.90993 21.5863 10.395 21.833C10.8801 22.0797 11.4166 22.2083 11.9609 22.2083C12.5051 22.2083 13.0416 22.0797 13.5267 21.833C14.0118 21.5863 14.4317 21.2285 14.7523 20.7887L15.3041 20.0302L16.23 20.1754C16.7676 20.2605 17.3178 20.2172 17.8355 20.049C18.3533 19.8808 18.8238 19.5925 19.2088 19.2076C19.5939 18.8228 19.8824 18.3523 20.0508 17.8347C20.2192 17.317 20.2628 16.7669 20.1779 16.2292L20.0327 15.3015L20.7912 14.7498C21.231 14.4292 21.5888 14.0093 21.8355 13.5242C22.0822 13.0391 22.2108 12.5026 22.2108 11.9583C22.2108 11.4141 22.0822 10.8776 21.8355 10.3925C21.5888 9.90742 21.231 9.48748 20.7912 9.16692L20.0327 8.61513L20.1779 7.68922C20.263 7.15154 20.2197 6.60137 20.0515 6.08365C19.8833 5.56593 19.595 5.09535 19.2101 4.71034C18.8253 4.32534 18.3548 4.03684 17.8372 3.86842C17.3195 3.69999 16.7694 3.65642 16.2317 3.74126L15.3041 3.88647Z" stroke="#4229C9" strokeWidth="3.41667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TrendingIcon = () => (
  <svg width="35" height="21" viewBox="0 0 35 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M34.1457 1.69125V8.54167C34.1456 8.87949 34.0454 9.20971 33.8577 9.49057C33.6699 9.77144 33.4032 9.99035 33.091 10.1196C32.7789 10.2489 32.4355 10.2827 32.1042 10.2168C31.7728 10.1509 31.4685 9.9883 31.2295 9.74946L29.0207 7.54058L19.9785 16.5828C19.6581 16.9031 19.2237 17.083 18.7707 17.083C18.3177 17.083 17.8832 16.9031 17.5629 16.5828L11.9373 10.9572L2.89513 19.9995C2.57294 20.3106 2.14141 20.4828 1.69349 20.4789C1.24557 20.4751 0.817098 20.2954 0.500359 19.9786C0.18362 19.6619 0.00395688 19.2334 6.45795e-05 18.7855C-0.00382772 18.3376 0.168363 17.9061 0.479549 17.5839L10.7295 7.33388C11.0499 7.01361 11.4844 6.8337 11.9373 6.8337C12.3903 6.8337 12.8248 7.01361 13.1451 7.33388L18.7707 12.9594L26.6051 5.125L24.3962 2.91612C24.1574 2.67721 23.9947 2.37285 23.9288 2.04151C23.863 1.71018 23.8968 1.36674 24.0261 1.05463C24.1553 0.742519 24.3742 0.475741 24.6551 0.288022C24.936 0.100303 25.2662 7.21332e-05 25.604 0H32.4373L32.5193 0.00170821C32.9557 0.0209978 33.3679 0.207348 33.6706 0.522174C33.9734 0.837001 34.1435 1.25619 34.1457 1.69296" fill="#4229C9"/>
  </svg>
);

const EconomicIcon = () => (
  <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.0833 36.1667C28.5182 36.1667 36.1667 28.5182 36.1667 19.0833C36.1667 9.64847 28.5182 2 19.0833 2C9.64847 2 2 9.64847 2 19.0833C2 28.5182 9.64847 36.1667 19.0833 36.1667Z" stroke="#4229C9" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.0833 29.3333C24.7443 29.3333 29.3333 24.7443 29.3333 19.0833C29.3333 13.4224 24.7443 8.83333 19.0833 8.83333C13.4224 8.83333 8.83333 13.4224 8.83333 19.0833C8.83333 24.7443 13.4224 29.3333 19.0833 29.3333Z" stroke="#4229C9" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.0833 22.5C20.9703 22.5 22.5 20.9703 22.5 19.0833C22.5 17.1964 20.9703 15.6667 19.0833 15.6667C17.1964 15.6667 15.6667 17.1964 15.6667 19.0833C15.6667 20.9703 17.1964 22.5 19.0833 22.5Z" stroke="#4229C9" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const pilotStats = [
  { icon: <PeopleIcon />, value: "219", label: "Registered attendees for introductory webinars" },
  { icon: <PeopleIcon />, value: "18", label: "Enrolled students in paid intensive training" },
  { icon: <CurrencyIcon />, value: "£4,482", label: "Revenue generated" },
  { icon: <BadgeIcon />, value: "82%", label: "Completion rate" },
  { icon: <TrendingIcon />, value: "91%", label: "Positive feedback score" },
  { icon: <CurrencyIcon />, value: "£249", label: "Proven price point for conversion" },
];

const keyOutcomes = [
  "High interest and demand",
  "Proven willingness to pay",
  "Strong programme completion",
  "High satisfaction driven by culturally grounded delivery",
];

const trackingNext = [
  {
    title: "Economic Impact",
    items: ["Income changes", "Job opportunities gained", "Ventures launched", "Revenue generated by participants"],
    icon: <EconomicIcon />,
  },
  {
    title: "Personal Developmrnt",
    items: ["Confidence levels", "Skills acquired", "Leadership growth", "Wellbeing improvements"],
    icon: <PeopleIcon />,
  },
  {
    title: "Community Impact",
    items: ["Network connections made", "Peer support provided", "Community engagement", "Long-term retention"],
    icon: <TrendingIcon />,
  },
];

const impactReports = [
  { title: "2025 Annual Impact Report", description: "Comprehensive overview of our first year of operation, including pilot results, participant testimonials, and financial transparency", meta: "Published: December 2025 • 24 pages", btnColor: "#47EBE0", btnText: "#111827", iconColor: "#38C0B7", borderColor: "#47EBE0" },
  { title: "Q4 2025 Community Report", description: "Quarterly update featuring participant stories, programme updates, and key metrics from October-December 2025", meta: "Published: January 2025 • 12 pages", btnColor: "#4229C9", btnText: "white", iconColor: "#4229C9", borderColor: "#4229C9" },
];

const approaches = [
  { title: "Quantitative Metrics", description: "Numbers that demonstrate reach, engagement, economic outcomes, and programme effectiveness" },
  { title: "Qualitative Data", description: "Participant stories, testimonials, and feedback that capture the human experience and nuances of change" },
  { title: "Ongoing Evaluation", description: "Regular check-ins with participants and community to ensure we're meeting needs and adjusting as necessary" },
];

export default function MetricsPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section className="w-full flex items-center justify-center text-center px-5 lg:px-[85px]" style={{ height: "350px", background: "linear-gradient(180deg, #2a1898 0%, #4229C9 40%, #4a90d9 80%, #6ab4f5 100%)" }}>
          <div className="w-full max-w-[1068px]">
            <h1 className="font-poppins text-white mb-4" style={{ fontWeight: 600, fontSize: "40px", lineHeight: "64px", letterSpacing: "-0.02em", textAlign: "center", width: "1068px", maxWidth: "100%" }}>Metrics & Impact</h1>
            <p className="text-white/90 mx-auto" style={{ fontFamily: "var(--font-dm-sans), Roboto, sans-serif", fontWeight: 400, fontSize: "24px", lineHeight: "36px", letterSpacing: "-0.02em", textAlign: "center", width: "736px", maxWidth: "100%" }}>
              Transparent reporting on our progress, outcomes, and community impact
            </p>
          </div>
        </section>

        {/* ── Measuring What Matters ── */}
        <section className="bg-white py-10 lg:py-16 px-5 sm:px-8 lg:px-[85px]">
          <div className="max-w-[1270px] mx-auto text-center">
            <h2 className="font-poppins font-bold text-[#111827] mb-6" style={{ fontWeight: 600, fontSize: "32px", lineHeight: "1.2", letterSpacing: "-0.25px", textAlign: "center", width: "100%" }}>Measuring What Matters</h2>
            <p className="font-poppins text-[#000000] mx-auto" style={{ fontWeight: 400, fontSize: "20px", lineHeight: "32px", letterSpacing: "-0.25px", textAlign: "center", width: "1153px", maxWidth: "100%" }}>
              We believe in accountability and transparency. Our impact reports track both quantitative metrics and qualitative outcomes, ensuring we're delivering meaningful support to Black and migrant creatives.
            </p>
          </div>
        </section>

        {/* ── Pilot Programme Results ── */}
        <section style={{ backgroundColor: "rgba(71,235,224,0.05)", paddingTop: "61px", paddingBottom: "61px", paddingLeft: "104px", paddingRight: "104px", gap: "10px", minHeight: "631px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div className="max-w-[1270px] mx-auto">
            <h2 className="font-poppins text-[#111827] text-center mb-4" style={{ fontWeight: 600, fontSize: "32px", lineHeight: "1.2", letterSpacing: "-0.25px", textAlign: "center", width: "100%" }}>Pilot Programme Results</h2>
            <p className="font-poppins text-[#000000] text-center mb-10" style={{ fontWeight: 400, fontSize: "20px", lineHeight: "32px", letterSpacing: "-0.25px", width: "1153px", maxWidth: "100%" }}>
              Our initial programmes demonstrated strong demand, proven engagement, and high satisfaction among participants
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: "16px", maxWidth: "1232px", margin: "0 auto" }}>
              {pilotStats.map((s) => (
                <div key={s.label} className="bg-white flex flex-col items-center text-center" style={{ height: "169px", borderWidth: "0.2px", borderStyle: "solid", borderColor: "#E5E7EB", borderRadius: "12px", padding: "24px", gap: "10px", justifyContent: "center" }}>
                  <div>{s.icon}</div>
                  <p className="font-poppins font-bold text-[#4229C9]" style={{ fontSize: "28px", lineHeight: "1.2" }}>{s.value}</p>
                  <p className="font-poppins text-[#000000]" style={{ fontWeight: 400, fontSize: "13px", lineHeight: "1.5" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Key Outcomes ── */}
        <section className="bg-white py-10 lg:py-16 px-5 sm:px-8 lg:px-[137px]">
          <div style={{ width: "1166px", maxWidth: "100%", minHeight: "231px", display: "flex", flexDirection: "column", gap: "32px", margin: "0 auto" }}>
            <h2 className="font-poppins text-[#111827] text-center" style={{ fontWeight: 600, fontSize: "32px", lineHeight: "1.2", letterSpacing: "-0.25px", textAlign: "center", width: "100%" }}>Key Outcomes from Pilot</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "16px", width: "1166px", maxWidth: "100%", minHeight: "166px" }}>
              {keyOutcomes.map((o) => (
                <div key={o} className="flex items-center gap-3" style={{ height: "75px", border: "0.5px solid #370659", borderRadius: "12px", padding: "24px", gap: "10px" }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, position: "relative", top: "2px", left: "2px" }}>
                    <path d="M10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0ZM10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2ZM13.535 6.381C13.7145 6.19975 13.9566 6.09397 14.2115 6.08532C14.4665 6.07667 14.7152 6.1658 14.9066 6.33447C15.098 6.50313 15.2177 6.73859 15.2412 6.99262C15.2647 7.24666 15.1902 7.50008 15.033 7.701L14.95 7.795L9.364 13.382C9.17335 13.5726 8.91932 13.6866 8.65017 13.7023C8.38102 13.7179 8.11549 13.6342 7.904 13.467L7.808 13.382L5.05 10.624C4.86875 10.4445 4.76297 10.2024 4.75432 9.94745C4.74567 9.69248 4.8348 9.44383 5.00347 9.25242C5.17213 9.06101 5.40758 8.9413 5.66162 8.9178C5.91566 8.89429 6.16908 8.96878 6.37 9.126L6.464 9.21L8.586 11.331L13.536 6.381H13.535Z" fill="#4229C9"/>
                  </svg>
                  <p className="font-poppins text-[#000000]" style={{ fontWeight: 400, fontSize: "14px" }}>{o}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What We're Tracking Next ── */}
        <section style={{ backgroundColor: "rgba(71,235,224,0.05)", padding: "60px 85px" }}>
          <div className="max-w-[1270px] mx-auto">
            <h2 className="font-poppins text-[#111827] text-center mb-10" style={{ fontWeight: 600, fontSize: "32px", lineHeight: "1.2", letterSpacing: "-0.25px", textAlign: "center", width: "100%" }}>What We're Tracking Next</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {trackingNext.map((t) => (
                <div key={t.title} className="bg-white flex flex-col gap-4 p-6" style={{ borderWidth: "0.2px", borderStyle: "solid", borderColor: "#E5E7EB", borderRadius: "12px" }}>
                  <div style={{ position: "relative", width: "41px", height: "41px", flexShrink: 0 }}>
                    <div style={{ position: "absolute", top: "3.42px", left: "3.42px", width: "34.17px", height: "34.17px", display: "flex", alignItems: "center", justifyContent: "center" }}>{t.icon}</div>
                  </div>
                  <p className="font-poppins font-semibold text-[#111827]" style={{ fontSize: "18px", lineHeight: "1.3" }}>{t.title}</p>
                  <ul className="flex flex-col gap-1">
                    {t.items.map((item) => (
                      <li key={item} className="font-poppins flex items-start gap-1.5" style={{ fontWeight: 400, fontSize: "13px", lineHeight: "1.6" }}>
                        <span style={{ color: "#4229C9", flexShrink: 0 }}>•</span>
                        <span style={{ color: "#797979" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Impact Reports ── */}
        <section className="bg-white py-10 lg:py-16 px-5 sm:px-8 lg:px-[85px]">
          <div className="max-w-[1270px] mx-auto">
            <h2 className="font-poppins text-[#111827] text-center mb-10" style={{ fontWeight: 600, fontSize: "32px", lineHeight: "28px", letterSpacing: "-0.25px", textAlign: "center", width: "100%" }}>Impact Reports</h2>
            <div className="flex flex-col gap-4">
              {impactReports.map((r) => (
                <div key={r.title} className="flex items-center justify-between gap-4 p-6" style={{ border: `0.5px solid ${r.borderColor}`, borderRadius: "12px" }}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.96875 20.5C8.96875 20.8398 9.10374 21.1657 9.34402 21.406C9.5843 21.6463 9.91019 21.7812 10.25 21.7812H20.5C20.8398 21.7812 21.1657 21.6463 21.406 21.406C21.6463 21.1657 21.7812 20.8398 21.7812 20.5C21.7812 20.1602 21.6463 19.8343 21.406 19.594C21.1657 19.3537 20.8398 19.2188 20.5 19.2188H10.25C9.91019 19.2188 9.5843 19.3537 9.34402 19.594C9.10374 19.8343 8.96875 20.1602 8.96875 20.5ZM10.25 14.0938H20.5C20.8398 14.0938 21.1657 14.2287 21.406 14.469C21.6463 14.7093 21.7812 15.0352 21.7812 15.375C21.7812 15.7148 21.6463 16.0407 21.406 16.281C21.1657 16.5213 20.8398 16.6562 20.5 16.6562H10.25C9.91019 16.6562 9.5843 16.5213 9.34402 16.281C9.10374 16.0407 8.96875 15.7148 8.96875 15.375C8.96875 15.0352 9.10374 14.7093 9.34402 14.469C9.5843 14.2287 9.91019 14.0938 10.25 14.0938ZM15.375 11.5312H10.25C9.91019 11.5312 9.5843 11.3963 9.34402 11.156C9.10374 10.9157 8.96875 10.5898 8.96875 10.25C8.96875 9.91019 9.10374 9.5843 9.34402 9.34402C9.5843 9.10374 9.91019 8.96875 10.25 8.96875H15.375C15.7148 8.96875 16.0407 9.10374 16.281 9.34402C16.5213 9.5843 16.6562 9.91019 16.6562 10.25C16.6562 10.5898 16.5213 10.9157 16.281 11.156C16.0407 11.3963 15.7148 11.5312 15.375 11.5312ZM30.75 28.1875V10.7801C30.7511 10.4435 30.6852 10.11 30.5563 9.79903C30.4273 9.48807 30.2379 9.20584 29.9989 8.96875L21.7812 0.751133C21.5442 0.512148 21.2619 0.322674 20.951 0.193724C20.64 0.0647755 20.3065 -0.00107574 19.9699 0H2.5625C1.88288 0 1.2311 0.269978 0.750539 0.75054C0.269977 1.2311 0 1.88288 0 2.5625V28.1875C0 28.8671 0.269977 29.5189 0.750539 29.9995C1.2311 30.48 1.88288 30.75 2.5625 30.75H28.1875C28.8671 30.75 29.5189 30.48 29.9995 29.9995C30.48 29.5189 30.75 28.8671 30.75 28.1875ZM2.5625 2.5625H19.2188V10.25C19.2188 10.5898 19.3537 10.9157 19.594 11.156C19.8343 11.3963 20.1602 11.5312 20.5 11.5312H28.1875V28.1875H2.5625V2.5625ZM21.7812 8.96875V4.37227L26.3761 8.96875H21.7812Z" fill={r.iconColor}/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-poppins text-[#111827] mb-1" style={{ fontWeight: 500, fontSize: "20px", lineHeight: "28px", letterSpacing: "-0.01em", width: "707px", maxWidth: "100%" }}>{r.title}</p>
                      <p className="font-poppins mb-2" style={{ fontWeight: 400, fontSize: "14px", lineHeight: "20px", letterSpacing: "0", color: "#797979", width: "707px", maxWidth: "100%" }}>{r.description}</p>
                      <p className="font-poppins" style={{ fontWeight: 400, fontSize: "10px", lineHeight: "10px", letterSpacing: "0", color: "#797979", width: "195px", maxWidth: "100%" }}>{r.meta}</p>
                    </div>
                  </div>
                  <Link href="#" className="font-poppins font-semibold inline-flex items-center justify-center flex-shrink-0 transition-colors" style={{ height: "36px", padding: "0 20px", borderRadius: "8px", backgroundColor: r.btnColor, color: r.btnText, fontSize: "13px", whiteSpace: "nowrap" }}>Download</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Our Approach to Measurement ── */}
        <section style={{ backgroundColor: "#47EBE00D", paddingTop: "60px", paddingBottom: "60px", paddingLeft: "174px", paddingRight: "174px", gap: "10px", minHeight: "739px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div className="max-w-[1270px] mx-auto">
          <div style={{ width: "1091px", maxWidth: "100%", height: "123px", display: "flex", flexDirection: "column", gap: "16px", alignItems: "center", marginBottom: "40px" }}>
            <h2 className="font-poppins text-[#111827] text-center" style={{ fontWeight: 600, fontSize: "32px", lineHeight: "1.2", letterSpacing: "-0.25px", textAlign: "center", width: "100%" }}>Our Approach to Measurement</h2>
            <p className="font-poppins text-[#000000] text-center" style={{ fontWeight: 400, fontSize: "20px", lineHeight: "32px", letterSpacing: "-0.25px", width: "1091px", maxWidth: "100%" }}>
              We use a mixed-methods approach that combines quantitative metrics with qualitative storytelling to capture the full picture of our impact.
            </p>
          </div>
            <div className="flex flex-col" style={{ gap: "16px", width: "1091px", maxWidth: "100%" }}>
              {approaches.map((a) => (
                <div key={a.title} className="bg-white flex flex-col" style={{ minHeight: "144px", borderRadius: "12px", paddingTop: "40px", paddingBottom: "40px", paddingLeft: "39px", paddingRight: "39px", gap: "10px", justifyContent: "center" }}>
                  <div style={{ width: "1013px", maxWidth: "100%", display: "flex", flexDirection: "column", gap: "16px" }}>
                    <p className="font-poppins text-[#111827]" style={{ fontWeight: 600, fontSize: "24px", lineHeight: "28px", letterSpacing: "-0.01em", width: "1013px", maxWidth: "100%" }}>{a.title}</p>
                    <p className="font-poppins text-[#000000]" style={{ fontWeight: 400, fontSize: "16px", lineHeight: "20px", letterSpacing: "0", width: "1013px", maxWidth: "100%" }}>{a.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="w-full flex flex-col items-center justify-center text-center px-5 py-16 lg:py-0" style={{ minHeight: "350px", background: "linear-gradient(135deg, #2a1898 0%, #4229C9 50%, #1a7fc4 100%)", gap: "10px" }}>
          <h2 className="font-poppins font-bold text-white text-2xl lg:text-[32px]" style={{ lineHeight: "1.3", letterSpacing: "-0.25px" }}>Be Part of Our Impact</h2>
          <p className="font-poppins text-white/80 text-sm lg:text-base" style={{ lineHeight: "24px" }}>Join our programmes and contribute to the growing body of evidence for community-led support</p>
          <div className="flex flex-col sm:flex-row items-center justify-center mt-2" style={{ gap: "16px", width: "400px", maxWidth: "100%" }}>
            <Link href="/programmes" className="font-poppins font-medium inline-flex items-center justify-center transition-colors" style={{ width: "209px", height: "50px", borderRadius: "8px", border: "1px solid white", backgroundColor: "#4229C9", color: "white", fontSize: "15px", padding: "12px", gap: "8px", flexShrink: 0 }}>Join a Programme</Link>
            <Link href="#" className="font-poppins font-medium inline-flex items-center justify-center transition-colors" style={{ width: "175px", height: "50px", borderRadius: "8px", border: "1px solid white", backgroundColor: "#FFFFFF", color: "#4229C9", fontSize: "15px", padding: "12px", gap: "8px", flexShrink: 0 }}>Support Our Work</Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
