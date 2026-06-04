function ExperienceCard({
  role,
  company,
  companyLink,
  extraLink,
  extraLinkText,
  date,
  description,
  bullets,
  tech,
}) {
  return (
    <article className="group rounded-2xl border border-[#CFB991]/50 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-lg">
      <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="mb-2 text-sm font-bold text-[#8E6F3E]">{date}</p>

          <h3 className="text-2xl font-bold">
            {role} <span className="font-normal text-[#555960]">at</span>{" "}
            <a
              href={companyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#8E6F3E]"
            >
              {company}
            </a>
          </h3>
        </div>

        <div className="flex gap-3">
          <a
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-[#CFB991] px-4 py-2 text-sm font-bold transition hover:bg-[#EBD99F]/40"
          >
            Company ↗
          </a>

          {extraLink && (
            <a
              href={extraLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-black px-4 py-2 text-sm font-bold text-white transition hover:bg-[#8E6F3E]"
            >
              {extraLinkText} ↗
            </a>
          )}
        </div>
      </div>

      <p className="mb-5 leading-relaxed text-[#555960]">{description}</p>

      <ul className="mb-6 space-y-3">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3 text-[#555960]">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#CFB991]" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-[#CFB991]/40 bg-[#F8F7F2] px-3 py-1 text-sm text-[#555960]"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

export default ExperienceCard;
