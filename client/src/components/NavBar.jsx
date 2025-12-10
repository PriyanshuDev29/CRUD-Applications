import { AppBar, Toolbar, styled } from '@mui/material';

import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
  background: #111111;
`;

const Tabs = styled(NavLink)`
  font-size: 20px;
  margin: 20px;
  color: inherit;
  text-decoration: none;
`;

const NavBar = () => {
  return (
    <Header position="static">
      <Toolbar>
        <Tabs to="/">CRUD</Tabs>
        <Tabs to="/adduser">Add User</Tabs>
        <Tabs to="/alluser">All User</Tabs>
      </Toolbar>
    </Header>
  );
};

export default NavBar;
