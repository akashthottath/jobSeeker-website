import { useState } from "react";

const CATEGORY_OPTIONS = ["Design", "Development", "Marketing", "Sales", "Customer Support"];

const emptyForm = {
  title: "",
  company: "",
  category: "",
  location: "",
  description: "",
};

const fieldClass =
  "w-full bg-transparent border-b-2 border-ink/20 focus:border-emerald px-1 py-2 text-ink placeholder-ink-muted/70 focus:outline-none transition-colors";

const PostJobForm = ({ onSubmit, submitting }) => {
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const handleChange = (e) => {
    setConfirmed(false);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.company.trim() || !form.category || !form.location.trim()) {
      setError("Title, company, category and location are all needed before this can go live.");
      return;
    }
    setError("");
    const ok = await onSubmit(form);
    if (ok) {
      setForm(emptyForm);
      setConfirmed(true);
    }
  };

  return (
    <section id="post-job" className="max-w-5xl mx-auto px-6 sm:px-8 py-16 border-t border-rule">
      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <h2 className="font-serif text-2xl text-ink">Add a Job</h2>
          <p className="text-sm text-ink-muted mt-2 max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, voluptas!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="md:col-span-8 flex flex-col gap-6">
          {error && (
            <p className="text-sm text-plum">{error}</p>
          )}
          {confirmed && (
            <p className="text-sm text-emerald">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, tenetur!</p>
          )}

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="job-title" className="block text-sm text-ink-muted mb-1">Job title</label>
              <input id="job-title" name="title" value={form.title} onChange={handleChange}
                placeholder="Developer" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="job-company" className="block text-sm text-ink-muted mb-1">Company name</label>
              <input id="job-company" name="company" value={form.company} onChange={handleChange}
                placeholder="Pvt ltd" className={fieldClass} />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="job-category" className="block text-sm text-ink-muted mb-1">Category</label>
              <select id="job-category" name="category" value={form.category} onChange={handleChange}
                className={`${fieldClass} bg-transparent`}>
                <option value="">Select one</option>
                {CATEGORY_OPTIONS.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="job-location" className="block text-sm text-ink-muted mb-1">Location</label>
              <input id="job-location" name="location" value={form.location} onChange={handleChange}
                placeholder="Malappuram" className={fieldClass} />
            </div>
          </div>

          <div>
            <label htmlFor="job-description" className="block text-sm text-ink-muted mb-1">
              Description <span className="text-ink-muted/70">(optional)</span>
            </label>
            <textarea id="job-description" name="description" value={form.description} onChange={handleChange}
              rows={3} placeholder="Description about the role." className={`${fieldClass} resize-none`} />
          </div>

          <div>
            <button type="submit" disabled={submitting}
              className="bg-emerald hover:bg-emerald/90 text-paper text-sm font-medium px-5 py-2.5 rounded-sm transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
              {submitting ? "Publishing…" : "Add Job"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PostJobForm;
