"use client";
import { Home, Search, Bell, Mail, Bookmark, User } from "lucide-react";

export default function LeftSidebar() {
  return (
    <div className="col-span-2 border-r border-gray-200 dark:border-gray-800 p-4">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">PeerSpace</h1>
        </div>
        <nav className="space-y-2">
          {[
            { icon: Home, label: "Home" },
            { icon: Search, label: "Explore" },
            { icon: Bell, label: "Notifications" },
            { icon: Mail, label: "Messages" },
            { icon: Bookmark, label: "Bookmarks" },
            { icon: User, label: "Profile" }
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center space-x-3 p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 cursor-pointer">
              <Icon size={24} />
              <span className="text-xl">{label}</span>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}