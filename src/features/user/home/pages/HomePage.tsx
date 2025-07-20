import React from "react";
import { HeroSection } from "@/features/user/home/components/HeroSection";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold mb-8">歡迎來到我們的課程平台！</h1>
      <HeroSection />
      <p className="text-lg mt-8">在這裡探索各種精彩課程，提升您的技能。</p>
    </div>
  );
};

export default HomePage;
