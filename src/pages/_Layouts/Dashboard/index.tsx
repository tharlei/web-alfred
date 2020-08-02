import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { FaUser, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

import {
  Nav, Header, Main, WrapperImage, WrapperItems, List, Item, HeaderContent, UserIcon, OptionsIcon
} from './styles';

import logo from '../../../assets/logo.png';

interface Props {
  children: JSX.Element
}

const Dashboard = (props: Props) => {
  const history = useHistory();

  function handleExit() {
    localStorage.removeItem('token');
    history.push('/login');
  }

  return (
    <div id="layout-dashboard">
      <Nav>
        <WrapperImage>
          <Link to="/">
            <img src={logo} alt='logo' />
          </Link>
        </WrapperImage>
        <WrapperItems>
          <List>
            <Item className="active">
              <Link to="/employees">
                <FaUser />
                <p>Empregados</p>
              </Link>
            </Item>
          </List>
        </WrapperItems>
      </Nav>

      <Header>
        <HeaderContent>
          <UserIcon>
            <FaUserCircle />
          </UserIcon>
          <span>Usuário</span>
          <OptionsIcon onClick={handleExit}>
            <FaSignOutAlt />
          </OptionsIcon>
        </HeaderContent>
      </Header>

      <Main>
        {props.children}
      </Main>
    </div>
  )
}

export default Dashboard;