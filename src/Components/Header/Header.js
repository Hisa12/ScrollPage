import "./Header.css";
import { Space, Drawer, Menu, Typography } from "antd";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { MenuOutlined } from "@ant-design/icons";

const HeaderList = [
  { id: "Home", title: "Home" },
  { id: "AboutMe", title: "About Me" },
  { id: "MySkills", title: "My Skills" },
  { id: "Resume", title: "Resume" },
  { id: "Project", title: "Project" },
  { id: "Contact", title: "Contact" },
];

const { Title } = Typography;
function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleDrawer = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div>
      <div className="header">
        <div className="logo">
          <Link to="Home" smooth={true} offset={-430} duration={500}>
            <Title style={{ color: "#ffffff", cursor: "pointer" }}>H.S</Title>
          </Link>
        </div>
        <div style={{ float: "right", width: 120 }} className="hamburgerIcon">
          <MenuOutlined
            style={{ color: "#ffffff", fontSize: 30 }}
            onClick={() => {
              setOpenMenu(true);
            }}
          />
        </div>

        <div className="horizontalMenu">
          <Space>
            <NavigationBar />
          </Space>
        </div>

        <Drawer
          placement="center"
          open={openMenu}
          onClose={() => {
            setOpenMenu(false);
          }}
          closable={true}
          onClick={toggleDrawer}
          drawerStyle={{ backgroundColor: "#050301" }}
        >
          <NavigationBar isInline />
        </Drawer>
      </div>
    </div>
  );
}

function NavigationBar({ isInline = false }) {
  const [current, setCurrent] = useState("Home");
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
          width: 600,
          color: "#ffffff",
          backgroundColor: "#050301",
        }}
        onClick={onClick}
        selectedKeys={[current]}
        mode={isInline ? "inline" : "horizontal"}
      >
        <div>
          {HeaderList.map((item) => (
            <Menu.Item key={item.id}>
              <Link to={item.id} smooth={true} offset={-100} duration={500}>
                {item.title}
              </Link>
            </Menu.Item>
          ))}
        </div>
      </Menu>
    </div>
  );
}

export default Header;
