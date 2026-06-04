import ExperienceCard from "./ExperienceCard";
import SectionHeader from "./SectionHeader";
import { experiences } from "../data/experience";

function Experience() {
  return (
    <section id="experience" className="bg-[#F8F7F2] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Work History"
          title="Industry Experience"
          description="Software engineering experience across mobile apps, web platforms, and technical instruction."
        />

        <div className="space-y-6">
          {experiences.map((experience) => (
            <ExperienceCard
              key={`${experience.company}-${experience.role}`}
              {...experience}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
