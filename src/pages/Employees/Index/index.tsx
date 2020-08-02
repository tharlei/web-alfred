import React from 'react';
import EmployeeList from '../../../components/EmployeeList';

import {
  Container, Breadcrumbs, BreadcrumbsDisabled, BreadcrumbsLink, BreadcrumbsDivider,
} from './styles';

const EmployeesIndex = () => {

  return (
    <div id="page-employees-list">
      <Container>
        <Breadcrumbs>
          <li>
            <BreadcrumbsLink to="/">Início</BreadcrumbsLink>
          </li>
          <BreadcrumbsDivider> / </BreadcrumbsDivider>
          <BreadcrumbsDisabled>Lista de empregados</BreadcrumbsDisabled>
        </Breadcrumbs>

        <EmployeeList />
      </Container>
    </div>
  )
}

export default EmployeesIndex;