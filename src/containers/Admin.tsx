import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Layout } from 'antd';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import '../style/sidebar.css';
import { ROUTES } from '../constant';

const Admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const [currentTitle, setCurrentTitle] = useState('Account');

  useEffect(() => {
    const currentRoute = Object.values(ROUTES).find(route => route.PATH === location.pathname);
    if (currentRoute) {
      setCurrentTitle(currentRoute.TITLE);
    }
  }, [location]);

  return (
    <Layout className={`admin-layout ${sidebarOpen ? 'layout_open' : 'layout_closed'}`}>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Layout className="site_layout">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} title={currentTitle} />
        <div className="site_content">
          <Outlet />
        </div>
      </Layout>
    </Layout>
  );
};

export default Admin;