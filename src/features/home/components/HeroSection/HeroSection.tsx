import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="text-center py-16 bg-blue-500 text-white w-full">
      <h2 className="text-5xl font-extrabold mb-4">開始您的學習旅程！</h2>
      <p className="text-xl">找到您感興趣的課程，並開始學習。</p>
      <button className="mt-8 px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
        瀏覽課程
      </button>
    </section>
  );
}; 