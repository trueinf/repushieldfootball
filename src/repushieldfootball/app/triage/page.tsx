import Script from "next/script";
import Nav from "../../components/Nav";
import SeverityChart from "../../components/SeverityChart";

export default function TriagePage() {
  return (
    <>
      <Nav />
      <Script src="https://code.highcharts.com/highcharts.js" strategy="afterInteractive" />

      {/* Main Content */}
      <div className="flex h-screen">
        {/* Main Section */}
        <div className="flex-1 overflow-hidden">
          {/* Context Bar */}
          <div id="context-bar" className="bg-white border-b border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <h1 className="text-2xl font-bold text-gray-900">Triage Queue</h1>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">24 Critical</span>
              </div>
              <div className="flex items-center space-x-3">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 flex items-center space-x-2">
                  <i className="fa-solid fa-sync-alt" />
                  <span>Auto-refresh</span>
                </button>
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50">Export All</button>
              </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
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
                <option>All Status</option>
                <option>Open</option>
                <option>Escalated</option>
                <option>Resolved</option>
                <option>Dismissed</option>
              </select>

              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                <option>All Platforms</option>
                <option>Twitter</option>
                <option>Instagram</option>
                <option>Facebook</option>
                <option>TikTok</option>
                <option>YouTube</option>
              </select>

              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                <option>All Players</option>
                <option>Marcus Johnson</option>
                <option>Alex Rodriguez</option>
                <option>David Smith</option>
              </select>

              <input type="text" placeholder="Search posts..." className="border border-gray-300 rounded-lg px-3 py-2 text-sm" />
            </div>
          </div>

          {/* Bulk Actions Toolbar */}
          <div id="bulk-actions" className="bg-blue-50 border-b border-blue-200 px-6 py-3 hidden">
            <div className="flex items-center justify-between">
              <span className="text-blue-800 font-medium">3 items selected</span>
              <div className="flex space-x-2">
                <button className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600">Escalate Selected</button>
                <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">Change Status</button>
                <button className="bg-gray-500 text-white px-3 py-1 rounded text-sm hover:bg-gray-600">Assign</button>
                <button className="border border-gray-300 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-50">Export</button>
              </div>
            </div>
          </div>

          {/* Queue Cards styled like Feed posts */}
          <div id="queue-table" className="flex-1 overflow-auto p-4 space-y-6">
            {/* Card 1 */}
            <div className="post-card bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-start space-x-4">
                <input type="checkbox" className="mt-2 rounded border-gray-300" />
                <div className="flex-1">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <i className="fa-brands fa-twitter text-blue-500 text-lg" />
                      <span className="font-medium text-gray-900">@hater123</span>
                      <span className="text-gray-500 text-sm">2m ago</span>
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-bold">Critical</span>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <i className="fa-solid fa-ellipsis" />
                    </button>
                  </div>
                  {/* Body */}
                  <div className="mb-4">
                    <p className="text-gray-900 leading-relaxed">
                      I'm going to find Marcus Johnson and make him pay for ruining our season...
                    </p>
                  </div>
                  {/* Chips */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Marcus Johnson</span>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">Threat</span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Confidence: 94%</span>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Open</span>
                  </div>
                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4">
                      <button className="text-gray-500 hover:text-blue-600 text-sm flex items-center space-x-1">
                        <i className="fa-solid fa-external-link" />
                        <span>Open</span>
                      </button>
                      <button className="text-gray-500 hover:text-yellow-600 text-sm flex items-center space-x-1">
                        <i className="fa-solid fa-bookmark" />
                        <span>Save</span>
                      </button>
                      <button className="text-gray-500 hover:text-red-600 text-sm flex items-center space-x-1">
                        <i className="fa-solid fa-flag" />
                        <span>Escalate</span>
                      </button>
                      <button className="text-gray-500 hover:text-gray-700 text-sm flex items-center space-x-1">
                        <i className="fa-solid fa-eye-slash" />
                        <span>Dismiss</span>
                      </button>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 text-sm">
                      <i className="fa-solid fa-chevron-down" />
                      <span className="ml-1">Details</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="post-card bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-start space-x-4">
                <input type="checkbox" className="mt-2 rounded border-gray-300" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <i className="fa-brands fa-instagram text-pink-500 text-lg" />
                      <span className="font-medium text-gray-900">@angry_fan</span>
                      <span className="text-gray-500 text-sm">15m ago</span>
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-bold">High</span>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <i className="fa-solid fa-ellipsis" />
                    </button>
                  </div>
                  <div className="mb-4">
                    <p className="text-gray-900 leading-relaxed">
                      These black players don't belong in our team. Send them back where they came from
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Alex Rodriguez</span>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">Identity Attack</span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Confidence: 89%</span>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Open</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4">
                      <button className="text-gray-500 hover:text-blue-600 text-sm flex items-center space-x-1">
                        <i className="fa-solid fa-external-link" />
                        <span>Open</span>
                      </button>
                      <button className="text-gray-500 hover:text-yellow-600 text-sm flex items-center space-x-1">
                        <i className="fa-solid fa-bookmark" />
                        <span>Save</span>
                      </button>
                      <button className="text-gray-500 hover:text-gray-700 text-sm flex items-center space-x-1">
                        <i className="fa-solid fa-eye-slash" />
                        <span>Dismiss</span>
                      </button>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 text-sm">
                      <i className="fa-solid fa-chevron-down" />
                      <span className="ml-1">Details</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="post-card bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-start space-x-4">
                <input type="checkbox" className="mt-2 rounded border-gray-300" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <i className="fa-brands fa-facebook text-blue-600 text-lg" />
                      <span className="font-medium text-gray-900">@critic_fan</span>
                      <span className="text-gray-500 text-sm">1h ago</span>
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-bold">Medium</span>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <i className="fa-solid fa-ellipsis" />
                    </button>
                  </div>
                  <div className="mb-4">
                    <p className="text-gray-900 leading-relaxed">
                      Marcus is absolutely useless! Worst player I've ever seen. Should be kicked off the team
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Marcus Johnson</span>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">Personal Attack</span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Confidence: 76%</span>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">Escalated</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4">
                      <button className="text-gray-500 hover:text-blue-600 text-sm flex items-center space-x-1">
                        <i className="fa-solid fa-external-link" />
                        <span>Open</span>
                      </button>
                      <button className="text-gray-500 hover:text-yellow-600 text-sm flex items-center space-x-1">
                        <i className="fa-solid fa-bookmark" />
                        <span>Save</span>
                      </button>
                      <button className="text-gray-500 hover:text-gray-700 text-sm flex items-center space-x-1">
                        <i className="fa-solid fa-eye-slash" />
                        <span>Dismiss</span>
                      </button>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 text-sm">
                      <i className="fa-solid fa-chevron-down" />
                      <span className="ml-1">Details</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="post-card bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-start space-x-4">
                <input type="checkbox" className="mt-2 rounded border-gray-300" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <i className="fa-brands fa-tiktok text-black text-lg" />
                      <span className="font-medium text-gray-900">@toxic_user</span>
                      <span className="text-gray-500 text-sm">2h ago</span>
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-bold">Critical</span>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <i className="fa-solid fa-ellipsis" />
                    </button>
                  </div>
                  <div className="mb-4">
                    <p className="text-gray-900 leading-relaxed">
                      Someone should teach David Smith a lesson. I know where he lives...
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">David Smith</span>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">Threat</span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Confidence: 91%</span>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Open</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4">
                      <button className="text-gray-500 hover:text-blue-600 text-sm flex items-center space-x-1">
                        <i className="fa-solid fa-external-link" />
                        <span>Open</span>
                      </button>
                      <button className="text-gray-500 hover:text-yellow-600 text-sm flex items-center space-x-1">
                        <i className="fa-solid fa-bookmark" />
                        <span>Save</span>
                      </button>
                      <button className="text-gray-500 hover:text-red-600 text-sm flex items-center space-x-1">
                        <i className="fa-solid fa-flag" />
                        <span>Escalate</span>
                      </button>
                      <button className="text-gray-500 hover:text-gray-700 text-sm flex items-center space-x-1">
                        <i className="fa-solid fa-eye-slash" />
                        <span>Dismiss</span>
                      </button>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 text-sm">
                      <i className="fa-solid fa-chevron-down" />
                      <span className="ml-1">Details</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Summary */}
        <div id="sidebar-summary" className="w-80 bg-white border-l border-gray-200 p-6 overflow-auto">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Queue Statistics</h3>

            {/* Total Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-red-600">47</div>
                <div className="text-sm text-gray-600">Open Posts</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">24</div>
                <div className="text-sm text-gray-600">Critical</div>
              </div>
            </div>

            {/* Severity Breakdown */}
            <div className="mb-6">
              <h4 className="font-medium text-gray-900 mb-3">By Severity</h4>
              <SeverityChart />
            </div>

            {/* Platform Breakdown */}
            <div className="mb-6">
              <h4 className="font-medium text-gray-900 mb-3">By Platform</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <i className="fa-brands fa-twitter text-blue-500" />
                    <span className="text-sm">Twitter</span>
                  </div>
                  <span className="text-sm font-medium">18</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <i className="fa-brands fa-instagram text-pink-500" />
                    <span className="text-sm">Instagram</span>
                  </div>
                  <span className="text-sm font-medium">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <i className="fa-brands fa-facebook text-blue-600" />
                    <span className="text-sm">Facebook</span>
                  </div>
                  <span className="text-sm font-medium">10</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <i className="fa-brands fa-tiktok text-black" />
                    <span className="text-sm">TikTok</span>
                  </div>
                  <span className="text-sm font-medium">7</span>
                </div>
              </div>
            </div>

            {/* Top Players */}
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Most Flagged Players</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Marcus Johnson</span>
                  <span className="text-sm font-medium text-red-600">15</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Alex Rodriguez</span>
                  <span className="text-sm font-medium text-red-600">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">David Smith</span>
                  <span className="text-sm font-medium text-red-600">9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
