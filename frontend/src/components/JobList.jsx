import JobCard from "./JobCard";

const JobList = ({ jobs }) => {
  if (jobs.length === 0) {
    return (
      <div className="py-14 border-t border-rule">
        <p className="font-serif text-lg text-ink">Not found...</p>
        <p className="text-sm text-ink-muted mt-1">
          Try Another One..
        </p>
      </div>
    );
  }

  return (
    <div>
      {jobs.map((job) => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
