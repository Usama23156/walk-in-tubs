import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "./components/navbar/nav";
import hero1 from "@/assets/hero1.jpg";

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    city: "",
    concern: "",
  });

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Thank you! We'll contact you within 1 hour.");
  };

  return (
    <>
      <section className="">
        {/* NAV */}
        <Navbar />

        {/* LAYOUT */}
       <div className="relative min-h-screen mt-14">

  {/* Background Image */}
  <img
    src={hero1}
    alt="Walk-in tub"
    className="absolute inset-0 w-full h-full lg:object-center object-none "
    style={{
      objectPosition:"top center ",
    }}
  />

  {/* Gradient — واضح شمال، مختفي يمين */}
  <div
    className="absolute inset-0"
    style={{
      background: "linear-gradient(to right, rgba(11,34,64,0.92) 0%, rgba(11,34,64,0.95) 20%, rgba(11,34,64,0.2) 100%)",
    }}
  />

  {/* Content — grid يمين وشمال */}
  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2  px-16  pb-20 gap-12 items-center">

    {/* LEFT — Text */}
    <div className="max-w-xl md:pt-14">

      {/* Headline */}
      <h1
        className="text-6xl font-bold text-white leading-tight tracking-tight mb-5"
        style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
      >
        Bathe Safely.<br />
        Live <span style={{ color: "#C8922A" }}>Independently.</span><br />
        <span className="text-5xl" style={{ color: "rgba(255,255,255,0.7)" }}>Stay in Florida.</span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg leading-relaxed mb-8 font-light" style={{ color: "rgba(255,255,255,0.78)" }}>
        Regain your confidence with a walk-in tub built for{" "}
        <strong className="font-semibold text-white">Florida seniors</strong>  zero
        fall risk, therapeutic hydrotherapy jets and same day installation.
      </p>

      {/* CTAs */}
      <div className="flex items-center justify-center pt-5">
        <a href="#form">
          <Button
            className="cursor-pointer px-8 py-6 text-base font-bold rounded-lg text-white"
            style={{ background: "#C8922A", boxShadow: "0 8px 30px rgba(200,146,42,0.45)" }}
          >
            Get My Free Quote →
          </Button>
        </a>
       
    </div>
    </div>

    {/* RIGHT — Stats cards */}
    <div className="flex flex-col gap-4 max-w-xs  md:ml-auto md:mt-28  ">
      {[
        { num: "12,000+", label: "Florida homes served" },
        { num: "1–3 Days", label: "Typical installation turnaround" },
        { num: "500+", label: "5-star reviews, not just approvals" },
      ].map((item) => (
        <div
          key={item.num}
          className="px-2 py-2 md:px-6 md:py-5 rounded-xl border border-[#C8922A]"
          style={{
            background: "rgba(11,34,64,0.55)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div className="text-2xl font-bold text-white">{item.num}</div>
          <div className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.65)" }}>{item.label}</div>
        </div>
      ))}
    </div>

  </div>
</div>
      </section>
    </>
  );
}
