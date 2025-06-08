import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";

// Credit card data for mapping
const creditCards = [
  {
    id: 1,
    style: "bg-[#ffffff1a] backdrop-blur-[6.84px]",
    textColor: "text-white",
    labelColor: "text-[#ededed]",
    zIndex: 3,
    top: "top-[65px]",
  },
  {
    id: 2,
    style: "bg-[#2bb32a]",
    textColor: "text-[#414141]",
    labelColor: "text-[#595959]",
    zIndex: 2,
    top: "top-[173px]",
  },
  {
    id: 3,
    style: "bg-white",
    textColor: "text-[#1a1e1c]",
    labelColor: "text-[#adadad]",
    zIndex: 1,
    top: "top-[297px]",
  },
];

export const CreditCardOfferSection = (): JSX.Element => {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left content */}
        <div className="flex flex-col w-full lg:w-1/2 items-start gap-6">
          <h2 className="text-4xl font-bold text-white [font-family:'M_PLUS_1',Helvetica] leading-tight">
            Design your personalized credit card.
          </h2>

          <p className="text-[#adb2b1] max-w-md font-regular-p font-[number:var(--regular-p-font-weight)] text-[length:var(--regular-p-font-size)] tracking-[var(--regular-p-letter-spacing)] leading-[var(--regular-p-line-height)] [font-style:var(--regular-p-font-style)]">
            You have the freedom to personalize the design of your credit card,
            ensuring a truly unique experience that makes you feel extraordinary
          </p>

          <Button className="bg-[#2bb32a] hover:bg-[#25a024] text-white rounded-full px-8 py-4 flex items-center gap-4">
            <span className="[font-family:'M_PLUS_1',Helvetica] font-medium text-base leading-6">
              Create New Card
            </span>
            <img
              className="w-[24.5px] h-[18.5px]"
              alt="Arrow"
              src="/vector-7.svg"
            />
          </Button>
        </div>

        {/* Right content - Credit cards display */}
        <div className="relative w-full lg:w-1/2 h-[519px]">
          <div className="relative w-full h-full">
            <div className="relative w-[517px] h-[636px] mx-auto">
              {/* Star decoration */}
              <img
                className="absolute w-[266px] h-[269px] bottom-12 left-0 z-0"
                alt="Star"
                src="/star-17-1.svg"
              />

              {/* Credit cards */}
              {creditCards.map((card) => (
                <div
                  key={card.id}
                  className={`absolute w-[447px] h-[275px] ${card.top} left-8 rotate-[18.88deg] z-${card.zIndex}`}
                >
                  <Card
                    className={`relative w-[437px] h-[307px] top-[-31px] -left-px border-none`}
                  >
                    <div
                      className={`w-[437px] h-[277px] top-[30px] ${card.style} rounded-[36.64px] absolute left-0 border-none`}
                    />

                    <div
                      className={`absolute top-[218px] left-[47px] font-semibold ${card.labelColor} text-base leading-normal [font-family:'M_PLUS_1',Helvetica] tracking-[0]`}
                    >
                      Name
                    </div>

                    <div
                      className={`top-[127px] left-[47px] ${card.labelColor} text-base absolute [font-family:'M_PLUS_1',Helvetica] font-semibold tracking-[0] leading-normal`}
                    >
                      Credit Card No.
                    </div>

                    <div
                      className={`top-[213px] left-[188px] ${card.labelColor} text-base absolute [font-family:'M_PLUS_1',Helvetica] font-semibold tracking-[0] leading-normal`}
                    >
                      Exp.
                    </div>

                    <div
                      className={`absolute top-[248px] left-[189px] [font-family:'M_PLUS_1',Helvetica] font-semibold ${card.textColor} text-[13.7px] tracking-[0] leading-normal`}
                    >
                      09/11
                    </div>

                    <div
                      className={`top-[248px] left-[47px] ${card.textColor} text-[13.7px] absolute [font-family:'M_PLUS_1',Helvetica] font-medium tracking-[0] leading-normal`}
                    >
                      REHAN RAIHAN
                    </div>

                    <img
                      className="absolute w-[55px] h-[26px] top-[111px] left-[50px] rotate-[-18.88deg]"
                      alt="Chip"
                      src="/exclude-4.svg"
                    />

                    <img
                      className="absolute w-10 h-[34px] top-[5px] left-[366px] rotate-[-18.88deg]"
                      alt="Network logo"
                      src="/vector--stroke-.svg"
                    />

                    <div
                      className={`top-[161px] left-[45px] ${card.textColor} text-[22.9px] leading-[27.5px] absolute [font-family:'M_PLUS_1_Code',Helvetica] font-bold tracking-[0] whitespace-nowrap`}
                    >
                      1602&nbsp;&nbsp;0911&nbsp;&nbsp;2019&nbsp;&nbsp;2021
                    </div>

                    <img
                      className="absolute w-[59px] h-[34px] top-[188px] left-[346px] rotate-[-18.88deg]"
                      alt="Card logo"
                      src="/vector.svg"
                    />
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
