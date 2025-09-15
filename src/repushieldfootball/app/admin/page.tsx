"use client";

import { useState } from "react";
import Nav from "../../components/Nav";
import PromptManager from "../../components/admin/PromptManager";

type ModuleKey = "prompts" | "sources" | "entities" | "workflows" | "users" | "audit";

const moduleTitle: Record<ModuleKey, string> = {
  prompts: "Prompt Manager",
  sources: "Source Manager",
  entities: "Entity Manager",
  workflows: "Workflow Manager",
  users: "User & Roles",
  audit: "Audit Logs",
};

export default function AdminPage() {
  const [active, setActive] = useState<ModuleKey>("prompts");

  const adminNavItem = (key: ModuleKey, icon: string, label: string) => (
    <button
      key={key}
      onClick={() => setActive(key)}
      className={`admin-nav-item w-full text-left px-4 py-3 rounded-lg cursor-pointer flex items-center space-x-3 ${
        active === key ? "active" : ""
      }`}
    >
      <i className={`fa-solid ${icon} text-lg`} />
      <span className="font-medium">{label}</span>
    </button>
  );

  return (
    <>
      <Nav />

      <div className="flex h-screen">
        {/* Left Navigation Panel */}
        <div id="admin-sidebar" className="w-64 bg-white border-r border-gray-200 overflow-auto">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Admin Console</h2>

            <nav className="space-y-2">
              {adminNavItem("prompts", "fa-code", "Prompt Manager")}
              {adminNavItem("sources", "fa-plug", "Source Manager")}
              {adminNavItem("entities", "fa-users", "Entity Manager")}
              {adminNavItem("workflows", "fa-route", "Workflow Manager")}
              {adminNavItem("users", "fa-user-gear", "User & Roles")}
              {adminNavItem("audit", "fa-clipboard-list", "Audit Logs")}
            </nav>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Content Panel */}
          <div className="flex-1 overflow-auto">
            {/* Top Bar */}
            <div id="admin-topbar" className="bg-white border-b border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <h1 className="text-2xl font-bold text-gray-900">{moduleTitle[active]}</h1>
                  <nav className="text-sm text-gray-500">
                    <span>Admin Console</span>
                    <i className="fa-solid fa-chevron-right mx-2" />
                    <span className="text-gray-900">{moduleTitle[active]}</span>
                  </nav>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 flex items-center space-x-2">
                    <i className="fa-solid fa-plus" />
                    <span>{active === "prompts" ? "Add Prompt" : "Add"}</span>
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50">Export</button>
                </div>
              </div>
            </div>

            {active === "prompts" && <PromptManager />}
          </div>

          {/* Sidebar Widgets */}
          <div id="admin-sidebar-widgets" className="w-80 bg-white border-l border-gray-200 p-6 overflow-auto">
            {/* System Health */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">System Health</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 status-connected rounded-full" />
                    <span className="text-sm">Twitter API</span>
                  </div>
                  <span className="text-xs text-gray-500">Online</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 status-warning rounded-full" />
                    <span className="text-sm">Instagram API</span>
                  </div>
                  <span className="text-xs text-gray-500">Rate Limited</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 status-connected rounded-full" />
                    <span className="text-sm">AI Model</span>
                  </div>
                  <span className="text-xs text-gray-500">Healthy</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 status-disconnected rounded-full" />
                    <span className="text-sm">Reddit API</span>
                  </div>
                  <span className="text-xs text-gray-500">Disconnected</span>
                </div>
              </div>
            </div>

            {/* Recent Changes */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Changes</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <i className="fa-solid fa-code text-blue-500 text-sm mt-1" />
                  <div>
                    <div className="text-sm font-medium">Prompt updated</div>
                    <div className="text-xs text-gray-500">Threat Detection v2.1.4 activated</div>
                    <div className="text-xs text-gray-400">2 hours ago</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="fa-solid fa-user-plus text-green-500 text-sm mt-1" />
                  <div>
                    <div className="text-sm font-medium">User added</div>
                    <div className="text-xs text-gray-500">New analyst: Emma Wilson</div>
                    <div className="text-xs text-gray-400">4 hours ago</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="fa-solid fa-users text-purple-500 text-sm mt-1" />
                  <div>
                    <div className="text-sm font-medium">Player added</div>
                    <div className="text-xs text-gray-500">David Silva - Manchester City</div>
                    <div className="text-xs text-gray-400">1 day ago</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pending Issues */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Pending Issues</h3>
              <div className="space-y-3">
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <i className="fa-solid fa-exclamation-triangle text-red-500" />
                    <span className="text-sm font-medium text-red-800">Reddit API Down</span>
                  </div>
                  <div className="text-xs text-red-600 mt-1">Authentication failed - requires token refresh</div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <i className="fa-solid fa-clock text-yellow-500" />
                    <span className="text-sm font-medium text-yellow-800">Rate Limit Warning</span>
                  </div>
                  <div className="text-xs text-yellow-600 mt-1">Instagram API approaching daily limit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
