import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import React, { JSX } from "react";

export default function FooterSection(): JSX.Element {
  const contactItems = [
    {
      icon: MapPin,
      text: "Pakal, Surabaya",
    },
    {
      icon: Phone,
      text: "+62 817 0317 7030",
    },
    {
      icon: Mail,
      text: "hda.interiordesign@gmail.com",
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "#",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="flex flex-col w-full items-start gap-8 pt-12 pb-0 px-28 relative bg-[#2d3748]">
      <div className="grid grid-cols-3 gap-8 w-full max-w-[1216px] mx-auto">
        <div className="flex flex-col items-start gap-4">
          <div className="flex h-10 items-center gap-3 w-full">
            <div className="w-10 h-10 bg-[url(/image-HDA-logo.png)] bg-cover bg-center rounded-full flex-shrink-0" />
            <div className="[font-family:'Inter-Medium',Helvetica] font-medium text-[#5ba8a8] text-lg tracking-[-0.44px] leading-[27px] whitespace-nowrap">
              HDA Interior
            </div>
          </div>
          <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#d0d5db] text-base tracking-[-0.31px] leading-6">
            Creating beautiful, functional spaces that inspire and delight. Your
            vision, our expertise.
          </p>
        </div>

        <div className="flex flex-col items-start gap-4">
          <h3 className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#5ba8a8] text-base tracking-[-0.31px] leading-6">
            Contact Us
          </h3>
          <div className="flex flex-col items-start gap-3 w-full">
            {contactItems.map((item, index) => (
              <div key={index} className="flex items-center gap-3 w-full">
                <item.icon className="w-[18px] h-[18px] text-[#d0d5db] flex-shrink-0" />
                <span className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#d0d5db] text-base tracking-[-0.31px] leading-6">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start gap-4">
          <h3 className="[font-family:'Inter-Medium',Helvetica] font-medium text-[#5ba8a8] text-base tracking-[-0.31px] leading-6">
            Follow Us
          </h3>
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-[#5ba8a8] flex items-center justify-center hover:bg-[#4a9797] transition-colors"
              >
                <social.icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start pt-8 w-full border-t border-[#354152]">
        <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#99a1ae] text-base text-center tracking-[-0.31px] leading-6 w-full">
          © 2025 HDA Interior. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
