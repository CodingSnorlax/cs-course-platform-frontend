import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout: React.FC = () => {
  return (
    <div style={{ display: 'flex' }}>
      <aside style={{ width: '200px', background: '#333', color: 'white', padding: '20px' }}>
        <h2>後台導航</h2>
        {/* 在這裡可以放置後台的側邊欄導航，例如：<nav><Link to="/admin">儀表板</Link></nav> */}
      </aside>
      <main style={{ flex: 1, padding: '20px' }}>
        <Outlet /> {/* 這裡會渲染子路由的內容 */}
      </main>
    </div>
  );
};

export default AdminLayout; 