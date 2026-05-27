import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  ["/dashboard", "Dashboard"],
  ["/collections", "Collections"],
  ["/map-reference", "Map Reference"],
  ["/notes", "Notes"],
  ["/data", "Data"],
  ["/settings", "Settings"]
] as const;

export function AppShell() {
  return (
    <div className="min-h-screen md:grid md:grid-cols-[260px_1fr]">
      <aside className="hidden border-r border-terminal-surface bg-black/30 p-4 md:block">
        <h1 className="mb-6 font-mono text-terminal-accent">Appalachia Tracker</h1>
        <nav className="space-y-2">
          {navItems.map(([to, label]) => (
            <NavLink key={to} to={to} className="block rounded px-3 py-2 hover:bg-terminal-surface">
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="pb-16 md:pb-0">
        <Outlet />
      </main>
      <nav className="fixed bottom-0 left-0 right-0 grid grid-cols-6 border-t border-terminal-surface bg-terminal-bg md:hidden">
        {navItems.map(([to, label]) => (
          <NavLink key={to} to={to} className="p-2 text-center text-xs">
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
