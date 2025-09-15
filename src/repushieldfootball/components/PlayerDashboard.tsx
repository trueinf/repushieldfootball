"use client";

import Script from "next/script";
import PlayerCharts from "./PlayerCharts";

export type Player = {
  id: string;
  name: string;
  avatar: string;
  club: string;
  country: string;
  flagDataUrl: string;
  position: string;
  summary: string; // e.g., "142 posts in last 7 days..."
};

export default function PlayerDashboard({ player, onBack }: { player: Player; onBack?: () => void }) {
  return (
    <>
      {/* Highcharts core + modules for charts on this view */}
      <Script src="https://code.highcharts.com/highcharts.js" strategy="afterInteractive" />
      <Script src="https://code.highcharts.com/highcharts-more.js" strategy="afterInteractive" />
      <Script src="https://code.highcharts.com/modules/heatmap.js" strategy="afterInteractive" />
      <PlayerCharts />

      <div id="player-dashboard" className="max-w-7xl mx-auto px-6 py-6">
        {onBack && (
          <button
            onClick={onBack}
            className="mb-4 inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
          >
            <i className="fa-solid fa-arrow-left mr-2" /> Back to Players
          </button>
        )}

        {/* Header Section */}
        <div id="player-header" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-start space-x-6">
            <div className="relative">
              <img src={player.avatar} alt={player.name} className="w-24 h-24 rounded-full border-4 border-blue-100" />
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                <i className="fa-solid fa-check text-white text-xs" />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-2xl font-bold text-gray-900">{player.name}</h1>
                <div className="flex space-x-3">
                  <i className="fa-brands fa-twitter text-blue-500 text-lg cursor-pointer hover:text-blue-600" />
                  <i className="fa-brands fa-instagram text-pink-500 text-lg cursor-pointer hover:text-pink-600" />
                  <i className="fa-brands fa-facebook text-blue-600 text-lg cursor-pointer hover:text-blue-700" />
                </div>
              </div>

              <div className="flex items-center space-x-6 mb-4">
                <div className="flex items-center space-x-2">
                  <i className="fa-solid fa-building text-gray-400" />
                  <span className="text-gray-700 font-medium">{player.club}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={player.flagDataUrl} alt={player.country} className="w-5 h-3" />
                  <span className="text-gray-700">{player.country}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fa-solid fa-futbol text-gray-400" />
                  <span className="text-gray-700">{player.position}</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                <p className="text-gray-800 font-medium">{player.summary}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Widgets Grid */}
        <div id="widgets-grid" className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
          {/* Sentiment Trend Chart */}
          <div className="card-hover bg-white rounded-xl shadow-sm border border-gray-200 p-6 col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Sentiment Trend (Last 7 Days)</h3>
            <div id="sentiment-trend-chart" className="h-64" />
          </div>

          {/* Sentiment Donut */}
          <div className="card-hover bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Sentiment Overview</h3>
            <div id="sentiment-donut-chart" className="h-64" />
          </div>

          {/* Abusive Posts Timeline */}
          <div className="card-hover bg-white rounded-xl shadow-sm border border-gray-200 p-6 col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Abusive Posts Timeline</h3>
            <div id="abusive-timeline-chart" className="h-64" />
          </div>

          {/* Platform Split */}
          <div className="card-hover bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform Distribution</h3>
            <div id="platform-chart" className="h-64" />
          </div>

          {/* Abuse Types Split */}
          <div className="card-hover bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Abuse Types</h3>
            <div id="abuse-types-chart" className="h-64" />
          </div>

          {/* Geo Heatmap */}
          <div className="card-hover bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Geographic Distribution</h3>
            <div id="geo-heatmap-chart" className="h-64" />
          </div>

          {/* Post Type Split */}
          <div className="card-hover bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Post Types</h3>
            <div id="post-types-chart" className="h-64" />
          </div>
        </div>

        {/* Top Posts Table */}
        <div id="top-posts-table" className="card-hover bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Recent Posts</h3>
            <div className="flex space-x-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600">Export</button>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50">Filter</button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Timestamp</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Platform</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Content</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Sentiment</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Abuse Flag</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-600">2 hours ago</td>
                  <td className="py-3 px-4">
                    <i className="fa-brands fa-twitter text-blue-500" />
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-900 max-w-xs truncate">
                    {player.name} is absolutely terrible! How is he even on the team?
                  </td>
                  <td className="py-3 px-4">
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">Negative</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">Personal Attack</span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 text-sm">View</button>
                      <button className="text-red-600 hover:text-red-800 text-sm">Escalate</button>
                      <button className="text-gray-600 hover:text-gray-800 text-sm">Dismiss</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

