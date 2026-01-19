import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { AiOutlineGlobal, AiOutlineSchedule } from 'react-icons/ai';
import { PiUsersLight } from 'react-icons/pi';
import { LiaHotelSolid } from 'react-icons/lia';
import { VscBook } from 'react-icons/vsc';
import CountryTable from '../CountryTable';
const { Header, Sider, Content } = Layout;
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider  style={{height:'100vh' , maxWidth:'500px' , width:'100vh'}} trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical " />
        <Menu
        
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <AiOutlineGlobal style={{width:'20px' , height:'20px'}} />,
              label: <Link style={{fontSize:'18px' , fontWeight:'normal'}} to={"admin/countries"}>Countries</Link>,
            },
            {
              key: '2',
              icon: <PiUsersLight style={{width:'20px' , height:'20px'}} />,
              label: <Link style={{fontSize:'18px' , fontWeight:'normal'}} to={"admin/toursCities"}>Tours and cities</Link>,
            },
            {
              key: '3',
              icon: <AiOutlineSchedule style={{width:'20px' , height:'20px'}}/>,
              label: <Link style={{fontSize:'18px' , fontWeight:'normal'}} to={"admin/tourPackets"}>Tour packets</Link>,
            },
            {
              key: '4',
              icon: <LiaHotelSolid style={{width:'20px' , height:'20px'}}/>,
              label: <Link style={{fontSize:'18px' , fontWeight:'normal'}} to={"admin/hotel"}>Hotel</Link>,
            },
            {
              key: '5',
              icon: <VscBook style={{width:'20px' , height:'20px'}}/>,
              label: <Link style={{fontSize:'18px' , fontWeight:'normal'}} to={"admin/destination"}>Destination</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '18px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            height:'80vh',
            overflowY:'scroll',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Sidebar;