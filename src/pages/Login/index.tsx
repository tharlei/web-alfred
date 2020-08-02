import React, { FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  Container, WelcomeWrapper, WelcomeContent, AccessWrapper, AccessContent, AccessImage, AccessButton
} from './styles';

import logo from '../../assets/logo.png';
import bg from '../../assets/bg.jpg';

const Login = () => {
  const history = useHistory();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      localStorage.setItem('token', '94a08da1fecbb6e8b46990538c7b50b2');
      history.push('/');
    }
    catch (error) {
      console.log(error)
      toast.error('Tente novamente mais tarde...');
    }
  }

  return (
    <div id="page-login">
      <Container>
        <WelcomeWrapper>
          <WelcomeContent backgroundImage={bg}>
            <h1>Bem vindo</h1>
            <p>Acesse o gerencial de empregados</p>
          </WelcomeContent>
        </WelcomeWrapper>
        <AccessWrapper>
          <AccessContent>
            <AccessImage>
              <img src={logo} alt='logo' />
            </AccessImage>
            <AccessButton>
              <button onClick={handleSubmit}>Entrar</button>
            </AccessButton>
          </AccessContent>
        </AccessWrapper>
      </Container>
    </div>
  )
}

export default Login;