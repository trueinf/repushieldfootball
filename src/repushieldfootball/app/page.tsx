import Script from 'next/script'
import Link from 'next/link'
import SentimentChart from '../components/SentimentChart'
import Nav from '../components/Nav'

export default function Page() {
  return (
    <>
      {/* Highcharts via CDN */}
      <Script src="https://code.highcharts.com/highcharts.js" strategy="afterInteractive" />

      <Nav />

      {/* Main Dashboard Content */}
      <main id="dashboard-main" className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div id="page-header" className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
          <p className="text-gray-600">Monitor reputation threats and manage player safety across all platforms</p>
        </div>

        {/* Quick Filters Bar */}
        <div id="filters-bar" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-calendar text-gray-400" />
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-face-smile text-gray-400" />
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>All Sentiment</option>
                <option>Positive</option>
                <option>Neutral</option>
                <option>Negative</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-share-nodes text-gray-400" />
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>All Platforms</option>
                <option>Twitter</option>
                <option>Instagram</option>
                <option>Facebook</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-globe text-gray-400" />
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>All Countries</option>
                <option>United Kingdom</option>
                <option>United States</option>
                <option>Germany</option>
              </select>
            </div>
          </div>
        </div>

        {/* Global KPI Tiles */}
        <div id="kpi-tiles" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 card-hover">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-chart-line text-blue-600 text-xl" />
              </div>
              <span className="text-sm text-green-600 font-medium">+12%</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">24,592</h3>
            <p className="text-gray-600 text-sm">Total Posts Ingested</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 card-hover">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-exclamation-triangle text-red-600 text-xl" />
              </div>
              <span className="text-sm text-red-600 font-medium">+3%</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">8.4%</h3>
            <p className="text-gray-600 text-sm">Abusive Content</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 card-hover">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-flag text-orange-600 text-xl" />
              </div>
              <span className="text-sm text-orange-600 font-medium">+7</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">127</h3>
            <p className="text-gray-600 text-sm">Violent Threats Flagged</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 card-hover">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <i className="fa-brands fa-twitter text-purple-600 text-xl" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Top Platforms</h3>
            <div className="space-y-1">
              <div className="text-sm text-gray-600">1. Twitter (45%)</div>
              <div className="text-sm text-gray-600">2. Instagram (32%)</div>
              <div className="text-sm text-gray-600">3. Facebook (23%)</div>
            </div>
          </div>
        </div>

        {/* Trends and Hotlist Row */}
        <div id="trends-hotlist" className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Sentiment Trends */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6 card-hover">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Sentiment Trends</h3>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span className="w-3 h-3 bg-green-500 rounded-full" />
                <span>Positive</span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full ml-4" />
                <span>Neutral</span>
                <span className="w-3 h-3 bg-red-500 rounded-full ml-4" />
                <span>Negative</span>
              </div>
            </div>
            <div className="h-64">
              <SentimentChart />
            </div>
          </div>

          {/* Hotlist Widget */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 card-hover">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">High-Severity Alerts</h3>
              <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">5 Pending</span>
            </div>

            <div id="hotlist-items" className="space-y-4">
              <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">Death threat detected</p>
                  <p className="text-xs text-gray-600 truncate">Player: Marcus Johnson</p>
                  <p className="text-xs text-gray-500">2 mins ago</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 bg-orange-50 rounded-lg">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">Harassment campaign</p>
                  <p className="text-xs text-gray-600 truncate">Player: Sarah Williams</p>
                  <p className="text-xs text-gray-500">15 mins ago</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">Physical threat</p>
                  <p className="text-xs text-gray-600 truncate">Player: Alex Thompson</p>
                  <p className="text-xs text-gray-500">1 hour ago</p>
                </div>
              </div>
            </div>

            <Link
              href="/triage"
              className="w-full mt-4 inline-flex justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              View All Alerts
            </Link>
          </div>
        </div>

        {/* Navigation Cards */}
        <div id="navigation-cards" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white card-hover cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-users text-white text-xl" />
              </div>
              <i className="fa-solid fa-arrow-right text-white/80" />
            </div>
            <h3 className="text-lg font-semibold mb-2">View All Players</h3>
            <p className="text-blue-100 text-sm">Manage player profiles and reputation data</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white card-hover cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-building text-white text-xl" />
              </div>
              <i className="fa-solid fa-arrow-right text-white/80" />
            </div>
            <h3 className="text-lg font-semibold mb-2">View All Clubs</h3>
            <p className="text-green-100 text-sm">Access club-wide reputation insights</p>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white card-hover cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-clipboard-list text-white text-xl" />
              </div>
              <i className="fa-solid fa-arrow-right text-white/80" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Triage Queue</h3>
            <p className="text-orange-100 text-sm">Review and prioritize safety incidents</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white card-hover cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-cog text-white text-xl" />
              </div>
              <i className="fa-solid fa-arrow-right text-white/80" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Admin Console</h3>
            <p className="text-purple-100 text-sm">System configuration and user management</p>
          </div>
        </div>
      </main>
    </>
  )
}
