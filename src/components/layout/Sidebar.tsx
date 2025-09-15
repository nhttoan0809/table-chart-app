export interface SidebarProps {
  selected: "table" | "chart";
  onSelect: (view: "table" | "chart") => void;
}

export function Sidebar({ selected, onSelect }: SidebarProps) {
  return (
    <aside className="h-full w-56 bg-gray-900 text-white flex flex-col py-6 px-4 border-r border-gray-800">
      <div className="text-2xl font-bold mb-8">Table/Chart App</div>
      <nav className="flex flex-col gap-4">
        <button
          className={`rounded px-3 py-2 text-left transition-colors ${
            selected === "table" ? "bg-gray-800" : "hover:bg-gray-800"
          } cursor-pointer`}
          onClick={() => onSelect("table")}
        >
          Table
        </button>
        <button
          className={`rounded px-3 py-2 text-left transition-colors ${
            selected === "chart" ? "bg-gray-800" : "hover:bg-gray-800"
          } cursor-pointer`}
          onClick={() => onSelect("chart")}
        >
          Chart
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;
