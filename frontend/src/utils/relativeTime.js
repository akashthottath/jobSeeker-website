// Turns a timestamp into a short relative string, e.g. "Posted today",
// "Posted 3d ago", "Posted 2w ago".
export const relativeTime = (dateString) => {
  const posted = new Date(dateString);
  const diffMs = Date.now() - posted.getTime();
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (days <= 0) return "Posted today";
  if (days === 1) return "Posted yesterday";
  if (days < 7) return `Posted ${days}d ago`;
  if (days < 30) return `Posted ${Math.floor(days / 7)}w ago`;
  return `Posted ${Math.floor(days / 30)}mo ago`;
};
