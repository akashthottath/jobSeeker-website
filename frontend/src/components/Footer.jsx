const Footer = () => {
  return (
    <footer id="contact" className="border-t border-rule">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald inline-block" />
            <span className="font-serif text-lg text-ink">Apply Now</span>
          </div>
          <p className="text-sm text-ink-muted mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, quisquam.</p>
        </div>

        <div className="text-sm text-ink-muted">
          <p>applynow@gmail.com</p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-ink transition-colors">Twitter</a>
            <a href="#" className="hover:text-ink transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-ink transition-colors">GitHub</a>
          </div>
        </div>
      </div>

      <div className="border-t border-rule py-4 text-center text-xs text-ink-muted">
        © {new Date().getFullYear()} Apply Now.
      </div>
    </footer>
  );
};

export default Footer;
