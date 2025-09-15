import Nav from "../../components/Nav";

export default function NotificationsPage() {
  return (
    <>
      <Nav />

      {/* Main Content */}
      <div className="flex h-screen">
        {/* Main Section */}
        <div className="flex-1 overflow-hidden">
          {/* Context Bar */}
          <div id="context-bar" className="bg-white border-b border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">12 Unread</span>
              </div>
              <div className="flex items-center space-x-3">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 flex items-center space-x-2">
                  <i className="fa-solid fa-check-double" />
                  <span>Mark All Read</span>
                </button>
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50">Export</button>
              </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                <option>Last 24h</option>
                <option>Last 7d</option>
                <option>Last 30d</option>
                <option>Custom</option>
              </select>

              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                <option>All Severity</option>
                <option>Critical</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>

              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                <option>All Types</option>
                <option>Threat Alerts</option>
                <option>Source Issues</option>
                <option>System Updates</option>
                <option>Scheduled Reports</option>
              </select>

              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                <option>All Status</option>
                <option>Unread</option>
                <option>Read</option>
                <option>Archived</option>
              </select>

              <input type="text" placeholder="Search notifications..." className="border border-gray-300 rounded-lg px-3 py-2 text-sm" />
            </div>
          </div>

          {/* Bulk Actions Toolbar */}
          <div id="bulk-actions" className="bg-blue-50 border-b border-blue-200 px-6 py-3 hidden">
            <div className="flex items-center justify-between">
              <span className="text-blue-800 font-medium">5 notifications selected</span>
              <div className="flex space-x-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">Mark as Read</button>
                <button className="bg-gray-500 text-white px-3 py-1 rounded text-sm hover:bg-gray-600">Archive</button>
                <button className="border border-gray-300 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-50">Export</button>
              </div>
            </div>
          </div>

          {/* Notifications List */}
          <div id="notifications-list" className="flex-1 overflow-auto p-4">
            {/* Critical Threat Alert */}
            <div className="notification-row notification-unread bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-4 cursor-pointer">
              <div className="flex items-start space-x-4">
                <input type="checkbox" className="rounded mt-1" />
                <div className="w-3 h-3 severity-critical rounded-full mt-1.5" />
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-1">
                    <i className="fa-solid fa-exclamation-triangle text-red-500" />
                    <h3 className="font-semibold text-gray-900">Violent threat flagged against Marcus Johnson</h3>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">Threat Alert</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Post content: "I'm going to find Marcus Johnson and make him pay..." - Confidence: 94%</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Marcus Johnson</span>
                    <span>Twitter</span>
                    <span>2 minutes ago</span>
                  </div>
                </div>
                <div className="notification-actions flex items-center space-x-2">
                  <button className="text-blue-600 hover:text-blue-800 text-sm">Mark Read</button>
                  <button className="text-gray-600 hover:text-gray-800 text-sm">Archive</button>
                  <i className="fa-solid fa-chevron-right text-gray-400" />
                </div>
              </div>
            </div>

            {/* High Priority Source Issue */}
            <div className="notification-row bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-4 cursor-pointer">
              <div className="flex items-start space-x-4">
                <input type="checkbox" className="rounded mt-1" />
                <div className="w-3 h-3 severity-high rounded-full mt-1.5" />
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-1">
                    <i className="fa-solid fa-plug text-orange-500" />
                    <h3 className="font-semibold text-gray-900">Instagram data source disconnected</h3>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">Source Issue</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">API rate limit exceeded. Data collection paused since 15:30. Requires immediate attention.</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span>Instagram API</span>
                    <span>15 minutes ago</span>
                  </div>
                </div>
                <div className="notification-actions flex items-center space-x-2">
                  <button className="text-blue-600 hover:text-blue-800 text-sm">Mark Read</button>
                  <button className="text-gray-600 hover:text-gray-800 text-sm">Archive</button>
                  <i className="fa-solid fa-chevron-right text-gray-400" />
                </div>
              </div>
            </div>

            {/* Medium Priority Pattern Alert */}
            <div className="notification-row notification-unread bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-4 cursor-pointer">
              <div className="flex items-start space-x-4">
                <input type="checkbox" className="rounded mt-1" />
                <div className="w-3 h-3 severity-medium rounded-full mt-1.5" />
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-1">
                    <i className="fa-solid fa-chart-line text-yellow-500" />
                    <h3 className="font-semibold text-gray-900">New abusive pattern detected</h3>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Pattern Alert</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Spike in identity attacks targeting Alex Rodriguez. 15 posts in last 2 hours.</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Alex Rodriguez</span>
                    <span>Multiple platforms</span>
                    <span>1 hour ago</span>
                  </div>
                </div>
                <div className="notification-actions flex items-center space-x-2">
                  <button className="text-blue-600 hover:text-blue-800 text-sm">Mark Read</button>
                  <button className="text-gray-600 hover:text-gray-800 text-sm">Archive</button>
                  <i className="fa-solid fa-chevron-right text-gray-400" />
                </div>
              </div>
            </div>

            {/* System Update */}
            <div className="notification-row bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-4 cursor-pointer">
              <div className="flex items-start space-x-4">
                <input type="checkbox" className="rounded mt-1" />
                <div className="w-3 h-3 severity-low rounded-full mt-1.5" />
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-1">
                    <i className="fa-solid fa-cog text-gray-500" />
                    <h3 className="font-semibold text-gray-900">AI model updated to version 2.1.4</h3>
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">System Update</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Improved threat detection accuracy. New model deployed successfully across all platforms.</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span>System</span>
                    <span>2 hours ago</span>
                  </div>
                </div>
                <div className="notification-actions flex items-center space-x-2">
                  <button className="text-blue-600 hover:text-blue-800 text-sm">Mark Read</button>
                  <button className="text-gray-600 hover:text-gray-800 text-sm">Archive</button>
                  <i className="fa-solid fa-chevron-right text-gray-400" />
                </div>
              </div>
            </div>

            {/* Scheduled Report */}
            <div className="notification-row border-b border-gray-100 p-4 cursor-pointer">
              <div className="flex items-start space-x-4">
                <input type="checkbox" className="rounded mt-1" />
                <div className="w-3 h-3 severity-low rounded-full mt-1.5" />
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-1">
                    <i className="fa-solid fa-file-alt text-gray-500" />
                    <h3 className="font-semibold text-gray-900">Weekly threat report generated</h3>
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">Report</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Weekly summary: 247 posts analyzed, 18 threats flagged, 5 escalated to authorities.</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span>Automated Report</span>
                    <span>3 hours ago</span>
                  </div>
                </div>
                <div className="notification-actions flex items-center space-x-2">
                  <button className="text-blue-600 hover:text-blue-800 text-sm">Download</button>
                  <button className="text-gray-600 hover:text-gray-800 text-sm">Archive</button>
                  <i className="fa-solid fa-chevron-right text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Summary */}
        <div id="sidebar-summary" className="w-80 bg-white border-l border-gray-200 p-6 overflow-auto">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Summary</h3>

            {/* Total Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">32</div>
                <div className="text-sm text-gray-600">Total Today</div>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-red-600">12</div>
                <div className="text-sm text-gray-600">Unread</div>
              </div>
            </div>

            {/* Severity Breakdown */}
            <div className="mb-6">
              <h4 className="font-medium text-gray-900 mb-3">By Severity</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 severity-critical rounded-full" />
                    <span className="text-sm">Critical</span>
                  </div>
                  <span className="text-sm font-medium">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 severity-high rounded-full" />
                    <span className="text-sm">High</span>
                  </div>
                  <span className="text-sm font-medium">8</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 severity-medium rounded-full" />
                    <span className="text-sm">Medium</span>
                  </div>
                  <span className="text-sm font-medium">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 severity-low rounded-full" />
                    <span className="text-sm">Low</span>
                  </div>
                  <span className="text-sm font-medium">9</span>
                </div>
              </div>
            </div>

            {/* Type Breakdown */}
            <div className="mb-6">
              <h4 className="font-medium text-gray-900 mb-3">By Type</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <i className="fa-solid fa-exclamation-triangle text-red-500 text-sm" />
                    <span className="text-sm">Threat Alerts</span>
                  </div>
                  <span className="text-sm font-medium">8</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <i className="fa-solid fa-plug text-orange-500 text-sm" />
                    <span className="text-sm">Source Issues</span>
                  </div>
                  <span className="text-sm font-medium">4</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <i className="fa-solid fa-cog text-gray-500 text-sm" />
                    <span className="text-sm">System Updates</span>
                  </div>
                  <span className="text-sm font-medium">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <i className="fa-solid fa-file-alt text-gray-500 text-sm" />
                    <span className="text-sm">Reports</span>
                  </div>
                  <span className="text-sm font-medium">8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
