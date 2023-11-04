import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import SubMenu from 'antd/es/menu/SubMenu';
import axios from 'axios';

const { Header, Content, Sider } = Layout;

const sidebarNavMenus = ["Appointments","Profile", "Logout"];
const subMenus = [<h1>Hello</h1>, <h2>Hi</h2>, <h3>Bye</h3>];

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    // label: `subnav ${key}`,
    label: sidebarNavMenus[index],
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 2 + j + 1;
      return {
        key: subKey,
        // label: `option${subKey}`,
        label: subMenus[index],
      };
    }),
  };
});

const PermanentDrawerLeft = () => {
  const [info, setInfo] = useState("Hello");
  const { token: { colorBgContainer }, } = theme.useToken();

  const ViewAppointments = () =>{
    getAppointments();
    setInfo("View Clicked");
  }

  // Call appointments api
  async function getAppointments (){
    const resp = await axios.get('http://localhost:5000/appointments/')
    if(resp.data.Success === true){
      setInfo(JSON.stringify(resp.data.appointments));
    };
    console.log(resp);
  }


  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center', color: 'white'}}>
        <h1>Home</h1>
      </Header>
      <Layout>
        <Sider width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            // items={items2}
          >
            <SubMenu key="1" title="Appointments">
              <Menu.Item key="2" onClick={ViewAppointments}>View</Menu.Item>
              <Menu.Item key="3">Create</Menu.Item>
              <Menu.Item key="4">Update</Menu.Item>
              <Menu.Item key="5">Delete</Menu.Item>
            </SubMenu>
            <SubMenu key="6" title="Profile">
              <Menu.Item key="7">View</Menu.Item>
              <Menu.Item key="8">Update</Menu.Item>  
            </SubMenu>  
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px', }}>
          {/* <Breadcrumb style={{ margin: '16px 0',}} >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <Content style={{
              padding: 24,
              margin: "16px 0px 0px 0px",
              minHeight: 280,
              background: colorBgContainer,
            }}>
            <h1>{info}</h1>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default PermanentDrawerLeft;