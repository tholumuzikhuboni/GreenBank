import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";

export const HeroSection = (): JSX.Element => {
  // User data for the avatars section
  const users = [
    { id: 1, imgSrc: "/ellipse-3.png" },
    { id: 2, imgSrc: "/ellipse-4.png" },
    { id: 3, imgSrc: "/ellipse-5.png" },
  ];

  return (
    <div className="flex flex-wrap gap-8 w-full">
      {/* Left content section */}
      <div className="flex flex-col items-start gap-8 max-w-[604px] relative">
        <h1 className="font-bold text-[56px] text-white tracking-[-1.40px] leading-[64px] [font-family:'M_PLUS_1',Helvetica]">
          Discover the Perfect Credit Card for You
        </h1>

        <p className="text-lg text-[#adb2b1] [font-family:'M_PLUS_1',Helvetica] max-w-[498px] leading-6">
          Discover the power of our secure and rewarding credit cards. Explore
          our range of credit cards and take control of your finances today.
        </p>

        <Button className="bg-[#2bb32a] hover:bg-[#259c24] text-white rounded-[64px] px-8 py-4 h-auto [font-family:'M_PLUS_1',Helvetica]">
          <span>Get Started</span>
          <ArrowRightIcon className="ml-2 h-5 w-6" />
        </Button>

        <div className="flex items-center gap-4">
          <div className="flex items-end">
            {users.map((user, index) => (
              <img
                key={user.id}
                className={`relative w-[50px] h-[50px] object-cover ${
                  index > 0 ? "-ml-3" : ""
                }`}
                alt={`User ${user.id}`}
                src={user.imgSrc}
              />
            ))}
          </div>

          <div className="flex flex-col items-start">
            <span className="font-bold text-white text-base [font-family:'M_PLUS_1',Helvetica] leading-6">
              10.2k+
            </span>
            <span className="text-[#adb2b1] text-xs [font-family:'M_PLUS_1',Helvetica] leading-4 max-w-[177px]">
              Active users around the wordls
            </span>
          </div>
        </div>

        {/* Decorative vector */}
        <img
          className="absolute w-[361px] h-[102px] top-[61px] left-[-11px]"
          alt="Vector"
          src="/vector-4.svg"
        />
      </div>

      {/* Right content section with credit card */}
      <div className="flex-1 relative min-w-[604px]">
        <div className="relative w-full h-[539px]">
          <div className="relative h-[539px]">
            {/* Green circle background */}
            <div className="absolute w-[492px] h-[492px] top-[47px] left-[301px] bg-[#2bb32a] rounded-[246px]" />

            {/* Credit card */}
            <Card className="absolute w-[551px] h-[348px] top-[65px] left-9 rotate-[15deg] shadow-[0px_4px_20px_#00000040] rounded-[32px] backdrop-blur-[37.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(37.5px)_brightness(100%)] overflow-visible">
              <div className="relative w-[474px] h-[274px] top-[39px] left-14">
                <div className="absolute w-[57px] top-[199px] left-[3px] font-semibold text-[#b9bebd] text-sm leading-normal [font-family:'M_PLUS_1',Helvetica]">
                  Name
                </div>

                <div className="absolute w-[155px] top-[84px] left-[3px] [font-family:'M_PLUS_1',Helvetica] font-semibold text-[#b9bebd] text-sm leading-normal">
                  Credit Card No.
                </div>

                <div className="absolute w-11 top-[193px] left-[181px] [font-family:'M_PLUS_1',Helvetica] font-semibold text-[#b9bebd] text-sm leading-normal">
                  Exp.
                </div>

                <div className="absolute w-[54px] top-[236px] left-[183px] [font-family:'M_PLUS_1',Helvetica] font-semibold text-white text-xs leading-normal">
                  09/11
                </div>

                <div className="absolute w-[135px] top-[236px] left-[3px] [font-family:'M_PLUS_1',Helvetica] font-medium text-white text-xs leading-normal">
                  REHAN RAIHAN
                </div>

                <img
                  className="absolute w-[65px] h-[49px] top-[-55px] left-[34px]"
                  alt="Exclude"
                  src="/exclude-2.svg"
                />

                <img
                  className="absolute w-9 h-[51px] top-[57px] left-[451px]"
                  alt="Vector stroke"
                  src="/vector--stroke--2.svg"
                />

                <div className="absolute w-[382px] top-[126px] left-0 [font-family:'M_PLUS_1_Code',Helvetica] font-bold text-white text-[32px] leading-6">
                  1602&nbsp;&nbsp;0911&nbsp;&nbsp;2019&nbsp;&nbsp;2021
                </div>

                <img
                  className="absolute w-[68px] h-[60px] top-[269px] left-[362px]"
                  alt="Vector"
                  src="/vector-2.svg"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
