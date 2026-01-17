import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-32 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Top row */}
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">

          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              CA <span className="text-indigo-600">Monk</span>
            </h3>
            <p className="mt-2 max-w-xs text-sm text-slate-600">
              Curated insights for CA aspirants and professionals to stay ahead
              in finance, accounting, and careers.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-10 text-sm text-slate-600">
            <div className="space-y-2">
              <p className="font-medium text-slate-900">Explore</p>
              <Link to="/" className="block hover:text-slate-900">
                Blogs
              </Link>
              <span className="block opacity-60">Resources</span>
              <span className="block opacity-60">Careers</span>
            </div>

            <div className="space-y-2">
              <p className="font-medium text-slate-900">Platform</p>
              <span className="block opacity-60">About</span>
              <span className="block opacity-60">Contact</span>
              <span className="block opacity-60">Privacy</span>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 text-xs text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} CA Monk. All rights reserved.</p>
          <p>Built with React & Tailwind</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
