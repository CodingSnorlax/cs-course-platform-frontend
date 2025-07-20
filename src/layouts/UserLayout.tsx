import React from 'react';
import { Outlet, Link } from 'react-router-dom'; // 導入 Link
import Logo from '@/components/common/Logo'; // 導入 Logo 元件
import { Button } from '@/components/ui/button'; // 導入 shadcn/ui 的 Button 元件

const UserLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <header className="w-full h-[72px] bg-orange-100 border-b border-slate-200 flex justify-center">
        <div className="w-full max-w-[1920px] py-[16px] px-[320px] flex justify-between  items-center gap-6">
          <Logo />
          <nav className="space-x-4">
            <Button asChild variant="ghost">
              <Link to="/login">登入</Link>
            </Button>
            <Button asChild variant="default">
              <Link to="/register">註冊</Link>
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-grow p-4">
        <Outlet /> {/* 這裡會渲染子路由的內容 */}
      </main>
      <footer className="flex justify-between py-8 md:py-12 px-4 md:px-20 lg:px-40 xl:px-80 gap-6 md:gap-10 xl:gap-12 w-full max-w-[1920px] min-h-[180px] md:min-h-[220px] xl:min-h-[253px] mx-auto bg-slate-50 border-b border-slate-300"> {/* 響應式 footer */}
        <Logo className="h-8 w-auto" />
        <p className="text-center text-gray-600 text-sm">© 2025 程式喵學院 All rights reserved.</p>
      </footer>
    </div>
  );
};

export default UserLayout; 