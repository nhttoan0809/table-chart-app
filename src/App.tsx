import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import "./index.css";

function TableView() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Table</h1>
      <p className="text-gray-600">Trang bảng dữ liệu (demo).</p>
    </div>
  );
}

function ChartView() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Chart</h1>
      <p className="text-gray-600">Trang biểu đồ (demo).</p>
    </div>
  );
}

export function App() {
  const [view, setView] = useState<"table" | "chart">("table");

  return (
    <Layout sidebarProps={{ selected: view, onSelect: setView }}>
      {view === "table" ? <TableView /> : <ChartView />}
    </Layout>
  );
}

export default App;
