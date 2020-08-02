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