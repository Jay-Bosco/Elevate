import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

function CheckCircle() {
  return (
    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <path d="M17.0833 0C13.7046 0 10.4017 1.00192 7.59235 2.87906C4.78301 4.7562 2.5934 7.42425 1.3004 10.5458C0.00740194 13.6674 -0.330905 17.1023 0.328259 20.4161C0.987423 23.73 2.61445 26.7739 5.0036 29.1631C7.39275 31.5522 10.4367 33.1793 13.7505 33.8384C17.0644 34.4976 20.4993 34.1593 23.6208 32.8663C26.7424 31.5733 29.4105 29.3837 31.2876 26.5743C33.1648 23.765 34.1667 20.4621 34.1667 17.0833C34.1621 12.5539 32.3609 8.21135 29.1581 5.00859C25.9553 1.80582 21.6127 0.00452261 17.0833 0Z" fill="#4229C9" fillOpacity="0.3"/>
      <path d="M25.9786 13.0055L15.4075 23.5767C15.0871 23.897 14.6527 24.0769 14.1997 24.0769C13.7467 24.0769 13.3122 23.897 12.9919 23.5767L8.18805 18.7712C7.87686 18.449 7.70467 18.0174 7.70856 17.5695C7.71246 17.1216 7.89212 16.6931 8.20886 16.3764C8.5256 16.0597 8.95407 15.88 9.40199 15.8761C9.84991 15.8722 10.2814 16.0444 10.6036 16.3556L14.1997 19.9533L23.563 10.5917C23.8865 10.2879 24.3154 10.122 24.759 10.1289C25.2026 10.1357 25.6262 10.315 25.94 10.6286C26.2539 10.9422 26.4334 11.3656 26.4406 11.8092C26.4478 12.2529 26.2821 12.6819 25.9786 13.0055Z" fill="#4229C9"/>
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
      <rect x="3" y="4" width="18" height="18" rx="2" stroke="#797979" strokeWidth="1.8"/>
      <path d="M16 2v4M8 2v4M3 10h18" stroke="#797979" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
      <circle cx="12" cy="12" r="9" stroke="#797979" strokeWidth="1.8"/>
      <path d="M12 7v5l3 3" stroke="#797979" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
      <path d="M12 21C12 21 5 13.5 5 8.5a7 7 0 0114 0c0 5-7 12.5-7 12.5z" stroke="#797979" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="8.5" r="2.5" stroke="#797979" strokeWidth="1.8"/>
    </svg>
  );
}

const eventTypes = [
  {
    title: "Workshops",
    description: "Hands-on learning sessions covering specific skills, tools, or topics in creative entrepreneurship and leadership",
    iconBg: "#4229C94D",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 25V22.3333C1 20.9188 1.5619 19.5623 2.5621 18.5621C3.56229 17.5619 4.91885 17 6.33333 17H11.6667C13.0812 17 14.4377 17.5619 15.4379 18.5621C16.4381 19.5623 17 20.9188 17 22.3333V25M18.3333 1.17333C19.4806 1.46707 20.4974 2.13427 21.2235 3.06975C21.9497 4.00523 22.3438 5.15577 22.3438 6.34C22.3438 7.52423 21.9497 8.67477 21.2235 9.61025C20.4974 10.5457 19.4806 11.2129 18.3333 11.5067M25 25V22.3333C24.9932 21.1562 24.5972 20.0144 23.8737 19.0859C23.1502 18.1573 22.1398 17.4943 21 17.2M3.66667 6.33333C3.66667 7.74782 4.22857 9.10438 5.22876 10.1046C6.22896 11.1048 7.58551 11.6667 9 11.6667C10.4145 11.6667 11.771 11.1048 12.7712 10.1046C13.7714 9.10438 14.3333 7.74782 14.3333 6.33333C14.3333 4.91885 13.7714 3.56229 12.7712 2.5621C11.771 1.5619 10.4145 1 9 1C7.58551 1 6.22896 1.5619 5.22876 2.5621C4.22857 3.56229 3.66667 4.91885 3.66667 6.33333Z" stroke="#4229C9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Community Meetups",
    description: "Free casual gatherings to network, share experiences, and connect with fellow creatives in a supportive environment",
    iconBg: "#4229C94D",
    icon: (
      <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.6667 2.66667H20V1.33333C20 0.979711 19.8595 0.640573 19.6095 0.390524C19.3594 0.140476 19.0203 0 18.6667 0C18.313 0 17.9739 0.140476 17.7239 0.390524C17.4738 0.640573 17.3333 0.979711 17.3333 1.33333V2.66667H9.33333V1.33333C9.33333 0.979711 9.19286 0.640573 8.94281 0.390524C8.69276 0.140476 8.35362 0 8 0C7.64638 0 7.30724 0.140476 7.05719 0.390524C6.80714 0.640573 6.66667 0.979711 6.66667 1.33333V2.66667H4C2.93913 2.66667 1.92172 3.08809 1.17157 3.83824C0.421428 4.58839 0 5.6058 0 6.66667V22.6667C0 23.7275 0.421428 24.7449 1.17157 25.4951C1.92172 26.2452 2.93913 26.6667 4 26.6667H22.6667C23.7275 26.6667 24.7449 26.2452 25.4951 25.4951C26.2452 24.7449 26.6667 23.7275 26.6667 22.6667V6.66667C26.6667 5.6058 26.2452 4.58839 25.4951 3.83824C24.7449 3.08809 23.7275 2.66667 22.6667 2.66667ZM24 22.6667C24 23.0203 23.8595 23.3594 23.6095 23.6095C23.3594 23.8595 23.0203 24 22.6667 24H4C3.64638 24 3.30724 23.8595 3.05719 23.6095C2.80714 23.3594 2.66667 23.0203 2.66667 22.6667V13.3333H24V22.6667ZM24 10.6667H2.66667V6.66667C2.66667 6.31304 2.80714 5.97391 3.05719 5.72386C3.30724 5.47381 3.64638 5.33333 4 5.33333H6.66667V6.66667C6.66667 7.02029 6.80714 7.35943 7.05719 7.60948C7.30724 7.85952 7.64638 8 8 8C8.35362 8 8.69276 7.85952 8.94281 7.60948C9.19286 7.35943 9.33333 7.02029 9.33333 6.66667V5.33333H17.3333V6.66667C17.3333 7.02029 17.4738 7.35943 17.7239 7.60948C17.9739 7.85952 18.313 8 18.6667 8C19.0203 8 19.3594 7.85952 19.6095 7.60948C19.8595 7.35943 20 7.02029 20 6.66667V5.33333H22.6667C23.0203 5.33333 23.3594 5.47381 23.6095 5.72386C23.8595 5.97391 24 6.31304 24 6.66667V10.6667Z" fill="#4229C9"/>
      </svg>
    ),
  },
  {
    title: "Special Events",
    description: "Conferences, panels, showcases, and celebrations highlighting the achievements of our community",
    iconBg: "#4229C94D",
    icon: (
      <svg width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.75 9.75V10.4167M12.75 4.75V5.41667M12.75 14.75V15.4167M22.0833 19.4167C22.7906 19.4167 23.4689 19.1357 23.969 18.6356C24.469 18.1355 24.75 17.4572 24.75 16.75V12.75C24.0428 12.75 23.3645 12.469 22.8644 11.969C22.3643 11.4689 22.0833 10.7906 22.0833 10.0833C22.0833 9.37609 22.3643 8.69781 22.8644 8.19772C23.3645 7.69762 24.0428 7.41667 24.75 7.41667V3.41667C24.75 2.70942 24.469 2.03115 23.969 1.53105C23.4689 1.03095 22.7906 0.75 22.0833 0.75H3.41667C2.70942 0.75 2.03115 1.03095 1.53105 1.53105C1.03095 2.03115 0.75 2.70942 0.75 3.41667V7.41667C1.45724 7.41667 2.13552 7.69762 2.63562 8.19772C3.13572 8.69781 3.41667 9.37609 3.41667 10.0833C3.41667 10.7906 3.13572 11.4689 2.63562 11.969C2.13552 12.469 1.45724 12.75 0.75 12.75V16.75C0.75 17.4572 1.03095 18.1355 1.53105 18.6356C2.03115 19.1357 2.70942 19.4167 3.41667 19.4167H22.0833Z" stroke="#4229C9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const upcomingEvents = [
  {
    tags: [{ label: "Workshop", bg: "#4229C94D", color: "#5D42ED", w: "86px" }, { label: "Paid", bg: "#DBFCE7", color: "#008236", w: "43px" }],
    title: "Design Thinking for Entrepreneurs",
    description: "Learn how to apply design thinking principles to solve business challenges and create user-centered solutions",
    date: "March 15, 2026",
    time: "6:00 PM – 8:30 PM",
    location: "Online (Zoom)",
    price: "€ 19",
    priceLabel: "Early bird",
    btnLabel: "Register Now",
    btnColor: "#4229C9",
    borderColor: "#4229C940",
    shadow: "0px 4px 12px 2px #4229C9",
  },
  {
    tags: [{ label: "Meetup", bg: "#47EBE054", color: "#1D9189", w: "65px" }, { label: "Free", bg: "#47EBE054", color: "#1D9189", w: "65px" }],
    title: "Creative Community Coffee Chat",
    description: "An informal gathering to connect with other Black and migrant creatives, share experiences, and build community",
    date: "March 21, 2026",
    time: "10:00 AM – 12:30 PM",
    location: "London, Shoreditch",
    price: "FREE",
    priceLabel: "Limited spots",
    btnLabel: "RSVP Now",
    btnColor: "#38C0B7",
    borderColor: "#1E72AB40",
    shadow: "0px 4px 12px 2px #47EBE0",
  },
  {
    tags: [{ label: "Workshop", bg: "#4229C94D", color: "#5D42ED", w: "86px" }, { label: "Paid", bg: "#DBFCE7", color: "#008236", w: "43px" }],
    title: "Building Your Personal Brand",
    description: "Discover how to articulate your unique value, create consistent messaging, and build a brand that attracts opportunities",
    date: "April 5, 2026",
    time: "1:00 PM – 4:00 PM",
    location: "Hybrid (London + Online)",
    price: "€ 39",
    priceLabel: "Standard rate",
    btnLabel: "Register Now",
    btnColor: "#4229C9",
    borderColor: "#4229C940",
    shadow: "0px 4px 12px 2px #4229C9",
  },
];

const attendReasons = [
  { title: "Build Your Network", description: "Connect with like-minded creatives, potential collaborators, and mentors who understand your journey" },
  { title: "Learn Practical Skills", description: "Gain actionable insights and tools you can apply immediately to your creative practice or business" },
  { title: "Safe Space", description: "Experience trauma-informed, culturally grounded spaces where your experiences are valued and respected" },
  { title: "Ongoing Support", description: "Events are gateways to our wider community and programmes, providing pathways to deeper learning" },
];

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section className="w-full flex items-center justify-center text-center px-5 lg:px-[85px]" style={{ height: "350px", background: "linear-gradient(180deg, #2a1898 0%, #4229C9 40%, #4a90d9 80%, #6ab4f5 100%)" }}>
          <div className="w-full max-w-[1068px]">
            <h1 className="font-poppins text-white mb-4 text-2xl sm:text-3xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.4", letterSpacing: "-0.02em" }}>Events</h1>
            <p className="text-white/90 mx-auto text-base sm:text-lg lg:text-[20px]" style={{ fontFamily: "var(--font-dm-sans), Roboto, sans-serif", fontWeight: 400, lineHeight: "1.6", letterSpacing: "-0.02em" }}>
              Connect, learn, and grow with our community through workshops, meetups,<br className="hidden lg:block" /> and special events
            </p>
          </div>
        </section>

        {/* ── Event Types ── */}
        <section className="bg-white py-10 lg:py-16 px-5 sm:px-8 lg:px-[85px]">
          <div className="max-w-[1270px] mx-auto">
            <h2 className="font-poppins font-bold text-[#111827] text-center mb-10 text-xl sm:text-2xl lg:text-[28px]">Event Types</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {eventTypes.map((et) => (
                <div key={et.title} className="bg-white flex flex-col gap-4 p-6" style={{ borderWidth: "0.2px", borderStyle: "solid", borderColor: "#E5E7EB", borderRadius: "12px" }}>
                  <div className="flex items-center justify-center flex-shrink-0" style={{ width: "48px", height: "48px", borderRadius: "5px", backgroundColor: et.iconBg, paddingLeft: "3px", paddingRight: "3px" }}>{et.icon}</div>
                  <p className="font-poppins text-[#111827]" style={{ fontWeight: 600, fontSize: "24px", lineHeight: "28px", letterSpacing: "-0.01em", width: "320px", maxWidth: "100%" }}>{et.title}</p>
                  <p className="font-poppins text-[#000000]" style={{ fontWeight: 400, fontSize: "14px", lineHeight: "1.6" }}>{et.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Upcoming Events ── */}
        <section style={{ backgroundColor: "rgba(71,235,224,0.05)", padding: "60px 85px", overflow: "visible" }}>
          <div className="max-w-[1270px] mx-auto">
            <h2 className="font-poppins font-bold text-[#111827] text-center mb-10 text-xl sm:text-2xl lg:text-[28px]">Upcoming Events</h2>
            <div className="flex flex-col gap-4" style={{ overflow: "visible" }}>
              {upcomingEvents.map((ev) => (
                <div key={ev.title} className="bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6" style={{ borderWidth: "1px", borderStyle: "solid", borderColor: ev.borderColor, borderRadius: "12px", boxShadow: ev.shadow }}>
                  <div className="flex flex-col gap-2 flex-1">
                    {/* Tags */}
                    <div className="flex items-center gap-2">
                      {ev.tags.map((tag) => (
                        <span key={tag.label} className="font-poppins inline-flex items-center justify-center" style={{ backgroundColor: tag.bg, color: tag.color, width: tag.w, height: "18px", borderRadius: "5px", paddingLeft: "8px", paddingRight: "8px", fontSize: "12px", fontWeight: 600, letterSpacing: "-0.25px", lineHeight: 1, whiteSpace: "nowrap" }}>{tag.label}</span>
                      ))}
                    </div>
                    {/* Title */}
                    <p className="font-poppins text-[#111827]" style={{ fontWeight: 600, fontSize: "16px", lineHeight: "1.4" }}>{ev.title}</p>
                    {/* Description */}
                    <p className="font-poppins text-[#000000]" style={{ fontWeight: 400, fontSize: "13px", lineHeight: "1.6" }}>{ev.description}</p>
                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 mt-1">
                      <span className="flex items-center gap-1.5 font-poppins text-xs" style={{ color: "#797979" }}><CalendarIcon />{ev.date}</span>
                      <span className="flex items-center gap-1.5 font-poppins text-xs" style={{ color: "#797979" }}><ClockIcon />{ev.time}</span>
                      <span className="flex items-center gap-1.5 font-poppins text-xs" style={{ color: "#797979" }}><LocationIcon />{ev.location}</span>
                    </div>
                  </div>
                  {/* Price + CTA */}
                  <div className="flex flex-col items-end gap-3 flex-shrink-0">
                    <div className="text-right">
                      <p className="font-poppins font-bold text-[#111827]" style={{ fontSize: "20px", color: ev.btnColor }}>{ev.price}</p>
                      <p className="font-poppins text-[#000000]" style={{ fontSize: "11px" }}>{ev.priceLabel}</p>
                    </div>
                    <Link href="#" className="font-poppins font-semibold text-white inline-flex items-center justify-center transition-colors" style={{ height: "36px", padding: "0 20px", borderRadius: "8px", backgroundColor: ev.btnColor, fontSize: "13px", whiteSpace: "nowrap" }}>{ev.btnLabel}</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Attend ── */}
        <section className="bg-white py-10 lg:py-16 px-5 sm:px-8 lg:px-[85px]">
          <div className="max-w-[1270px] mx-auto">
            <h2 className="font-poppins font-bold text-[#111827] text-center mb-10 text-xl sm:text-2xl lg:text-[28px]">Why not Attend Our Events ?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ columnGap: "60px", rowGap: "32px" }}>
              {attendReasons.map((r) => (
                <div key={r.title} className="flex items-start" style={{ gap: "10px", width: "517px", maxWidth: "100%" }}>
                  <CheckCircle />
                  <div>
                    <p className="font-poppins text-[#111827]" style={{ fontWeight: 600, fontSize: "24px", lineHeight: "28px", letterSpacing: "-0.01em", width: "466px", maxWidth: "100%", marginBottom: "4px" }}>{r.title}</p>
                    <p className="font-poppins text-[#000000]" style={{ fontWeight: 400, fontSize: "16px", lineHeight: "20px", letterSpacing: "0", width: "466px", maxWidth: "100%" }}>{r.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="w-full flex flex-col items-center justify-center text-center px-5 py-16 lg:py-0" style={{ minHeight: "350px", background: "linear-gradient(135deg, #2a1898 0%, #4229C9 50%, #1a7fc4 100%)", gap: "10px" }}>
          <h2 className="font-poppins font-bold text-white text-2xl lg:text-[32px]" style={{ lineHeight: "1.3", letterSpacing: "-0.25px" }}>Why Attend Our Events?</h2>
          <p className="font-poppins text-white/80 text-sm lg:text-base" style={{ lineHeight: "24px" }}>Subscribe to our newsletter to be the first to know about upcoming events</p>
          <div className="flex flex-col sm:flex-row items-center justify-center mt-2" style={{ gap: "16px", width: "437px", maxWidth: "100%" }}>
            <Link href="#" className="font-poppins font-medium inline-flex items-center justify-center transition-colors" style={{ width: "209px", height: "50px", borderRadius: "8px", border: "1px solid white", backgroundColor: "transparent", color: "white", fontSize: "15px", padding: "12px", gap: "8px", flexShrink: 0 }}>Subscribe to Newsletter</Link>
            <Link href="#" className="font-poppins font-medium inline-flex items-center justify-center transition-colors" style={{ width: "209px", height: "50px", borderRadius: "8px", border: "2px solid white", backgroundColor: "white", color: "#4229C9", fontSize: "15px", padding: "12px", gap: "8px", flexShrink: 0 }}>Join Our Community</Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
