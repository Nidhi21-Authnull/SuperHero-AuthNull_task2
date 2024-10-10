import React from 'react';
import { Typography } from 'antd';


const { Title } = Typography;

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Title level={1} style={{ margin: 0, fontWeight: 'bold', color:'white' }}>
          SUPERHERO
        </Title>
      </div>
    </div>
  );
};

export default Navbar;
