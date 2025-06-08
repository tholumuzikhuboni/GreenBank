import React from "react";
import { Button } from "../../components/ui/button";
import { AboutSection } from "./sections/AboutSection";
import { CardDesignSection } from "./sections/CardDesignSection";
import { CreditCardOfferSection } from "./sections/CreditCardOfferSection";
import { FaqSection } from "./sections/FaqSection/FaqSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { TestimonialSection } from "./sections/TestimonialSection/TestimonialSection";

export const GreenbankLanding = (): JSX.Element => {
  // Partner logos data for mapping
  const partnerLogos = [
    { name: "Upwork", src: "/upwork.svg", width: "105.53px" },
    { name: "Petal", src: "/petal.svg", width: "90.48px" },
    { name: "Rakuten", src: "/rakuten.svg", width: "107.53px" },
    { name: "Nyt", src: "/nyt.svg", width: "236.8px" },
    { name: "Vice", src: "/vice.svg", width: "101.71px" },
    { name: "Dell", src: "/dell.svg", width: "100.57px" },
  ];

  // Navigation items data for mapping
  const navItems = ["Why Us", "Services", "Our Process", "Payments", "FAQs"];

  return (
    <div className="bg-[#1a1e1c] flex flex-col items-center w-full">
      <div className="bg-[#1a1e1c] w-full max-w-[1440px] relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <img className="w-full h-auto" alt="Dora" src="/dora.svg" />

          {/* Green glow effects */}
          <div className="w-[492px] h-[492px] top-0 right-1/4 rounded-full absolute bg-[#2bb32a] blur-[400px]" />
          <div className="w-[492px] h-[492px] top-[1906px] right-[5%] rounded-full absolute bg-[#2bb32a] blur-[400px]" />
          <div className="w-[492px] h-[492px] top-[3855px] left-0 rounded-full absolute bg-[#2bb32a] blur-[400px]" />
          <div className="w-[492px] h-[492px] top-[3890px] left-12 rounded-full absolute bg-[#2bb32a] blur-[400px]" />
          <div className="w-[386px] h-[386px] top-[4958px] right-[5%] rounded-full absolute bg-[#2bb32a] blur-[400px]" />

          <img
            className="absolute w-[90%] max-w-[1290px] h-auto mx-auto left-0 right-0 top-[385px]"
            alt="Ily dora"
            src="/ily-dora.png"
          />
        </div>

        {/* Main content container */}
        <div className="relative z-10 flex flex-col items-center gap-32 py-16 px-4">
          {/* Navigation bar */}
          <header className="flex w-full max-w-[1240px] items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img className="w-6 h-6" alt="Exclude" src="/exclude.svg" />
              <span className="font-bold text-white text-xl tracking-[-0.60px] leading-6 whitespace-nowrap font-sans">
                GreenBank
              </span>
            </div>

            {/* Navigation links */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="font-medium text-white text-base hover:text-[#2bb32a] transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Contact button */}
            <Button
              variant="outline"
              className="px-8 py-3 rounded-[64px] border-2 border-[#2bb32a] bg-transparent text-[#2bb32a] font-bold hover:bg-[#2bb32a] hover:text-white transition-colors"
            >
              Contact
            </Button>
          </header>

          {/* Main sections */}
          <HeroSection />
          <AboutSection />

          {/* Partner logos */}
          <div className="flex w-full max-w-[1240px] items-center justify-between flex-wrap gap-8">
            {partnerLogos.map((logo, index) => (
              <img
                key={index}
                className="h-8"
                style={{ width: logo.width }}
                alt={logo.name}
                src={logo.src}
              />
            ))}
          </div>

          <FeaturesSection />
          <CreditCardOfferSection />
          <CardDesignSection />
          <TestimonialSection />
          <FaqSection />
          <FooterSection />
        </div>
      </div>
    </div>
  );
};
