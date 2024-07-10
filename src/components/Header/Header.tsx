import React from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import User from "../../assets/images/HeaderImg/user.png";
import '../../style/header.css';

interface HeaderProps {
  setSidebarOpen: any;
  sidebarOpen: boolean;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ setSidebarOpen, sidebarOpen, title }) => {
  return (
    <>
      <div className="header">
        <div onClick={() => setSidebarOpen(!sidebarOpen)} className="header_button" data-aos="fade-right">
          {sidebarOpen ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
        <div  />
        <div className="userInfo" data-aos="fade-left">
          <div className="userImg">
            <img src={User} alt="" />
          </div>
          <div className="userData">
            <span className="hello">Hello !</span>
            <span className="username">Smith English</span>
          </div>
        </div>
      </div>
      <div className="header_title_area" data-aos="fade-right">
        <div className="menu_title">
          {title}
        </div>
      </div>
    </>
  );
};

export default Header;
