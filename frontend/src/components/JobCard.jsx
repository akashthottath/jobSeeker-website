import { relativeTime } from "../utils/relativeTime";

const categoryColor = {
  Design: "bg-plum",
  Development: "bg-emerald",
  Marketing: "bg-gold",
  Sales: "bg-slateblue",
  "Customer Support": "bg-ink-muted",
};

const JobCard = ({ job }) => {
  const barColor = categoryColor[job.category] || "bg-ink-muted";

  return (
    <article className="group grid sm:grid-cols-12 gap-x-4 gap-y-1 py-5 border-t border-rule first:border-t-0 hover:bg-white/60 transition-colors -mx-4 px-4">
      <div className="sm:col-span-6 flex gap-3">
        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${barColor}`} aria-hidden="true" />
        <div>
          <h3 className="font-serif text-lg text-ink leading-snug">{job.title}</h3>
          <p className="text-sm text-ink-muted">{job.company}</p>
        </div>
      </div>

      <div className="sm:col-span-3 sm:pl-4 text-sm text-ink-muted flex items-center">
        {job.location}
      </div>

      <div className="sm:col-span-2 text-sm text-ink-muted flex items-center">
        {job.category}
      </div>

      <div className="sm:col-span-1 text-sm text-ink-muted sm:text-right flex items-center sm:justify-end">
        {relativeTime(job.createdAt)}
      </div>

      {job.description && (
        <p className="sm:col-span-9 sm:col-start-1 text-sm text-ink-muted mt-2 pl-[18px] max-w-2xl">
          {job.description}
        </p>
      )}
    </article>
  );
};

export default JobCard;
