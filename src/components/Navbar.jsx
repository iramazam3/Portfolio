function Navbar() {
  return (
    <nav className="border-b border-[#CFB991]/40 bg-[#F8F7F2]">
      <div className="mx-auto flex max-w-6xl items-center justify-end px-6 py-4">
        <div className="flex gap-8 font-medium text-[#555960]">
          <a href="#projects" className="transition hover:text-black">
            Projects
          </a>
          <a href="#experience" className="transition hover:text-black">
            Experience
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
