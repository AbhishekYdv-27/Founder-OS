import {
  LayoutDashboard,
  Target,
  BarChart3,
  Users,
  Landmark,
  Map,
  Activity,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  { name: "Vision", icon: Target, path: "/vision" },
  { name: "OKRs", icon: BarChart3, path: "/okrs" },
  { name: "Hiring", icon: Users, path: "/hiring" },
  { name: "Investors", icon: Landmark, path: "/investors" },
  { name: "Roadmap", icon: Map, path: "/roadmap" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white flex flex-col justify-between shadow-2xl">
      <div>
        {/* Logo */}
        <div className="p-6 border-b border-slate-700">
          <h1 className="text-3xl font-extrabold text-blue-400">
            FounderOS
          </h1>

          <p className="text-slate-400 text-sm mt-1">
            Startup Management Platform
          </p>
        </div>

        {/* Navigation */}
        <nav className="mt-6 space-y-2 px-3">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300 ${
                    isActive
                      ? "bg-blue-600 shadow-lg"
                      : "hover:bg-slate-800 hover:translate-x-1"
                  }`
                }
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Bottom Card */}
      <div className="p-4">
        <div className="rounded-xl bg-slate-800 p-4 border border-slate-700">
          <div className="flex items-center gap-2 text-green-400">
            <Activity size={18} />
            <span className="font-semibold">System Online</span>
          </div>

          <p className="text-slate-400 text-sm mt-3">
            Startup Health
          </p>

          <div className="w-full h-2 rounded-full bg-slate-700 mt-2">
            <div className="h-2 rounded-full bg-green-500 w-[94%]"></div>
          </div>

          <p className="mt-2 text-green-400 font-bold">
            Score: 94/100
          </p>

          <p className="text-xs text-slate-500 mt-4">
            FounderOS v1.0
          </p>
        </div>
      </div>
    </aside>
  );
}