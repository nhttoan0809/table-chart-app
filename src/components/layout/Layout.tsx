import React from "react";
import { Sidebar } from "./Sidebar";
import type { SidebarProps } from "./Sidebar";
import { Header } from "./Header";

interface LayoutProps {
  children: React.ReactNode;
  sidebarProps: SidebarProps;
}

export function Layout({ children, sidebarProps }: LayoutProps) {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar {...sidebarProps} />
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <main className="flex-1 overflow-auto bg-gray-50 p-8">{children}</main>
      </div>
    </div>
  );
}

export default Layout;
