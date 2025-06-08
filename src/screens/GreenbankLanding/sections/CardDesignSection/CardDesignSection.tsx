import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";

export const CardDesignSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-2.5 w-full">
      <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-[1240px] mx-auto">
        {/* Credit Card Visuals */}
        <div className="relative w-full md:w-1/2 h-[490px]">
          <div className="relative w-full max-w-[571px] h-[488px]">
            <div className="relative w-full max-w-[454px] h-[488px]">
              <div className="relative w-full max-w-[466px] h-[497px] -top-[7px]">
                {/* Green Credit Card */}
                <div className="absolute w-[424px] h-[260px] top-[198px] left-[21px] rotate-[11deg]">
                  <div className="relative w-[426px] h-[263px] -top-px -left-px">
                    <Card className="w-[414px] h-[263px] top-0 bg-[#2bb32a] rounded-[34.72px] absolute left-0 border-none">
                      <div className="absolute top-[178px] left-11 font-semibold text-[#595959] text-[15.2px] leading-normal font-['M_PLUS_1',Helvetica] tracking-[0]">
                        Name
                      </div>

                      <div className="top-[92px] left-11 text-[#595959] text-[15.2px] absolute font-['M_PLUS_1',Helvetica] font-semibold tracking-[0] leading-normal">
                        Credit Card No.
                      </div>

                      <div className="top-[174px] left-[178px] text-[#595959] text-[15.2px] absolute font-['M_PLUS_1',Helvetica] font-semibold tracking-[0] leading-normal">
                        Exp.
                      </div>

                      <div className="absolute top-[206px] left-[179px] font-['M_PLUS_1',Helvetica] font-semibold text-[#414141] text-[13px] tracking-[0] leading-normal">
                        09/11
                      </div>

                      <div className="top-[206px] left-11 text-[#414141] text-[13px] absolute font-['M_PLUS_1',Helvetica] font-medium tracking-[0] leading-normal">
                        REHAN RAIHAN
                      </div>

                      <img
                        className="absolute w-12 h-[34px] top-8 left-[7px] rotate-[-11deg]"
                        alt="Exclude"
                        src="/exclude-3.svg"
                      />

                      <img
                        className="absolute w-8 h-[39px] top-[33px] left-[325px] rotate-[-11deg]"
                        alt="Vector stroke"
                        src="/vector--stroke--5.svg"
                      />

                      <div className="top-[124px] left-[42px] text-[#414141] text-[21.7px] leading-[26.0px] absolute font-['M_PLUS_1_Code',Helvetica] font-bold tracking-[0] whitespace-nowrap">
                        1602&nbsp;&nbsp;0911&nbsp;&nbsp;2019&nbsp;&nbsp;2021
                      </div>

                      <img
                        className="absolute w-[50px] h-[42px] top-[190px] left-[373px] rotate-[-11deg]"
                        alt="Vector"
                        src="/vector-3.svg"
                      />
                    </Card>
                  </div>
                </div>

                {/* Transparent Credit Card */}
                <div className="absolute w-[424px] h-[260px] top-[7px] left-[25px] rotate-[-2.00deg]">
                  <div className="relative w-[414px] h-[263px] -top-px -left-px rounded-[34.72px]">
                    <Card className="w-[414px] h-[263px] top-0 bg-[#ffffff1a] rounded-[34.72px] backdrop-blur-[6.48px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6.48px)_brightness(100%)] absolute left-0 border-none">
                      <div className="absolute top-[178px] left-11 font-semibold text-[#ededed] text-[15.2px] leading-normal font-['M_PLUS_1',Helvetica] tracking-[0]">
                        Name
                      </div>

                      <div className="top-[92px] left-11 text-[#ededed] text-[15.2px] absolute font-['M_PLUS_1',Helvetica] font-semibold tracking-[0] leading-normal">
                        Credit Card No.
                      </div>

                      <div className="top-[174px] left-[178px] text-[#ededed] text-[15.2px] absolute font-['M_PLUS_1',Helvetica] font-semibold tracking-[0] leading-normal">
                        Exp.
                      </div>

                      <div className="absolute top-[206px] left-[179px] font-['M_PLUS_1',Helvetica] font-semibold text-white text-[13px] tracking-[0] leading-normal">
                        09/11
                      </div>

                      <div className="top-[206px] left-11 text-white text-[13px] absolute font-['M_PLUS_1',Helvetica] font-medium tracking-[0] leading-normal">
                        REHAN RAIHAN
                      </div>

                      <img
                        className="absolute w-[45px] h-[26px] top-6 left-[42px] rotate-[2.00deg]"
                        alt="Exclude"
                        src="/exclude-1.svg"
                      />

                      <img
                        className="absolute w-[27px] h-[35px] top-[35px] left-[359px] rotate-[2.00deg]"
                        alt="Vector stroke"
                        src="/vector--stroke--4.svg"
                      />

                      <div className="top-[124px] left-[42px] text-white text-[21.7px] leading-[26.0px] absolute font-['M_PLUS_1_Code',Helvetica] font-bold tracking-[0] whitespace-nowrap">
                        1602&nbsp;&nbsp;0911&nbsp;&nbsp;2019&nbsp;&nbsp;2021
                      </div>

                      <img
                        className="absolute w-[45px] h-[35px] top-[205px] left-[343px] rotate-[2.00deg]"
                        alt="Vector"
                        src="/vector-1.svg"
                      />
                    </Card>
                  </div>
                </div>
              </div>
            </div>

            <img
              className="absolute w-[255px] h-[252px] top-[218px] left-[316px]"
              alt="Star"
              src="/star-17.svg"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col w-full md:w-1/2 items-start gap-6">
          <h2 className="text-white text-[40px] font-bold font-['M_PLUS_1',Helvetica] leading-normal">
            Find the Perfect Credit Card for You
          </h2>

          <p className="text-[#adb2b1] text-base font-regular-p leading-6 max-w-[546px]">
            Discover your ideal credit card with ease. Our comprehensive
            selection caters to every financial need and lifestyle. Whether you
            seek cashback rewards, travel perks, or building credit, we have the
            perfect credit card waiting for you. Unleash the possibilities and
            find the credit card that fits your unique goals and aspirations.
          </p>

          <Button className="bg-[#2bb32a] text-white rounded-[64px] px-8 py-4 font-medium font-['M_PLUS_1',Helvetica] hover:bg-[#25a024]">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};
