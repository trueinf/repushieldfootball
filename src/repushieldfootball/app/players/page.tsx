"use client";

import { useState } from "react";
import Nav from "../../components/Nav";
import PlayerDashboard, { type Player } from "../../components/PlayerDashboard";

const englandFlag =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAyMCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjE0IiBmaWxsPSIjRkZGRkZGIi8+CjxyZWN0IHk9IjQuNjY2NjciIHdpZHRoPSIyMCIgaGVpZ2h0PSI0LjY2NjY3IiBmaWxsPSIjRUQ0QzVDIi8+Cjwvc3ZnPgo=";
const franceFlag =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAyMCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjE0IiBmaWxsPSIjMDEyMTY5Ii8+CjxyZWN0IHk9IjQuNjY2NjciIHdpZHRoPSIyMCIgaGVpZ2h0PSI0LjY2NjY3IiBmaWxsPSIjRkZGRkZGIi8+CjxyZWN0IHk9IjkuMzMzMzQiIHdpZHRoPSIyMCIgaGVpZ2h0PSI0LjY2NjY3IiBmaWxsPSIjRUQ0QzVDIi8+Cjwvc3ZnPgo=";

const PLAYERS: Player[] = [
  {
    id: "marcus-johnson",
    name: "Marcus Johnson",
    avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
    club: "Manchester United",
    country: "England",
    flagDataUrl: englandFlag,
    position: "Forward",
    summary: "142 posts in last 7 days, 23% abusive, 3 violent threats flagged",
  },
  {
    id: "sarah-williams",
    name: "Sarah Williams",
    avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
    club: "Arsenal FC",
    country: "England",
    flagDataUrl: englandFlag,
    position: "Midfielder",
    summary: "96 posts in last 7 days, 8% abusive, 0 threats flagged",
  },
  {
    id: "alex-rodriguez",
    name: "Alex Rodriguez",
    avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
    club: "Paris FC",
    country: "France",
    flagDataUrl: franceFlag,
    position: "Defender",
    summary: "121 posts in last 7 days, 18% abusive, 1 threat flagged",
  },
];

export default function PlayersPage() {
  const [selected, setSelected] = useState<Player | null>(null);

  return (
    <>
      <Nav />
      {!selected ? (
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Players</h1>
            <p className="text-gray-600">Select a player to view the dashboard</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PLAYERS.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelected(p)}
                className="player-card bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-left"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img src={p.avatar} alt={p.name} className="w-14 h-14 rounded-full border-2 border-gray-200" />
                  <div>
                    <div className="text-lg font-semibold text-gray-900">{p.name}</div>
                    <div className="text-sm text-gray-600">{p.club}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-700 mb-3">
                  <div className="flex items-center space-x-2">
                    <img src={p.flagDataUrl} alt={p.country} className="w-5 h-3" />
                    <span>{p.country}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="fa-solid fa-futbol text-gray-400" />
                    <span>{p.position}</span>
                  </div>
                </div>
                <div className="text-sm text-gray-700">{p.summary}</div>
                <div className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View Dashboard <i className="fa-solid fa-arrow-right ml-2" />
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <PlayerDashboard player={selected} onBack={() => setSelected(null)} />
      )}
    </>
  );
}

