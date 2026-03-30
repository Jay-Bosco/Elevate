import Image from "next/image";
import { IconParticipants, IconHybrid, IconTrauma, IconProven } from "@/components/icons/Icons";

const impactItems = [
  {
    stat: "150+",
    label: "target participants in the first 18 months.",
    icon: <IconParticipants size={20} color="white" />,
  },
  {
    stat: "Hybrid delivery",
    label: "online + in-person programmes",
    icon: <IconHybrid size={20} color="white" />,
  },
  {
    stat: "Trauma-informed",
    label: "culturally grounded support",
    icon: <IconTrauma size={20} color="white" />,
  },
  {
    stat: "Proven traction",
    label: "from our pilot programmes",
    icon: <IconProven size={20} color="white" />,
  },
];

export default function ImpactSection() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[85px]">
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">

          {/* ── Left: stats card ──────────────────────────────────────────── */}
          <div
            className="w-full lg:w-[562px] lg:flex-shrink-0 flex flex-col gap-[10px]"
            style={{
              borderRadius: "20px",
              padding: "24px",
              background: "linear-gradient(90deg, #EDF9F8 0%, #EDF9F8 50%, #ffffff 100%)",
            }}
          >
            <p
              className="font-poppins text-[#111827]"
              style={{ fontSize: "24px", lineHeight: "32px", fontWeight: 600, letterSpacing: "-0.25px" }}
            >
              Our Impact
            </p>

            <div className="flex flex-col flex-1 justify-between">
              {impactItems.map((item, index) => (
                <div key={item.stat}>
                  <div className="flex items-center gap-4 py-4">
                    <div
                      className="flex-shrink-0 flex items-center justify-center rounded-xl"
                      style={{
                        width: "44px",
                        height: "44px",
                        background: "linear-gradient(145deg, #6B48FF 0%, #4229C9 100%)",
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-poppins font-medium text-[#111827]" style={{ fontSize: "clamp(18px, 3vw, 24px)", lineHeight: "28px", letterSpacing: "-0.01em" }}>
                        {item.stat}
                      </p>
                      <p className="font-poppins text-[#4229C9]" style={{ fontSize: "14px", lineHeight: "20px", fontWeight: 400 }}>
                        {item.label}
                      </p>
                    </div>
                  </div>
                  {index < impactItems.length - 1 && <div className="h-px bg-[#D1D5DB]" />}
                </div>
              ))}
            </div>
          </div>

          {/* ── Gradient vertical divider — desktop only ───────────────── */}
          <div
            className="hidden lg:block flex-shrink-0 self-center"
            style={{
              width: "1px",
              height: "460px",
              backgroundImage: "linear-gradient(180deg, #4229C9 0%, #FFFFFF 100%)",
            }}
          />

          {/* ── Photo ─────────────────────────────────────────────────── */}
          <div
            className="w-full lg:flex-1"
            style={{
              borderRadius: "20px",
              padding: "12px",
              border: "1px solid transparent",
              backgroundImage:
                "linear-gradient(white, white), linear-gradient(to right, transparent 0%, #4229C9 30%, #4229C9 100%)",
              backgroundOrigin: "padding-box, border-box",
              backgroundClip: "padding-box, border-box",
            }}
          >
            <div
              className="relative w-full rounded-[10px] overflow-hidden"
              style={{ height: "clamp(280px, 40vw, 480px)" }}
            >
              <Image
                src="/impact-photo.jpg"
                alt="Elevate community"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 548px"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
