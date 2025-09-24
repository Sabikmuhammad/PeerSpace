"use client";
import { Hash } from "lucide-react";

export default function MiddleFeed() {
  return (
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
  );
}