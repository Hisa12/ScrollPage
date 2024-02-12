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
      <div className="navComp">
        <div className="logo">
          <Link to="Home" smooth={true} offset={-430} duration={500}>
            <Title style={{ color: "white" }}>H.S</Title>
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
          width: 540,
          color: "white",
          backgroundColor: "black",
        }}
        onClick={onClick}
        selectedKeys={[current]}
        mode={isInline ? "inline" : "horizontal"}
      >
        {HeaderList.map((item) => (
          <div>
            <Menu.Item key={item.id}>
              <Link to={item.id} smooth={true} offset={-100} duration={500}>
                {item.title}
              </Link>
            </Menu.Item>
          </div>
        ))}
      </Menu>
    </div>
  );
}

export default Header;
