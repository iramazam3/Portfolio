function SectionHeader({ label, title, description }) {
  return (
    <div className="mb-14 max-w-3xl">
      <p className="mb-3 text-sm font-extrabold uppercase tracking-wide text-[#8E6F3E]">
        {label}
      </p>

      <h2 className="mb-5 text-4xl font-extrabold tracking-tight md:text-5xl">
        {title}
      </h2>

      <p className="text-lg leading-relaxed text-[#555960]">{description}</p>
    </div>
  );
}

export default SectionHeader;
