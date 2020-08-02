import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { FaUser } from 'react-icons/fa';

import {
  Container, CardsWrapper, Card, CardIcon, CardTitle, CardDescription
} from './styles';

const Home = () => {

  const [loading, setLoading] = useState<boolean>(true)
  const [amountEmployees, setAmountEmployees] = useState<number>(0)

  useEffect(() => {
    api.get('/employees')
      .then(res => {
        setAmountEmployees(res.data.length)
        setLoading(false);
      });
  }, [])

  return (
    <div id="page-home">
      <Container>
        {
          !loading && (
            <CardsWrapper>
              <Card to="/employees">
                <CardIcon>
                  <FaUser />
                </CardIcon>
                <CardTitle>
                  <p>{amountEmployees}</p>
                </CardTitle>
                <CardDescription>
                  Cadastros
                </CardDescription>
              </Card>
            </CardsWrapper>
          )
        }
      </Container>
    </div>
  )
}

export default Home;