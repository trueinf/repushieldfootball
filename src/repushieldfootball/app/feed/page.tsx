import Nav from "../../components/Nav";

export default function FeedPage() {
  return (
    <>
      <Nav />

      {/* Global Filters Bar */}
      <div id="filters-bar" className="bg-white shadow-sm border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-calendar text-gray-400" />
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Last 24 hours</option>
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Custom Range</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-user text-gray-400" />
              <input
                type="text"
                placeholder="Search players..."
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-48 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-building text-gray-400" />
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>All Clubs</option>
                <option>Manchester United</option>
                <option>Liverpool FC</option>
                <option>Arsenal FC</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-share-nodes text-gray-400" />
              <div className="flex space-x-2">
                <label className="filter-chip flex items-center space-x-1 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs cursor-pointer">
                  <input type="checkbox" className="hidden" defaultChecked />
                  <i className="fa-brands fa-twitter" />
                  <span>Twitter</span>
                </label>
                <label className="filter-chip flex items-center space-x-1 bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs cursor-pointer">
                  <input type="checkbox" className="hidden" />
                  <i className="fa-brands fa-instagram" />
                  <span>Instagram</span>
                </label>
                <label className="filter-chip flex items-center space-x-1 bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs cursor-pointer">
                  <input type="checkbox" className="hidden" />
                  <i className="fa-brands fa-facebook" />
                  <span>Facebook</span>
                </label>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-face-smile text-gray-400" />
              <div className="flex space-x-2">
                <span className="filter-chip bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs cursor-pointer">Positive</span>
                <span className="filter-chip bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs cursor-pointer">Neutral</span>
                <span className="filter-chip bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs cursor-pointer">Negative</span>
              </div>
            </div>

            <button className="text-gray-500 text-sm hover:text-gray-700 flex items-center space-x-1">
              <i className="fa-solid fa-rotate-left" />
              <span>Reset Filters</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div id="main-content" className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex gap-6">
          {/* Feed Stream */}
          <div id="feed-stream" className="flex-1">
            {/* Bulk Actions Toolbar (hidden by default) */}
            <div id="bulk-actions" className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6 hidden">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">3 posts selected</span>
                <div className="flex space-x-2">
                  <button className="bg-orange-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-orange-600">Escalate All</button>
                  <button className="bg-blue-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-600">Export</button>
                  <button className="bg-gray-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-gray-600">Tag</button>
                </div>
              </div>
            </div>

            {/* Post Card 1 */}
            <div className="post-card bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
              <div className="flex items-start space-x-4">
                <input type="checkbox" className="mt-2 rounded border-gray-300" />
                <div className="flex-1">
                  {/* Source Metadata */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <i className="fa-brands fa-twitter text-blue-500 text-lg" />
                      <span className="font-medium text-gray-900">@football_fan_2024</span>
                      <span className="text-gray-500 text-sm">2 hours ago</span>
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAyMCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjE0IiBmaWxsPSIjRkZGRkZGIi8+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSI0LjY2NjY3IiBmaWxsPSIjRUQ0QzVDIi8+CjxyZWN0IHk9IjkuMzMzMzQiIHdpZHRoPSIyMCIgaGVpZ2h0PSI0LjY2NjY3IiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPgo="
                        alt="Germany"
                        className="w-5 h-3"
                      />
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <i className="fa-solid fa-ellipsis" />
                    </button>
                  </div>

                  {/* Content Body */}
                  <div className="mb-4">
                    <p className="text-gray-900 leading-relaxed">
                      Marcus Johnson is absolutely terrible! How is he even on the team? #ManUtd needs to get rid of him
                      immediately. Waste of space and money!
                    </p>
                  </div>

                  {/* AI Metadata Strip */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">Negative</span>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">Personal Attack</span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Confidence: 87%</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Marcus Johnson</span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">#ManUtd</span>
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

            {/* Post Card 2 */}
            <div className="post-card bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
              <div className="flex items-start space-x-4">
                <input type="checkbox" className="mt-2 rounded border-gray-300" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <i className="fa-brands fa-instagram text-pink-500 text-lg" />
                      <span className="font-medium text-gray-900">@soccerlover_uk</span>
                      <span className="text-gray-500 text-sm">4 hours ago</span>
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAyMCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjE0IiBmaWxsPSIjMDEyMTY5Ii8+CjxyZWN0IHk9IjQuNjY2NjciIHdpZHRoPSIyMCIgaGVpZ2h0PSI0LjY2NjY3IiBmaWxsPSIjRkZGRkZGIi8+CjxyZWN0IHk9IjkuMzMzMzQiIHdpZHRoPSIyMCIgaGVpZ2h0PSI0LjY2NjY3IiBmaWxsPSIjRUQ0QzVDIi8+Cjwvc3ZnPgo="
                        alt="France"
                        className="w-5 h-3"
                      />
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <i className="fa-solid fa-ellipsis" />
                    </button>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-900 leading-relaxed">
                      Amazing performance by Sarah Williams today! She's such an inspiration to young girls everywhere. Keep
                      shining! ⭐️🔥
                    </p>
                    <div className="mt-3">
                      <img
                        className="w-full h-48 rounded-lg object-cover"
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/f4b92067ad-8562723f856bd0bd29da.png"
                        alt="female football player celebrating goal on field"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">Positive</span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Confidence: 94%</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Sarah Williams</span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">inspiration</span>
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

            {/* Post Card 3 (High Severity) */}
            <div className="post-card bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6 border-l-4 border-l-red-500 threat-animated">
              <div className="flex items-start space-x-4">
                <input type="checkbox" className="mt-2 rounded border-gray-300" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <i className="fa-brands fa-twitter text-blue-500 text-lg" />
                      <span className="font-medium text-gray-900">@angryfan_123</span>
                      <span className="text-gray-500 text-sm">6 hours ago</span>
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAyMCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjE0IiBmaWxsPSIjRkZGRkZGIi8+CjxyZWN0IHk9IjQuNjY2NjciIHdpZHRoPSIyMCIgaGVpZ2h0PSI0LjY2NjY3IiBmaWxsPSIjRUQ0QzVDIi8+Cjwvc3ZnPgo="
                        alt="England"
                        className="w-5 h-3"
                      />
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-bold">HIGH SEVERITY</span>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <i className="fa-solid fa-ellipsis" />
                    </button>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-900 leading-relaxed">
                      Enough is enough — next time he plays like that, someone should make sure he regrets stepping on the
                      pitch. This is getting dangerous.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">Negative</span>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">Threat</span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Confidence: 92%</span>
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
      </div>
    </>
  );
}
