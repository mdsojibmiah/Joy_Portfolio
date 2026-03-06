import React from "react";
import { FaFigma } from "react-icons/fa";
import {
  SiMiro,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";
import { MdPersonSearch, MdOutlineTravelExplore } from "react-icons/md";
import { TbRoute } from "react-icons/tb";
import { AiOutlineInteraction } from "react-icons/ai";
import { BiMobileAlt, BiLayout } from "react-icons/bi";
import { HiOutlineDeviceTablet } from "react-icons/hi2";
import { BsLaptop } from "react-icons/bs";

const skills = [
  {
    category: "UX Research",
    skills: [
      {
        name: "User Research",
        icon: <MdPersonSearch className="text-blue-400" />,
      },
      {
        name: "User Persona",
        icon: <MdOutlineTravelExplore className="text-green-400" />,
      },
      {
        name: "User Journey Mapping",
        icon: <TbRoute className="text-purple-400" />,
      },
      {
        name: "Usability Testing",
        icon: <AiOutlineInteraction className="text-pink-400" />,
      },
    ],
  },
  {
    category: "UX Process",
    skills: [
      {
        name: "User Flow Design",
        icon: <TbRoute className="text-indigo-400" />,
      },
      {
        name: "Information Architecture",
        icon: <BiLayout className="text-orange-400" />,
      },
      { name: "Wireframing", icon: <BiLayout className="text-yellow-400" /> },
      {
        name: "Interactive Prototyping",
        icon: <AiOutlineInteraction className="text-red-400" />,
      },
    ],
  },
  {
    category: "UI Design",
    skills: [
      {
        name: "Mobile App UI",
        icon: <BiMobileAlt className="text-blue-500" />,
      },
      {
        name: "Web App Design",
        icon: <BsLaptop className="text-purple-500" />,
      },
      {
        name: "Landing Page Design",
        icon: <BiLayout className="text-green-500" />,
      },
      {
        name: "Dashboard & SaaS UI",
        icon: <BiLayout className="text-pink-500" />,
      },
    ],
  },
  {
    category: "Responsive Design",
    skills: [
      {
        name: "Mobile-first Design",
        icon: <BiMobileAlt className="text-blue-400" />,
      },
      {
        name: "Tablet Layouts",
        icon: <HiOutlineDeviceTablet className="text-green-400" />,
      },
      {
        name: "Desktop Interfaces",
        icon: <BsLaptop className="text-purple-400" />,
      },
      {
        name: "Cross-device Consistency",
        icon: <BiLayout className="text-orange-400" />,
      },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
      { name: "Miro", icon: <SiMiro className="text-yellow-400" /> },
      { name: "Adobe XD", icon: <SiAdobexd className="text-purple-500" /> },
      {
        name: "Photoshop",
        icon: <SiAdobephotoshop className="text-blue-500" />,
      },
      {
        name: "Illustrator",
        icon: <SiAdobeillustrator className="text-orange-500" />,
      },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-highlight/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Expertise & Design Tools
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in text-secondary-foreground">
            Skills{" "}
            <span className="font-serif italic font-normal text-white">
              that make an impact
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in">
            A blend of UX thinking, modern UI design, and powerful tools used to
            craft meaningful digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {skills.map((category, idx) => (
            <div
              key={idx}
              className="glass p-6 rounded-3xl border border-primary/20 hover:border-primary/50 transition-all duration-500 shadow-md hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-6 text-primary">
                {category.category}
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, sIdx) => (
                  <button
                    key={sIdx}
                    className="flex justify-start items-start gap-2 p-3 rounded-xl glass hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <div className="text-2xl">{skill.icon}</div>

                    <span className="text-sm font-medium text-muted-foreground">
                      {skill.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
