"use client";

import { useState } from "react";

export default function StayConnectedSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section
      className="px-4 sm:px-8 lg:px-[85px] py-16 lg:py-20"
      style={{
        background: "linear-gradient(135deg, #2a1898 0%, #4229C9 50%, #1a7fc4 100%)",
      }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center gap-4">

        {/* Heading */}
        <h2
          className="font-poppins text-white"
          style={{
            fontWeight: 700,
            fontSize: "clamp(24px, 4vw, 32px)",
            lineHeight: "1.2",
            letterSpacing: "0px",
          }}
        >
          Stay Connected
        </h2>

        {/* Subtitle */}
        <p
          className="font-poppins text-white"
          style={{
            fontWeight: 400,
            fontSize: "clamp(16px, 3vw, 24px)",
            lineHeight: "28px",
            letterSpacing: "0px",
          }}
        >
          Get updates on events, and new toolkits.
        </p>

        {/* Form */}
        {submitted ? (
          <div className="bg-white/10 border border-white/20 rounded-xl px-8 py-4 mt-2">
            <p className="font-poppins font-semibold text-white text-lg">🎉 You&apos;re subscribed!</p>
            <p className="font-poppins text-white/70 text-sm mt-1">We&apos;ll keep you updated.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center gap-3 mt-2 w-full max-w-[700px]"
          >
            {/* Email input */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              required
              className="font-poppins bg-white/10 text-white placeholder-white/60 focus:outline-none focus:border-white transition-colors text-center w-full sm:flex-1"
              style={{
                height: "50px",
                borderRadius: "6px",
                border: "1.5px solid rgba(255,255,255,0.5)",
                padding: "0 16px",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "0px",
              }}
            />

            {/* Subscribe button */}
            <button
              type="submit"
              className="font-poppins font-semibold bg-white hover:bg-white/90 transition-colors w-full sm:w-auto flex-shrink-0"
              style={{
                height: "50px",
                minWidth: "140px",
                borderRadius: "8px",
                padding: "0 20px",
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "0px",
                color: "#4229C9",
                fontWeight: 400,
              }}
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
