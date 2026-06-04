function ProjectCard({
  badge,
  title,
  description,
  metrics,
  tech,
  paperLink,
  githubLink,
}) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-[#CFB991]/50 bg-[#F8F7F2] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="absolute inset-x-0 top-0 h-1 bg-[#CFB991]" />

      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="inline-flex items-center rounded-full bg-black px-3 py-1 text-sm font-semibold text-[#CFB991]">
          {badge}
        </span>

        <div className="flex gap-4">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-[#8E6F3E] transition hover:text-black"
            >
              GitHub ↗
            </a>
          )}

          {paperLink && (
            <a
              href={paperLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-[#8E6F3E] transition hover:text-black"
            >
              Paper ↗
            </a>
          )}
        </div>
      </div>

      <h3 className="mb-4 text-2xl font-bold leading-tight transition group-hover:text-[#8E6F3E]">
        {title}
      </h3>

      <p className="mb-6 leading-relaxed text-[#555960]">{description}</p>

      <div className="mb-6 grid gap-3">
        {metrics.map((metric) => (
          <div
            key={metric}
            className="flex items-start gap-3 rounded-lg border border-[#CFB991]/30 bg-white px-4 py-3"
          >
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#CFB991]" />
            <span className="text-sm text-[#555960]">{metric}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-[#CFB991]/40 bg-white px-3 py-1 text-sm text-[#555960]"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

export default ProjectCard;
