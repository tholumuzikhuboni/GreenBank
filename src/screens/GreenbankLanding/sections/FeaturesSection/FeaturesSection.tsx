import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

interface FeatureProps {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
  isCustomIcon?: boolean;
}

export const FeaturesSection = (): JSX.Element => {
  const features: FeatureProps[] = [
    {
      icon: "/icon-security.svg",
      iconAlt: "Icon security",
      title: "Security Guarantee",
      description: "Your data and funds will be securely protected.",
    },
    {
      icon: "/group.png",
      iconAlt: "Group",
      title: "Investing",
      description: "Your data and funds will be securely protected.",
      isCustomIcon: true,
    },
    {
      icon: "/icon-analytics.svg",
      iconAlt: "Icon analytics",
      title: "Multiple Method",
      description: "Your data and funds will be securely protected.",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-16 w-full">
      <h2 className="font-bold text-white text-[40px] font-['M_PLUS_1',Helvetica]">
        What do we offer?
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="w-[392px] bg-transparent border-0 shadow-none"
          >
            <CardContent className="flex items-start gap-6 p-0">
              <div className="flex items-center justify-center p-4 bg-[#3d544d] rounded-3xl">
                {feature.isCustomIcon ? (
                  <div className="relative w-8 h-8">
                    <img
                      className="absolute w-[25px] h-[26px] top-[3px] left-[3px]"
                      alt={feature.iconAlt}
                      src={feature.icon}
                    />
                  </div>
                ) : (
                  <img
                    className="w-8 h-8"
                    alt={feature.iconAlt}
                    src={feature.icon}
                  />
                )}
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-medium text-white text-2xl font-['M_PLUS_1',Helvetica]">
                  {feature.title}
                </h3>
                <p className="text-[#adb2b1] text-base font-normal w-[286px] font-['M_PLUS_1',Helvetica]">
                  {feature.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
