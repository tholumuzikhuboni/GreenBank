import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialSection = (): JSX.Element => {
  // Testimonial data for mapping
  const testimonials = [
    {
      id: 1,
      quote:
        '"Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings."',
      author: "Hadid Khan",
      role: "UIUX Designer",
      avatar: "/ellipse-3.png",
      iconSrc: "/group-1.png",
    },
    {
      id: 2,
      quote:
        "\"It's is both attractive and highly adaptable. It's exactly what I've been looking forefinitely wo lorem ipsum dolorth the investment.\"",
      author: "Wade Warren",
      role: "Web Designer",
      avatar: "/ellipse-4.png",
      iconSrc: "/group-2.png",
    },
    {
      id: 3,
      quote:
        "\"I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. \"",
      author: "Jenny Wilson",
      role: "Trust Administrator",
      avatar: "/ellipse-5.png",
      iconSrc: "/group-3.png",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8">
      {testimonials.map((testimonial) => (
        <Card
          key={testimonial.id}
          className="w-[392px] bg-[#27322f3d] rounded-[32px] backdrop-blur backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(8px)_brightness(100%)] border-none"
        >
          <CardContent className="flex flex-col items-start gap-8 px-6 py-12">
            <div className="inline-flex items-start gap-2.5 p-4 bg-[#3d544d] rounded-[56px]">
              <div className="relative w-6 h-6">
                <img
                  className="absolute w-5 h-[17px] top-[3px] left-0.5"
                  alt="Quote icon"
                  src={testimonial.iconSrc}
                />
              </div>
            </div>

            <p className="font-regular-p font-[number:var(--regular-p-font-weight)] text-white text-[length:var(--regular-p-font-size)] tracking-[var(--regular-p-letter-spacing)] leading-[var(--regular-p-line-height)] [font-style:var(--regular-p-font-style)]">
              {testimonial.quote}
            </p>

            <div className="flex items-start gap-2">
              <Avatar className="w-12 h-12">
                <AvatarImage
                  src={testimonial.avatar}
                  alt={testimonial.author}
                />
                <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
              </Avatar>

              <div className="flex flex-col items-start">
                <h4 className="mt-[-1.00px] font-['M_PLUS_1',Helvetica] font-medium text-white text-base tracking-[-0.32px] leading-6 whitespace-nowrap">
                  {testimonial.author}
                </h4>
                <p className="font-['M_PLUS_1',Helvetica] font-normal text-[#adb2b1] text-xs tracking-[0] leading-5 whitespace-nowrap">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
