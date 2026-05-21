import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
      <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-16 py-6">
        <div className="text-white font-bold text-xl">
          Safe<span className="text-[#C8922A]">Step</span> Florida
        </div>
        <ul className="flex gap-8 list-none">
          <li><a href="#" className="text-white/80 text-sm hover:text-white">Walk-in Tubs</a></li>
          <li><a href="#" className="text-white/80 text-sm hover:text-white">Safety Features</a></li>
          <li><a href="#" className="text-white/80 text-sm hover:text-white">Financing</a></li>
        </ul>
        <div className="text-white font-semibold text-sm">📞 (800) 555-SAFE</div>
      </nav>

      {/* LAYOUT */}
      <div className="lg:grid min-h-screen lg:grid-cols-[1fr_420px] pr-20 pb-20" style={{
              background:
                "linear-gradient(to right, rgba(10,34,60,0.88) 0%, rgba(10,34,60,0.65) 45%, rgba(10,34,60,0.15) 100%)",
            }}>

        {/* LEFT — Photo + overlay + text */}
        <div className="relative overflow-hidden ">

          {/* Photo */}
        

          {/* Dark gradient overlay */}
          <div
            className="absolute inset-0"
            
          />

          {/* Text */}
          <div className="relative z-10 flex flex-col justify-center h-full px-16 pt-24 pb-16 max-w-xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 w-fit px-4 py-1.5 rounded-full border border-orange-400/40 bg-orange-400/15">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C8922A]" />
              <span className="text-[#C8922A] text-xs font-bold tracking-widest uppercase">
                Florida's #1 Walk-in Tub Provider
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-6xl font-bold text-white leading-tight tracking-tight mb-5"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>
              Bathe Safely.<br />
              Live{" "}
              <span className="text-[#C8922A]">Independently.</span>
              <br />
              <span className="text-white/70 text-5xl">Stay in Florida.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-white/75 text-lg leading-relaxed mb-8 font-light">
              Regain your confidence with a walk-in tub built for{" "}
              <strong className="text-white font-semibold">Florida seniors</strong> — zero
              fall risk, therapeutic hydrotherapy jets, and same-day installation.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-5 mb-10 mt-5">
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
              <button className="flex items-center gap-2 text-white/70 text-sm cursor-pointer bg-transparent border-none">
                <div className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-xs text-white">
                  ▶️
                </div>
                See How It Works
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6  border-t border-white/15">
              {[
                { num: "12K+", label: "FL Homes" },
                { num: "4.9★", label: "Rating" },
                { num: "1-Day", label: "Install" },
                { num: "$0 Down", label: "Financing" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6">
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
                    <div className="text-xs text-white/50 uppercase tracking-wide">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating review */}
          <div className="absolute bottom-0 left-16  flex items-center gap-3 px-4  rounded-xl border border-white/20 bg-white/10">
            <div className="w-9 h-9 rounded-full bg-[#1A7A6E] flex items-center justify-center text-white text-xs font-bold shrink-0">
              MR
            </div>
            <div>
              <div className="text-[#C8922A] text-xs">★★★★★</div>
              <div className="text-white/90 text-xs">"Changed my life after hip surgery"</div>
              <div className="text-white/50 text-xs">Margaret R. · Tampa, FL</div>
            </div>
          </div>
        </div>

        {/* RIGHT — Form */}
        <div
          id="form"
          className=" flex flex-col justify-center px-10 py-14 bg-none border mt-20 rounded-2xl shadow-2xl"
          
        >
          <p className="text-[#1A7A6E] text-xs font-bold tracking-widest uppercase mb-2">
            Free In-Home Consultation
          </p>
          <h2 className="text-2xl font-bold text-[#0d3554] mb-1">Get Your Custom Quote</h2>
          <p className="text-gray-600 text-sm mb-6">No obligation · FL licensed · Responds in 1 hour</p>

          <div className="space-y-4">
            <div>
              <Label className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-1.5 block">
                Full Name
              </Label>
              <Input
                placeholder="Margaret Johnson"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-1.5 block">
                  Phone
                </Label>
                <Input
                  type="tel"
                  placeholder="(555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <Label className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-1.5 block">
                  Age
                </Label>
                <Select onValueChange={(v) => setFormData({ ...formData, age: v })}>
                  <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="55-64">55–64</SelectItem>
                    <SelectItem value="65-74">65–74</SelectItem>
                    <SelectItem value="75-84">75–84</SelectItem>
                    <SelectItem value="85+">85+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-1.5 block">
                Florida City
              </Label>
              <Select onValueChange={(v) => setFormData({ ...formData, city: v })}>
                <SelectTrigger><SelectValue placeholder="Select city" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="miami">Miami</SelectItem>
                  <SelectItem value="orlando">Orlando</SelectItem>
                  <SelectItem value="tampa">Tampa</SelectItem>
                  <SelectItem value="jacksonville">Jacksonville</SelectItem>
                  <SelectItem value="other">Other Florida City</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-1.5 block">
                Primary Concern
              </Label>
              <Select onValueChange={(v) => setFormData({ ...formData, concern: v })}>
                <SelectTrigger><SelectValue placeholder="Select concern" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="falls">Fall Prevention</SelectItem>
                  <SelectItem value="arthritis">Arthritis / Joint Pain</SelectItem>
                  <SelectItem value="mobility">Mobility Issues</SelectItem>
                  <SelectItem value="independence">Independence</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              className="w-full py-6 text-base font-bold cursor-pointer mt-2"
              style={{ background: "#0d3554" }}
              onClick={handleSubmit}
            >
              Request Free Consultation →
            </Button>

            <p className="text-center text-xs text-gray-700">
              🔒 100% private — we never share your info
            </p>

            {/* Trust badges */}
            <div className="grid grid-cols-4 gap-2 pt-4 border-t border-gray-100 mt-7">
              {[
                { icon: "✅", text: "Licensed &\nInsured" },
                { icon: "🏠", text: "Florida\nLocal" },
                { icon: "💰", text: "Senior\nDiscounts" },
                { icon: "⭐", text: "4.9 Star\nRating" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <span className="text-base">{item.icon}</span>
                  <span className="text-xs text-gray-500 font-semibold text-center whitespace-pre-line leading-tight">
                    {item.text}
                  </span>
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