import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import '../../style/sidebar.css';
import Logo from "../../assets/images/SidebarImg/logo.svg";
import LogoClose from "../../assets/images/AuthImg/logo.svg";
import Icon1 from "../../assets/images/SidebarImg/icon1.svg";
import Icon2 from "../../assets/images/SidebarImg/icon2.svg";
import Icon3 from "../../assets/images/SidebarImg/icon3.svg";
import Icon4 from "../../assets/images/SidebarImg/icon4.svg";
import Icon5 from "../../assets/images/SidebarImg/icon5.svg";
import Icon1Fill from "../../assets/images/SidebarImg/icon1_fill.svg";
import Icon2Fill from "../../assets/images/SidebarImg/icon2_fill.svg";
import Icon3Fill from "../../assets/images/SidebarImg/icon3_fill.svg";
import Icon4Fill from "../../assets/images/SidebarImg/icon4_fill.svg";
import Icon5Fill from "../../assets/images/SidebarImg/icon5_fill.svg";
import LogoutIcon from "../../assets/images/SidebarImg/logout.svg";
import LogoutIconFill from "../../assets/images/SidebarImg/logout_fill.svg";
import { ROUTES } from '../../constant';

const { Sider } = Layout;

interface SidebarProps {
  setSidebarOpen: any;
  sidebarOpen: boolean;
}

interface MenuItem {
  key: string;
  icon: string;
  iconFill: string;
  label: string;
  path: string;
  subMenuItems?: MenuItem[];
}

const menuItems: MenuItem[] = [
  { key: '1', icon: Icon1, iconFill: Icon1Fill, label: ROUTES.ACCOUNT_DETAILS.TITLE, path: ROUTES.ACCOUNT_DETAILS.PATH },
  { key: '2', icon: Icon2, iconFill: Icon2Fill, label: ROUTES.REPORTS.TITLE, path: ROUTES.REPORTS.PATH },
  { key: '3', icon: Icon3, iconFill: Icon3Fill, label: ROUTES.REDEMPTION_REQUEST.TITLE, path: ROUTES.REDEMPTION_REQUEST.PATH },
  { key: '4', icon: Icon4, iconFill: Icon4Fill, label: ROUTES.SETTINGS.TITLE, path: ROUTES.SETTINGS.PATH },
  { key: '5', icon: Icon5, iconFill: Icon5Fill, label: ROUTES.PRIVACY_LEGAL.LABEL, path: ROUTES.PRIVACY_LEGAL.PATH },
];

const Sidebar: React.FC<SidebarProps> = ({ setSidebarOpen, sidebarOpen }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const currentItem = menuItems.find(item => item.path === currentPath);
  const [selectedKey, setSelectedKey] = useState<any>(currentItem || "1");
  const [hoveredKey, setHoveredKey] = useState<any>(null);

  useEffect(() => {
    if (currentItem) {
      setSelectedKey(currentItem.key);
    } else if (currentPath === '/logout') {
      setSelectedKey('logout');
    }
  }, [location]);

  const handleMenuClick = (e: any) => {
    if (e.key !== 'logout') {
      setSelectedKey(e.key);
    } else {
      setSelectedKey('logout');
    }
  };

  const handleMouseEnter = (key: any) => {
    setHoveredKey(key);
  };

  const handleMouseLeave = () => {
    setHoveredKey(null);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSidebarOpen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setSidebarOpen]);

  return (
    <>
      <div className="layout" data-aos="fade-right"
            >
        <Sider
          collapsed={!sidebarOpen}
          onCollapse={() => { }}
          width={260}
          collapsedWidth={70}
          className="sider"
        >
          <div className="logo">
            <img src={sidebarOpen ? Logo : LogoClose} alt="Logo" />
          </div>

          <Menu mode="inline" selectedKeys={[selectedKey]} onClick={handleMenuClick} className="menu">
            {menuItems.map(item => (
              <Menu.Item
                key={item.key}
                icon={
                  <Link to={item.path}>
                    <img
                      src={selectedKey === item.key || hoveredKey === item.key ? item.iconFill : item.icon}
                      alt={`${item.label} icon`}
                    />
                  </Link>
                }
                className={` ${sidebarOpen ? '' : 'close_menu'}`}
                onMouseEnter={() => handleMouseEnter(item.key)}
                onMouseLeave={handleMouseLeave}
                
              >
                <Link to={item.path}>
                  {item.label}
                </Link>
              </Menu.Item>
            ))}
            <Menu.Item
              key="logout"
              icon={
                <Link to={ROUTES.SIGN_IN.PATH}>
                  <img
                    src={selectedKey === 'logout' || hoveredKey === 'logout' ? LogoutIconFill : LogoutIcon}
                    alt="Logout icon"
                  />
                </Link>

              }
              className={`logout-item ${sidebarOpen ? '' : 'close_menu'}`}
              onMouseEnter={() => handleMouseEnter('logout')}
              onMouseLeave={handleMouseLeave}
              onClick={handleMenuClick}
            >
              <Link to={ROUTES.SIGN_IN.PATH}>
                Logout
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
      </div>
    </>
  );
};

export default Sidebar;
