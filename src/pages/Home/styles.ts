import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 30px 15px;
  min-height: calc(100vh - 123px);
`;

export const CardsWrapper = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  height: 250px;
  width: 250px;
  border-radius: 4px;
  padding: 20px;
  background-color: #fff;
  color: rgba(0,0,0,.87);
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
`;

export const CardIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 9px;
  padding: 10px;  

  svg {
    font-size: 70px;
    color: rgb(255, 133, 20);
  }
`;

export const CardTitle = styled.div`
  color: rgba(0,0,0,.6);
  font-size: 30px;
  text-align: center;
  padding: 16px;
  font-weight: 400;
  margin-bottom: 16px;
`;

export const CardDescription = styled.div`
  color: rgba(0,0,0,.87);
  text-align: center;
`;