import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Linkedin,
  Instagram,
  Facebook,
  Download,
  Palette,
} from "lucide-react";
import { SiBehance } from "react-icons/si";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "UI Design",
  "UX Research",
  "User Flow",
  "Wireframing",
  "Prototyping",
  "Design Systems",
  "Figma",
  "Adobe XD",
  "Interaction Design",
  "Usability Testing",
  "Information Architecture",
  "Mobile App Design",
  "Web App Design",
  "Responsive Design",
  "Design Thinking",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Floating Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#5e36ff",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            {/* Tag */}
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
              <Palette className="w-4 h-4" />
              UI Designer & UX Researcher
            </span>

            {/* Heading */}
            <div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                {" "}
                Creative <span className="text-primary glow-text">
                  Design
                </span>{" "}
                <br /> Better{" "}
                <span className="font-serif italic font-normal text-white">
                  {" "}
                  Experience{" "}
                </span>{" "}
              </h1>

              <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                Hi, I'm <b>Emon Saha Joy</b>, a passionate UI/UX designer who
                focuses on creating clean, modern, and user-centered digital
                products. I transform complex ideas into intuitive and engaging
                user experiences.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Button
                href="/Emon_Saha_Joy_Resume.pdf"
                target="_blank"
                size="lg"
              >
                View Case Studies
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <AnimatedBorderButton
                href="/Emon_Saha_Joy_Resume.pdf"
                target="_blank"
              >
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-muted-foreground">
                Connect with me:
              </span>

              {[
                {
                  icon: SiBehance,
                  href: "https://www.behance.net/sahajoyuix",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/sahajoyuix",
                },
                {
                  icon: Facebook,
                  href: "https://www.facebook.com/sahajoyuix",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/sahajoyuix",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative animate-fade-in">
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 rounded-3xl
                bg-gradient-to-br from-primary/30 via-transparent
                to-primary/10 blur-2xl animate-pulse"
              />

              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/joy_profile.png"
                  alt="Emon Saha Joy"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Available badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for freelance
                    </span>
                  </div>
                </div>

                {/* Experience */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="text-2xl font-bold text-primary">1+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SKILLS MARQUEE */}
        <div className="mt-20">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Design tools & skills
          </p>

          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="flex animate-marquee whitespace-nowrap">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-6 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
