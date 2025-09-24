"use client";

export default function RightSidebar() {
  return (
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
  );
}