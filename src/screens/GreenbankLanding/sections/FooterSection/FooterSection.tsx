import React from "react";

export const FooterSection = (): JSX.Element => {
  // Footer navigation links data
  const footerLinks = {
    aboutUs: {
      title: "About us",
      links: ["Investors", "Features", "Book a demo", "Security"],
    },
    products: {
      title: "Products",
      links: ["Credits Cards", "Gift Cards", "Savings accounts", "NFT"],
    },
    usefulLinks: {
      title: "Useful Links",
      links: ["Free rewards", "Documentation", "Affiliate program"],
    },
    social: {
      title: "Social",
      links: ["Changelog", "License", "Site Maps", "News"],
    },
  };

  return (
    <footer className="w-full">
      {/* Top promotional section */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-start gap-8 rounded-[48px]">
          <div className="flex flex-col items-start gap-8 max-w-xl">
            <div>
              <h2 className="font-bold-h2 font-[number:var(--bold-h2-font-weight)] text-white text-[length:var(--bold-h2-font-size)] tracking-[var(--bold-h2-letter-spacing)] leading-[var(--bold-h2-line-height)] [font-style:var(--bold-h2-font-style)]">
                Easy Way to manage your finances
              </h2>
              <p className="mt-6 font-['M_PLUS_1',Helvetica] font-normal text-[#adb2b1] text-lg tracking-[-0.54px] leading-6">
                Easy to use mobile app that support on android and ios.
              </p>
            </div>

            <div className="flex items-start gap-6">
              <img
                className="h-auto"
                alt="Badges app store"
                src="/badges-app-store.svg"
              />
              <img
                className="h-auto"
                alt="Badges google play"
                src="/badges-google-play.svg"
              />
            </div>
          </div>

          <div className="flex-1 flex justify-end">
            <img
              className="w-full max-w-[603px] h-auto object-cover"
              alt="Mobile app interface"
              src="/image-108.png"
            />
          </div>
        </div>
      </div>

      {/* Footer navigation and info section */}
      <div className="w-full bg-[#2834303d] backdrop-blur backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(8px)_brightness(100%)]">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
          {/* Main footer content */}
          <div className="flex flex-col gap-20">
            {/* Logo and navigation links */}
            <div className="flex flex-col lg:flex-row items-start gap-8">
              {/* Logo and description */}
              <div className="flex flex-col w-full lg:w-[392px] items-start gap-2.5">
                <div className="flex items-center gap-3">
                  <img
                    className="w-6 h-6"
                    alt="GreenBank Logo"
                    src="/exclude.svg"
                  />
                  <span className="font-['M_PLUS_1',Helvetica] font-bold text-white text-xl tracking-[-0.60px] leading-6">
                    GreenBank
                  </span>
                </div>
                <p className="font-['M_PLUS_1',Helvetica] font-normal text-[#adb2b1] text-base tracking-[-0.48px] leading-6 max-w-[287px]">
                  Discover the power of our secure and rewarding credit cards
                </p>
              </div>

              {/* Navigation links */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full lg:w-auto flex-1">
                {Object.values(footerLinks).map((section) => (
                  <div
                    key={section.title}
                    className="flex flex-col items-start gap-4"
                  >
                    <h3 className="font-['M_PLUS_1',Helvetica] font-bold text-white text-base leading-6">
                      {section.title}
                    </h3>
                    <nav className="flex flex-col items-start gap-2 w-full">
                      {section.links.map((link) => (
                        <a
                          key={link}
                          href="#"
                          className="font-['M_PLUS_1',Helvetica] font-normal text-[#adb2b1] text-base leading-6 hover:text-white transition-colors"
                        >
                          {link}
                        </a>
                      ))}
                    </nav>
                  </div>
                ))}
              </div>
            </div>

            {/* Copyright and cookies notice */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="font-['M_PLUS_1',Helvetica] font-normal text-[#adb2b1] text-xs leading-5">
                copyright 2025 Tholumuzi All Rights Reserved
              </p>
              <div className="flex items-center">
                <span className="font-['Poppins',Helvetica] font-normal text-[#adb2b1] text-xs leading-5">
                  This page uses cookies. See cookies details
                </span>
                <a
                  href="#"
                  className="font-['Poppins',Helvetica] font-normal text-[#adb2b1] text-xs leading-5 underline ml-1"
                >
                  here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
