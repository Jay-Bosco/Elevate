import Link from "next/link";
import { IconSkill, IconLeadership, IconCoaching, IconWorkshops } from "@/components/icons/Icons";

const services = [
  {
    title: "Skill Development",
    description:
      "Cohort-based training that helps participants build practical creative skills, confidence, and portfolio-ready work.",
    href: "/programmes/skill-development",
    icon: <IconLeadership size={24} color="#4229C9" />,
  },
  {
    title: "Leadership Development",
    description:
      "Training for leading self, leading teams, communication, confidence, and values-led decision-making.",
    href: "/programmes/leadership-development",
    icon: <IconCoaching size={24} color="#4229C9" />,
  },
  {
    title: "Coaching & Capacity Building",
    description:
      "1:1 coaching and group coaching to support direction, growth, accountability, and real action.",
    href: "/programmes/coaching",
    icon: <IconWorkshops size={24} color="#4229C9" />,
  },
  {
    title: "Workshops & Community",
    description:
      "Paid workshops and free community learning events that introduce our work and connect people to support.",
    href: "/programmes/workshops",
    icon: <IconSkill size={24} color="#4229C9" />,
  },
];

export default function WhatWeDoSection() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[85px]">

        {/* Heading */}
        <h2
          className="font-poppins text-[#111827] text-center mb-8"
          style={{
            fontWeight: 600,
            fontSize: "24px",
            lineHeight: "28px",
            letterSpacing: "-0.25px",
          }}
        >
          What we do
        </h2>

        {/* Responsive grid: 1 col mobile → 2 col tablet+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex flex-row items-start gap-4 bg-white hover:bg-[#FAFAFA] transition-colors duration-200"
              style={{
                borderRadius: "12px",
                border: "1px solid #797979",
                padding: "20px 24px",
              }}
            >
              {/* Icon */}
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-xl"
                style={{
                  width: "44px",
                  height: "44px",
                  background: "linear-gradient(145deg, #EDE9FF 0%, #DDD6FE 100%)",
                }}
              >
                {service.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-3 flex-1 min-w-0">
                <p
                  className="font-poppins text-[#111827] group-hover:text-[#4229C9] transition-colors duration-200"
                  style={{
                    fontWeight: 600,
                    fontSize: "clamp(18px, 2.5vw, 24px)",
                    lineHeight: "28px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {service.title}
                </p>

                <p
                  className="font-poppins text-[#000000]"
                  style={{
                    fontWeight: 400,
                    fontSize: "15px",
                    lineHeight: "22px",
                    letterSpacing: "0",
                  }}
                >
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
