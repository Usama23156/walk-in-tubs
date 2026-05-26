import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "./components/navbar/nav";
import walkInTubs from "@/assets/walkintubs.png"

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
      <section className="relative min-h-screen ">
        {/* NAV */}
       <Navbar/>

        {/* LAYOUT */}
        <div
          className="lg:grid min-h-screen lg:grid-cols-[1fr_420px] justify-center md:pr-20 pb-20  "
          style={{
            background:
              "linear-gradient(to right, rgba(10,34,60,0.88) 0%, rgba(10,34,60,0.65) 45%, rgba(10,34,60,0.15) 100%)",
          }}
        >
          {/* LEFT — Photo + overlay + text */}
          <div className="relative overflow-hidden ">
            {/* Dark gradient overlay */}
            <div className="absolute inset-0" />

            {/* Text */}
            <div className="relative z-10 flex flex-col justify-center h-full px-16 pt-24 pb-16 max-w-xl">
              {/* Badge */}

              {/* Headline */}
              <h1
                className="text-6xl font-bold text-white leading-tight tracking-tight mb-5"
                style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
              >
                Bathe Safely.
                <br />
                Live <span className="text-[#C8922A]">Independently.</span>
                <br />
                <span className="text-white/70 text-5xl">Stay in Florida.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-white/75 text-lg leading-relaxed mb-8 font-light">
                Regain your confidence with a walk-in tub built for{" "}
                <strong className="text-white font-semibold">
                  Florida seniors
                </strong>{" "}
                — zero fall risk, therapeutic hydrotherapy jets, and same-day
                installation.
              </p>

              {/* CTAs */}
              <div className=" mb-10 mt-5">
                <a href="#form">
                  <Button
                    className="cursor-pointer px-8 py-6 text-base font-bold rounded-lg"
                    style={{
                      background: "#C8922A",
                      boxShadow: "0 8px 30px rgba(232,145,58,0.45)",
                    }}
                  >
                    Get My Free Quote →
                  </Button>
                </a>
              </div>

              {/* Social Proof */}
            </div>

            {/* Floating review */}
            {/* <div className="absolute bottom-0 left-16  flex items-center gap-3 px-4  rounded-xl border border-white/20 bg-white/10">
              <div className="w-9 h-9 rounded-full bg-[#1A7A6E] flex items-center justify-center text-white text-xs font-bold shrink-0">
                MR
              </div>
              <div>
                <div className="text-[#C8922A] text-xs">★★★★★</div>
                <div className="text-white/90 text-xs">
                  "Changed my life after hip surgery"
                </div>
                <div className="text-white/50 text-xs">
                  Margaret R. · Tampa, FL
                </div>
              </div>
            </div> */}
          </div>

          {/* RIGHT — Form */}

          <div className="relative flex md:mt-28 ">
            <img
              src={walkInTubs}
              alt=""
              className="absolute inset-0 lg:hover:scale-120 duration-900 transition-transform"
              style={{}}
            />
            <div>
            <div className="flex items-center gap-3 mt-110 md:mt-72 md:pt-14 px-5 md:px-0">
              {[
                { num: "12K+", label: "FL Homes" },
                { num: "4.9★", label: "Rating" },
                { num: "1-Day", label: "Install" },
                { num: "$0 Down", label: "Financing" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  {i > 0 && <div className="w-px h-8 bg-white/15" />}
                  <div>
                    <div className="text-2xl font-bold text-white">
                      {item.num.includes("★") ? (
                        <>
                          {item.num.replace("★", "")}
                          <span className="text-[#C8922A]">★</span>
                        </>
                      ) : (
                        item.num
                      )}
                    </div>
                    <div className="text-xs text-white/50 uppercase tracking-wide">
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
}
