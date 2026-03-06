import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Mess Management Web Application – Case Study",
    description:
      "A UX-focused web application designed to simplify daily mess operations including member management, meal tracking, expense calculation, and monthly reporting. The design emphasizes a clean dashboard, clear information hierarchy, and a simplified user flow for managing meals and expenses efficiently.",
    images: [
      "/projects/mess1.png",
      "/projects/mess2.png",
      "/projects/mess3.png",
      "/projects/mess4.png",
    ],
    tags: [
      "UX Research",
      "Dashboard Design",
      "User Flow",
      "Wireframing",
      "Figma",
    ],
    link: "#",
  },

  {
    title: "MUSIC – Modern Music Streaming App",
    description:
      "A modern music streaming app designed to create an immersive listening experience. The interface focuses on mood-based music discovery, simple navigation, and a clean dark UI with a minimal player experience.",
    images: [
      "/projects/music1.png",
      "/projects/music2.png",
      "/projects/music3.png",
    ],
    tags: ["Mobile App UI", "Dark UI", "UX Flow", "Playlist Design", "Figma"],
    link: "#",
  },

  {
    title: "Popcorn OTT App – Full UI/UX Design",
    description:
      "A complete OTT platform design combining movies, series, live TV, sports, and ticket booking in one ecosystem. The UX process focused on content discovery, smooth navigation, and personalized recommendations.",
    images: [
      "/projects/ott1.png",
      "/projects/ott2.png",
      "/projects/ott3.png",
      "/projects/ott4.png",
    ],
    tags: ["OTT Platform", "UX Research", "Content Discovery", "Streaming UI"],
    link: "#",
  },
];

/* ---------------- MODAL ---------------- */

const ProjectModal = ({ project, onClose }) => {
  const [activeImage, setActiveImage] = useState(0);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="bg-card rounded-3xl p-8 max-w-4xl w-full shadow-2xl relative animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-5 top-5 text-xl text-muted-foreground hover:text-white"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold mb-6 text-white">{project.title}</h2>

        {/* MAIN IMAGE */}
        <img
          src={project.images[activeImage]}
          className="w-full h-80 object-cover rounded-xl mb-6"
        />

        {/* IMAGE GALLERY */}
        <div className="flex gap-3 mb-6 overflow-x-auto">
          {project.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              onClick={() => setActiveImage(idx)}
              className={`w-28 h-20 object-cover rounded-lg cursor-pointer border ${
                activeImage === idx ? "border-primary" : "border-transparent"
              }`}
            />
          ))}
        </div>

        <p className="text-muted-foreground mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-4 py-1 rounded-full text-xs border border-border/50 text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition"
        >
          View Case Study <ArrowUpRight size={18} />
        </a>
      </div>
    </div>
  );
};

/* ---------------- PROJECT SECTION ---------------- */

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm uppercase tracking-wider text-muted-foreground">
            Featured Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Projects that{" "}
            <span className="italic font-serif text-white">
              make an impact.
            </span>
          </h2>

          <p className="text-muted-foreground">
            A selection of my recent design work focusing on solving real-world
            problems through thoughtful UX and modern UI design.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedProject(project)}
              className="group glass rounded-3xl overflow-hidden cursor-pointer hover:scale-105 transition"
            >
              <img
                src={project.images[0]}
                className="w-full h-60 object-cover"
              />

              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold group-hover:text-primary">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 rounded-full text-xs border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="text-center mt-12">
          <AnimatedBorderButton onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "View All Projects"}{" "}
            <ArrowUpRight size={18} />
          </AnimatedBorderButton>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
