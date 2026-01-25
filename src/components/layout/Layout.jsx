import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { PiFilmSlate, PiUsersLight } from 'react-icons/pi';
import { BiCategory, BiSolidCameraMovie } from 'react-icons/bi';
import { MdOutlineEmergencyRecording } from 'react-icons/md';
import { RiMovie2Line, RiShieldUserLine } from 'react-icons/ri';
import { TbCategoryPlus } from 'react-icons/tb';
import { FaUserTie } from 'react-icons/fa';
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
              icon: <PiUsersLight style={{width:'20px' , height:'20px'}} />,
              label: <Link style={{fontSize:'18px' , fontWeight:'normal'}} to={"admin/actors"}>Actors</Link>,
            },
            {
              key: '2',
              icon: <BiCategory  style={{width:'20px' , height:'20px'}} />,
              label: <Link style={{fontSize:'18px' , fontWeight:'normal'}} to={"admin/category"}>Categories</Link>,
            },
            
            {
              key: '3',
              icon: <RiShieldUserLine style={{width:'20px' , height:'20px'}}/>,
              label: <Link style={{fontSize:'18px' , fontWeight:'normal'}} to={"admin/director"}>Director</Link>,
            },
            {
              key: '4',
              icon: <MdOutlineEmergencyRecording style={{width:'20px' , height:'20px'}}/>,
              label: <Link style={{fontSize:'18px' , fontWeight:'normal'}} to={"admin/genre"}>Genre</Link>,
            },
            {
              key: '5',
              icon: <RiMovie2Line style={{width:'20px' , height:'20px'}}/>,
              label: <Link style={{fontSize:'18px' , fontWeight:'normal'}} to={"admin/movie"}>Movie</Link>,
            },
            {
              key: '6',
              icon: <BiSolidCameraMovie style={{width:'20px' , height:'20px'}}/>,
              label: <Link style={{fontSize:'18px' , fontWeight:'normal'}} to={"admin/movie_actor"}>Movie_Actor</Link>,
            },
            {
              key: '7',
              icon: <TbCategoryPlus style={{width:'20px' , height:'20px'}}/>,
              label: <Link style={{fontSize:'18px' , fontWeight:'normal'}} to={"admin/movie_category"}>Movie_Category</Link>,
            },
            {
              key: '8',
              icon: <FaUserTie style={{width:'20px' , height:'20px'}}/>,
              label: <Link style={{fontSize:'18px' , fontWeight:'normal'}} to={"admin/movie_director"}>Movie_Director</Link>,
            },
            {
              key: '9',
              icon: <PiFilmSlate style={{width:'20px' , height:'20px'}}/>,
              label: <Link style={{fontSize:'18px' , fontWeight:'normal'}} to={"admin/movie_genre"}>Movie_Genre</Link>,
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