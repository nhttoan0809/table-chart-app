import React from "react";

const navItems = [
  { label: "Dashboard", href: "/" },
  { label: "Table", href: "/table" },
  { label: "Chart", href: "/chart" },
];

export function Sidebar() {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (window.location.pathname !== href) {
      window.history.pushState({}, "", href);
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };
  return (
    <aside className="h-full w-56 bg-gray-900 text-white flex flex-col py-6 px-4 border-r border-gray-800">
      <div className="text-2xl font-bold mb-8">Dashboard</div>
      <nav className="flex flex-col gap-4">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => handleNav(e, item.href)}
            className="rounded px-3 py-2 hover:bg-gray-800 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
