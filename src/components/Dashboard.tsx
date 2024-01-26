import React, { useEffect, useState } from 'react';
import { Card, Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useUser } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const Dashboard: React.FC = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        breakpoint="lg" // Set breakpoint for large screens
        collapsedWidth="0"
        theme="light"
        collapsed={collapsed}
        onCollapse={toggleSidebar}
        collapsible
        style={{ background: 'white' }}
      >
        <Menu mode="vertical" theme="light" defaultSelectedKeys={['1']}>
          {/* <Menu.Item key="1" icon={<UserOutlined />}>
            Dashboard
          </Menu.Item> */}
          <Menu.Item key="2" icon={<UserOutlined />} className='mt-20'>
            Home
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff' }}>
          <div className="flex justify-between p-2">
            <div>
              <span
                className="trigger"
                style={{ fontSize: '18px', cursor: 'pointer' }}
                onClick={toggleSidebar}
              >
                Assessment Dashboard
              </span>
            </div>
            <div className="mb-5">
              <button
                className="bg-[#6941C6] text-white h-auto w-[54px] rounded-md mb-10"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </Header>
        <Content style={{ margin: '16px' }}>
          <div className="container p-10">
            <p className="text-[#667085] text-base">
              Welcome back, {user?.fullname}
            </p>
            <Card
              title="Below are your details"
              style={{ padding: 10 }}
              className="w-auto lg:w-1/3 mt-7"
            >
              <div className="flex justify-between">
                <div className="">
                  <p>{user?.fullname}</p>
                  <p>{user?.email}</p>
                </div>
                <div>
                  <p>ID: {user?.id}</p>
                </div>
              </div>
            </Card>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
