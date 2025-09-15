import { Layout } from "@/components/layout/Layout";
import React, { useEffect, useState } from "react";
import "./index.css";

function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to Analytics Dashboard
      </h1>
      <p className="text-lg text-gray-600">
        Chọn một mục ở sidebar để bắt đầu.
      </p>
    </div>
  );
}

function TablePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Table Page</h1>
      <p className="text-gray-600">
        Trang bảng dữ liệu (sẽ tích hợp TanStack Table).
      </p>
    </div>
  );
}

function ChartPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Chart Page</h1>
      <p className="text-gray-600">
        Trang biểu đồ (sẽ tích hợp Chart.js hoặc Recharts).
      </p>
    </div>
  );
}

function getPage(path: string) {
  switch (path) {
    case "/table":
      return <TablePage />;
    case "/chart":
      return <ChartPage />;
    default:
      return <DashboardPage />;
  }
}

export function App() {
  const [route, setRoute] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setRoute(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return <Layout>{getPage(route)}</Layout>;
}

export default App;
