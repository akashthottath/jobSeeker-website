const CategoryFilter = ({ categories, counts, activeCategory, onChange }) => {
  return (
    <>
      <nav className="hidden md:block sticky top-6">
        <h2 className="text-sm text-ink-muted mb-3">Categories</h2>
        <ul className="space-y-1">
          {categories.map((cat) => {
            const isActive = cat === activeCategory;
            return (
              <li key={cat}>
                <button
                  onClick={() => onChange(cat)}
                  className={`w-full flex items-center justify-between gap-3 py-1.5 pl-3 border-l-2 text-left text-sm transition-colors ${
                    isActive
                      ? "border-emerald text-ink font-medium"
                      : "border-transparent text-ink-muted hover:text-ink hover:border-rule"
                  }`}
                >
                  <span>{cat}</span>
                  <span className="text-xs tabular-nums text-ink-muted">{counts[cat] ?? 0}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="md:hidden">
        <label htmlFor="category-select" className="sr-only">Filter by category</label>
        <select
          id="category-select"
          value={activeCategory}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-white border border-rule rounded-sm px-3 py-2 text-sm text-ink"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat} ({counts[cat] ?? 0})
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default CategoryFilter;
