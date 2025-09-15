import React from "react";

export function Header() {
  return (
    <header className="h-16 bg-white/80 backdrop-blur flex items-center justify-between px-8 border-b border-gray-200 shadow-sm">
      <div className="text-xl font-semibold">Analytics Admin</div>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">User</span>
        <div className="w-8 h-8 rounded-full bg-gray-300" />
      </div>
    </header>
  );
}

export default Header;
