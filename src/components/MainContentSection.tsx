import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Award, Briefcase, Users } from "lucide-react";
import React from "react";

const statsData = [
  {
    icon: Award,
    bgColor: "bg-[#5ba8a8]",
    title: "15+ Years",
    subtitle: "Of Excellence",
  },
  {
    icon: Briefcase,
    bgColor: "bg-[#e89b7c]",
    title: "200+ Projects",
    subtitle: "Successfully Completed",
  },
  {
    icon: Users,
    bgColor: "bg-[#5ba8a8]",
    title: "150+ Clients",
    subtitle: "Happy & Satisfied",
  },
];

const projectsData = [
  {
    image: "/image-with-fallback-2.png",
    category: "Residential",
    title: "Modern Living Room",
  },
  {
    image: "/image-with-fallback-3.png",
    category: "Commercial",
    title: "Executive Office",
  },
  {
    image: "/image-with-fallback-4.png",
    category: "Residential",
    title: "Elegant Bedroom",
  },
  {
    image: "/image-with-fallback-5.png",
    category: "Residential",
    title: "Contemporary Kitchen",
  },
];

const servicesData = [
  {
    title: "Residential Design",
    description: "Expert solutions tailored to your needs",
  },
  {
    title: "Office Design",
    description: "Expert solutions tailored to your needs",
  },
  {
    title: "Renovation",
    description: "Expert solutions tailored to your needs",
  },
  {
    title: "Consultation",
    description: "Expert solutions tailored to your needs",
  },
];

const testimonialsData = [
  {
    quote:
      '"HDA Interior transformed our house into a dream home. Their attention to detail and creativity exceeded our expectations."',
    name: "Sarah Johnson",
    role: "Homeowner",
  },
  {
    quote:
      '"Professional, efficient, and incredibly talented. They delivered our office renovation on time and within budget."',
    name: "Michael Chen",
    role: "Business Owner",
  },
  {
    quote:
      '"The team created a warm, inviting atmosphere that our customers love. Highly recommend their services!"',
    name: "Diana Putri",
    role: "Restaurant Owner",
  },
];

export default function MainContentSection() {
  return (
    <div className="relative w-full">
      <section className="relative w-full h-[600px] bg-[#101828]">
        <div
          className="absolute inset-0 opacity-60 bg-cover bg-center"
          style={{ backgroundImage: "url(/image-with-fallback.png)" }}
        />
        <div className="relative flex flex-col items-center justify-center h-full px-4">
          <div className="flex flex-col items-center gap-6 max-w-[704px] mx-auto">
            <h1 className="[font-family:'Inter-Regular',Helvetica] font-normal text-white text-6xl text-center tracking-[0.26px] leading-[60px]">
              Transform Your Space
            </h1>
            <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-gray-200 text-2xl text-center tracking-[0.07px] leading-8">
              Elevating homes and offices with timeless design and expert
              craftsmanship
            </p>
            <Button className="h-14 bg-[#e89b7c] hover:bg-[#d88a6b] rounded-[10px] px-8 gap-[6.4px]">
              <span className="[font-family:'Inter-Regular',Helvetica] font-normal text-white text-base tracking-[-0.31px] leading-6">
                Contact Us
              </span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-20 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-4 w-full">
              <h2 className="[font-family:'Inter-Medium',Helvetica] font-medium text-[#5ba8a8] text-xl text-center tracking-[-0.45px] leading-[30px]">
                About HDA Interior
              </h2>
              <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#495565] text-base text-center tracking-[-0.31px] leading-6 max-w-[768px]">
                We are a premier interior design and contracting company
                specializing in creating beautiful, functional spaces that
                reflect your unique style and needs. With years of experience
                and a passion for excellence, we bring your vision to life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {statsData.map((stat, index) => (
                <div key={index} className="flex flex-col items-center gap-6">
                  <div
                    className={`flex w-16 h-16 items-center justify-center ${stat.bgColor} rounded-full`}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#2d3748] text-base text-center tracking-[-0.31px] leading-6">
                      {stat.title}
                    </p>
                    <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#495565] text-base text-center tracking-[-0.31px] leading-6">
                      {stat.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 px-8 bg-gray-50">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-4 w-full">
              <h2 className="[font-family:'Inter-Medium',Helvetica] font-medium text-[#5ba8a8] text-xl text-center tracking-[-0.45px] leading-[30px]">
                Featured Projects
              </h2>
              <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#495565] text-base text-center tracking-[-0.31px] leading-6">
                Explore our latest interior design masterpieces
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {projectsData.map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden shadow-[0px_2px_4px_-2px_#0000001a,0px_4px_6px_-1px_#0000001a] rounded-[10px]"
                >
                  <CardContent className="p-0">
                    <div
                      className="w-full h-[214.5px] bg-cover bg-center"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                    <div className="p-4 flex flex-col gap-3">
                      <span className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#5ba8a8] text-sm tracking-[-0.15px] leading-5">
                        {project.category}
                      </span>
                      <h3 className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#2d3748] text-base tracking-[-0.31px] leading-6">
                        {project.title}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button
              variant="outline"
              className="h-auto py-[13.5px] px-[26px] rounded-[10px] border-2 border-[#5ba8a8] hover:bg-[#5ba8a8] hover:text-white"
            >
              <span className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#5ba8a8] text-base tracking-[-0.31px] leading-6 hover:text-white">
                View All Projects
              </span>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-20 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-4 w-full">
              <h2 className="[font-family:'Inter-Medium',Helvetica] font-medium text-[#5ba8a8] text-xl text-center tracking-[-0.45px] leading-[30px]">
                Our Services
              </h2>
              <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#495565] text-base text-center tracking-[-0.31px] leading-6">
                Comprehensive interior design solutions for every need
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {servicesData.map((service, index) => (
                <Card
                  key={index}
                  className="rounded-[10px] border border-solid p-6 flex flex-col items-center gap-4"
                >
                  <CardContent className="p-0 flex flex-col items-center gap-4 w-full">
                    <h3 className="[font-family:'Inter-Medium',Helvetica] font-medium text-[#2d3748] text-base text-center tracking-[-0.31px] leading-6">
                      {service.title}
                    </h3>
                    <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#495565] text-base text-center tracking-[-0.31px] leading-6">
                      {service.description}
                    </p>
                    <button className="[font-family:'Inter-Medium',Helvetica] font-medium text-[#5ba8a8] text-base tracking-[-0.31px] leading-6 hover:underline">
                      Learn More
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 px-8 bg-[#2d3748]">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-4 w-full">
              <h2 className="[font-family:'Inter-Medium',Helvetica] font-medium text-[#5ba8a8] text-xl text-center tracking-[-0.45px] leading-[30px]">
                Client Testimonials
              </h2>
              <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#d0d5db] text-base text-center tracking-[-0.31px] leading-6">
                What our clients say about us
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {testimonialsData.map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-[#364153] rounded-[10px] border-0"
                >
                  <CardContent className="p-6 flex flex-col gap-4">
                    <p className="[font-family:'Inter-Italic',Helvetica] font-normal italic text-[#d0d5db] text-base tracking-[-0.31px] leading-6">
                      {testimonial.quote}
                    </p>
                    <div className="flex flex-col gap-0">
                      <p className="[font-family:'Inter-Medium',Helvetica] font-medium text-white text-base tracking-[-0.31px] leading-6">
                        {testimonial.name}
                      </p>
                      <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#99a1ae] text-base tracking-[-0.31px] leading-6">
                        {testimonial.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
