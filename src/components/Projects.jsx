import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="border-y border-[#CFB991]/40 bg-white py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Selected Work"
          title="Featured Projects"
          description="Published research and applied AI projects across healthcare, NLP, machine learning, LLM systems, and agentic applications."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
