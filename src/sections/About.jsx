import { Search, Layout, PenTool, Smartphone } from "lucide-react";

const highlights = [
  {
    icon: Search,
    title: "UX Research",
    description:
      "Understanding user behavior, identifying pain points, and turning insights into better design decisions.",
  },
  {
    icon: Layout,
    title: "Wireframing & Prototyping",
    description:
      "Creating structured wireframes and interactive prototypes to visualize ideas before development.",
  },
  {
    icon: PenTool,
    title: "UI Design",
    description:
      "Designing clean, modern, and visually consistent interfaces for web and mobile applications.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Building adaptable layouts that provide seamless experiences across mobile, tablet, and desktop devices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              About Me
            </span>

            <h2 className="text-4xl md:text-5xl mt-5 font-bold leading-tight text-secondary-foreground">
              Designing meaningful
              <span className="font-serif italic font-normal text-white">
                {" "}
                digital experiences
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                I’m <b>Emon Saha Joy</b>, a UI/UX designer who loves creating
                simple, user-friendly digital experiences. I focus on designing
                interfaces that are visually clean and easy for users to
                understand.
              </p>

              <p>
                I design modern and intuitive interfaces for web and mobile
                applications. My process includes UX research, user flows,
                wireframing, and interactive prototyping to ensure the product
                is easy and effective to use.
              </p>

              <p>
                I work on mobile apps, landing pages, web applications,
                dashboards, and responsive websites while maintaining consistent
                design systems and style guides.
              </p>

              <p>
                I mainly use{" "}
                <b>Figma, Miro, Adobe XD, Photoshop, and Illustrator</b>
                to design and prototype ideas.
              </p>

              <p>
                My goal is to create clean, functional, and impactful designs
                that help businesses connect better with their users.
              </p>
            </div>

            {/* Quote */}
            <div className="glass rounded-2xl p-6 glow-border">
              <p className="text-lg font-medium italic text-foreground">
                "Great design is not just about how it looks — it's about how it
                works, how it feels, and how it solves real user problems."
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl hover:scale-[1.03] transition"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
