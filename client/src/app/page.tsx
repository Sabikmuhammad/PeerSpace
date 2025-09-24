"use client";
import { Home, Search, Bell, Mail, Bookmark, User, Hash } from "lucide-react";

export default function HomePage() {

  return (
    <div className="grid grid-cols-12 min-h-screen bg-white dark:bg-black text-black dark:text-white">
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

      <div className="col-span-7 border-r border-gray-200 dark:border-gray-800">
        <div className="border-b border-gray-200 dark:border-gray-800 p-4">
          <h2 className="text-xl font-bold">Home</h2>
        </div>
        <div className="p-4 border-b border-gray-200 dark:border-gray-800">
          <textarea 
            placeholder="What's happening in your class?"
            className="w-full bg-transparent text-xl placeholder-gray-400 dark:placeholder-gray-500 resize-none outline-none"
            rows={3}
          />
          <div className="flex justify-between items-center mt-4">
            <div className="flex space-x-4 text-blue-500">
              <Hash size={20} className="cursor-pointer" />
            </div>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-600">
              Post
            </button>
          </div>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-950">
              <div className="flex space-x-3">
                <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold">Student {i}</span>
                    <span className="text-gray-500">@student{i}</span>
                    <span className="text-gray-500">·</span>
                    <span className="text-gray-500">2h</span>
                  </div>
                  <p className="mt-1">Just finished the CS assignment! Anyone want to discuss the algorithms we used?</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-3 p-4">
        <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-4 mb-4">
          <h3 className="text-xl font-bold mb-3">What's happening</h3>
          <div className="space-y-3">
            {[
              { category: "CS Department", topic: "Final Exams", posts: "1,234 posts" },
              { category: "Campus Life", topic: "Spring Break", posts: "856 posts" },
              { category: "Study Groups", topic: "Math Tutoring", posts: "432 posts" }
            ].map((trend, i) => (
              <div key={i} className="hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded cursor-pointer">
                <p className="text-gray-500 text-sm">{trend.category}</p>
                <p className="font-bold">{trend.topic}</p>
                <p className="text-gray-500 text-sm">{trend.posts}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-4">
          <h3 className="text-xl font-bold mb-3">Who to follow</h3>
          <div className="space-y-3">
            {["Study Buddy", "CS Club", "Campus Events"].map((name, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                  <div>
                    <p className="font-bold">{name}</p>
                    <p className="text-gray-500 text-sm">@{name.toLowerCase().replace(" ", "")}</p>
                  </div>
                </div>
                <button className="bg-black dark:bg-white text-white dark:text-black px-4 py-1 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-200">
                  Follow
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
