const Hero = ({ search, onSearchChange, jobCount, companyCount, loading }) => {
  return (
    <section id="home" className="max-w-5xl mx-auto px-6 sm:px-8 pt-14 pb-10">
      <div className="grid md:grid-cols-12 gap-8 items-end">
        <div className="md:col-span-7">
          <h1 className="font-serif text-4xl sm:text-5xl leading-[1.1] text-ink">
            Search To Find Job
          </h1>
          <p className="mt-4 text-ink-muted text-base max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur fuga aspernatur quidem laboriosam eligendi repellendus!
          </p>
        </div>

        <div className="md:col-span-5">
          <label htmlFor="job-search" className="block text-sm text-ink-muted mb-2">
            {loading
              ? "Loading open roles…"
              : `${jobCount} job${jobCount !== 1 ? "s" : ""} openings on ${companyCount} compan${companyCount !== 1 ? "ies" : "y"}.`}
          </label>
          <input
            id="job-search"
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by title or company"
            className="w-full bg-transparent border-b-2 border-ink/20 focus:border-emerald px-1 py-2 text-ink placeholder-ink-muted/70 focus:outline-none transition-colors"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
