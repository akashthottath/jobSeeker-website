import { useEffect, useState, useMemo } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CategoryFilter from "./components/CategoryFilter";
import JobList from "./components/JobList";
import PostJobForm from "./components/PostJobForm";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import { fetchJobs, postJob } from "./services/jobService";

const CATEGORIES = ["All", "Design", "Development", "Marketing", "Sales", "Customer Support"];

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [submitting, setSubmitting] = useState(false);

  const loadJobs = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetchJobs();
      setJobs(res.data);
    } catch (err) {
      setError("Couldn't load roles. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadJobs();
  }, []);

  const handlePostJob = async (formData) => {
    setSubmitting(true);
    try {
      await postJob(formData);
      await loadJobs();
      return true;
    } catch (err) {
      setError("Couldn't publish that listing. Please try again.");
      return false;
    } finally {
      setSubmitting(false);
    }
  };

  const visibleJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesCategory = activeCategory === "All" || job.category === activeCategory;
      const query = search.trim().toLowerCase();
      const matchesSearch =
        !query ||
        job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [jobs, activeCategory, search]);

  const categoryCounts = useMemo(() => {
    const counts = { All: jobs.length };
    for (const cat of CATEGORIES.slice(1)) {
      counts[cat] = jobs.filter((j) => j.category === cat).length;
    }
    return counts;
  }, [jobs]);

  const companyCount = useMemo(
    () => new Set(jobs.map((j) => j.company.toLowerCase())).size,
    [jobs]
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <Hero
        search={search}
        onSearchChange={setSearch}
        jobCount={visibleJobs.length}
        companyCount={companyCount}
        loading={loading}
      />

      <main id="jobs" className="flex-1 max-w-5xl mx-auto w-full px-6 sm:px-8 pb-16">
        {error && (
          <p className="text-sm text-plum mb-6">{error}</p>
        )}

        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <CategoryFilter
              categories={CATEGORIES}
              counts={categoryCounts}
              activeCategory={activeCategory}
              onChange={setActiveCategory}
            />
          </div>

          <div className="md:col-span-9">
            {loading ? <Loader /> : <JobList jobs={visibleJobs} />}
          </div>
        </div>
      </main>

      <PostJobForm onSubmit={handlePostJob} submitting={submitting} />

      <Footer />
    </div>
  );
}

export default App;
