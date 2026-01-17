import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const SideNav = () => {
  const location = useLocation();

  const navItem = (to: string, label: string) => {
    const active = location.pathname === to;

    return (
      <Link
        to={to}
        className={`relative flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all
          ${
            active
              ? "bg-indigo-600 text-white shadow-sm"
              : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
          }`}
      >
        {/* Active indicator bar */}
        {active && (
          <span className="absolute left-0 h-6 w-1 rounded-r-full bg-white" />
        )}

        {/* Minimal bullet (intentional now) */}
        <span
          className={`h-2 w-2 rounded-full ${
            active ? "bg-white" : "bg-slate-300"
          }`}
        />

        <span>{label}</span>
      </Link>
    );
  };

  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-64 flex-col border-r border-slate-200 bg-white">

      {/* Logo / Brand */}
      <Link
        to="/"
        className="flex items-center gap-3 px-6 py-6"
      >
        <img
          src={logo}
          alt="CA Monk logo"
          className="h-16 w-17 object-contain"
        />
        <span className="text-lg font-semibold tracking-tight text-slate-900">
          CA <span className="text-indigo-600">Monk</span>
        </span>
      </Link>

      {/* Navigation */}
      <nav className="mt-4 flex-1 space-y-1 px-3">
        {navItem("/", "Blogs")}
        {navItem("/create", "Create Blog")}
      </nav>

      {/* Footer */}
      <div className="px-4 pb-6">
        <div className="rounded-xl bg-slate-50 px-4 py-3 text-xs text-slate-500">
          <p className="font-medium text-slate-700">CA Monk Platform</p>
          <p className="mt-1">
            Developed by <span className="text-slate-700">Ajay Reddy</span>
          </p>
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
