import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 shadow-md" />
          <span className="text-lg font-bold tracking-tight text-slate-900">
            CA <span className="text-indigo-600">Monk</span>
          </span>
        </Link>

        {/* Center nav (optional but professional) */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <Link className="hover:text-slate-900 transition" to="/">
            Blogs
          </Link>
          <span className="cursor-default opacity-60">
            Resources
          </span>
          <span className="cursor-default opacity-60">
            Careers
          </span>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {location.pathname !== "/create" && (
            <Link to="/create">
              <Button className="rounded-xl px-5 font-semibold">
                Create Blog
              </Button>
            </Link>
          )}
        </div>

      </div>
    </header>
  );
};

export default Navbar;
