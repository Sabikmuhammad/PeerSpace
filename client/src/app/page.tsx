"use client";
import LeftSidebar from "../components/LeftSidebar";
import MiddleFeed from "../components/MiddleFeed";
import RightSidebar from "../components/RightSidebar";

export default function HomePage() {

  return (
    <div className="grid grid-cols-12 min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <LeftSidebar />
      <MiddleFeed />
      <RightSidebar />
    </div>
  );
}
