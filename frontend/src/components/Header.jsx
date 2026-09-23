const Header = () => {
  return (
    <header className="border-b border-rule">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald inline-block" />
          <span className="font-serif text-xl font-semibold text-ink">Apply Now</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-[15px] text-ink-muted">
          <a href="#home" className="hover:text-ink transition-colors">Home</a>
          <a href="#jobs" className="hover:text-ink transition-colors">Jobs</a>
          <a href="#contact" className="hover:text-ink transition-colors">Contact</a>
        </nav>

        <a
          href="#post-job"
          className="bg-emerald hover:bg-emerald/90 text-paper text-sm font-medium px-4 py-2 rounded-sm transition-colors"
        >
          Add a job
        </a>
      </div>
    </header>
  );
};

export default Header;
