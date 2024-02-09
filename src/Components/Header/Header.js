import "./Header.css";
import { Space, Drawer, Menu, Typography } from "antd";
import React, { useState } from "react";
import { Link } from "react-scroll";

import { Outlet } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import SNSIcons from "../SNSIcons/SNSIcons";
import Footer from "../Footer/Footer";
import HeaderList from "./HeaderList";
const { Title } = Typography;
function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleDrawer = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div>
      <div className="navComp">
        <div className="logo">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Title style={{ color: "white" }}>Hisano</Title>
          </Link>
        </div>
        <div style={{ float: "right" }} className="hamburgerIcon">
          <MenuOutlined
            style={{ color: "white", fontSize: 30 }}
            onClick={() => {
              setOpenMenu(true);
            }}
          />
        </div>

        <div className="horizontalMenu">
          <Space>
            <NavigationBar />
            {/* <SNSIcons /> */}
          </Space>
        </div>

        <Drawer
          placement="right"
          open={openMenu}
          onClose={() => {
            setOpenMenu(false);
          }}
          closable={true}
          onClick={toggleDrawer}
          drawerStyle={{ backgroundColor: "black" }}
        >
          <NavigationBar isInline />
        </Drawer>
      </div>
      <Outlet />

      {/* <Footer /> */}
    </div>
  );
}

function NavigationBar({ isInline = false }) {
  const [current, setCurrent] = useState("h");
  const onClick = (e) => {
    console.log("click", e);
    setCurrent(e.key);
  };

  return (
    <div>
      <Menu
        style={{
          border: "none",
          fontSize: 15,
          width: 250,
          color: "white",
          backgroundColor: "black",
        }}
        onClick={onClick}
        selectedKeys={[current]}
        mode={isInline ? "inline" : "horizontal"}
      >
        <Menu.Item key="h">
          <Link to="Home">Home</Link>
        </Menu.Item>
        <Menu.Item key="p">
          <Link to="project" smooth={true} offset={200} duration={500}>
            Project
          </Link>
        </Menu.Item>

        <Menu.Item key="c">
          <Link to="/contact">Contact</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Header;
