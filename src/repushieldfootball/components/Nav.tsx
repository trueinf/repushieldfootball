"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const itemClass = (active: boolean) =>
    [
      "nav-item px-4 py-2 rounded-lg font-medium cursor-pointer",
      active ? "text-white bg-gradient-to-r from-blue-600 to-purple-600" : "text-gray-600 hover:text-white",
    ].join(" ");

  return (
    <nav id="header" className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" aria-label="Go to Dashboard" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-shield-halved text-white text-lg" />
              </div>
              <span className="text-xl font-bold text-gray-900">RepuShield</span>
            </Link>

            <div className="hidden md:flex space-x-1">
              <Link href="/" className={itemClass(pathname === "/")}>
                Dashboard
              </Link>
              <Link href="/feed" className={itemClass(pathname === "/feed")}>
                Feed
              </Link>
              <Link href="/players" className={itemClass(pathname === "/players")}>
                Players
              </Link>
              <Link href="/triage" className={itemClass(pathname === "/triage")}>
                Triage Queue
              </Link>
              <Link href="/notifications" className={itemClass(pathname === "/notifications")}>
                Notifications
              </Link>
              <Link href="/admin" className={itemClass(pathname === "/admin")}>
                Admin
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <i className="fa-solid fa-bell text-gray-400 text-lg cursor-pointer hover:text-gray-600" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </div>
            <img
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
              alt="User"
              className="w-8 h-8 rounded-full border-2 border-gray-200"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
