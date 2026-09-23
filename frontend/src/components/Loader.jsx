const Loader = () => (
  <div className="py-14 flex items-center gap-2 text-ink-muted text-sm" role="status" aria-live="polite">
    <span className="flex gap-1">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-bounce [animation-delay:-0.3s]" />
      <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-bounce [animation-delay:-0.15s]" />
      <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-bounce" />
    </span>
    Roles loading...
  </div>
);

export default Loader;
