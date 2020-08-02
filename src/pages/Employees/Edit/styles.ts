import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 30px 15px;
  min-height: calc(100vh - 123px);
`;

export const Breadcrumbs = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex: 0 1 auto;
  list-style-type: none;
  margin: 0;
  padding: 18px 12px;
  align-items: center;

  li {
    font-size: 15px;
  }
`;

export const BreadcrumbsLink = styled(Link)`
  color: var(--red-dark);
  text-decoration: none;
`;

export const BreadcrumbsDivider = styled.li`
  color: rgba(0,0,0,.38);
  padding: 0 12px;
`;

export const BreadcrumbsDisabled = styled.li`
  color: rgba(0,0,0,.38);
`;

export const InputsCard = styled.div`
  margin-top: 30px;
  padding: 20px;
  max-width: 100%;
  outline: none;
  text-decoration: none;
  overflow-wrap: break-word;
  position: relative;
  white-space: normal;
  will-change: box-shadow;
  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
`;

export const Input = styled.input`
  margin: 10px 0 25px;
  width: 100%;
  padding: .375rem;
  font-size: 1rem;
  line-height: 1.5;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

  :focus {
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
  }
`;

export const Button = styled.button`
  cursor: pointer;
  margin-top: 16px;
  border: none;
  height: 36px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 0px 16px;
  background-color: var(--red-dark);
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
`;