import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const AboutSection = (): JSX.Element => {
  // Data for stats to enable mapping
  const stats = [
    { value: "16y", label: "Experience" },
    { value: "250+", label: "Merchant Partner" },
    { value: "18+", label: "Years Experience" },
    { value: "10.2k+", label: "Worldwide Clients" },
  ];

  return (
    <Card className="flex justify-between p-16 bg-[#3d544d3d] rounded-[32px] backdrop-blur backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(8px)_brightness(100%)] border-none">
      {stats.map((stat, index) => (
        <CardContent
          key={index}
          className="flex flex-col items-center justify-center gap-2 p-0"
        >
          <h3 className="[font-family:'M_PLUS_1',Helvetica] font-bold text-white text-5xl tracking-[-0.32px] leading-[56px]">
            {stat.value}
          </h3>
          <p className="[font-family:'M_PLUS_1',Helvetica] font-medium text-[#2bb32a] text-base leading-6">
            {stat.label}
          </p>
        </CardContent>
      ))}
    </Card>
  );
};
