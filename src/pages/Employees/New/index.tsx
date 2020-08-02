import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../../services/api';
import { toast } from 'react-toastify';

import {
  Container, Breadcrumbs, BreadcrumbsLink, BreadcrumbsDivider, BreadcrumbsDisabled,
  InputsCard, Input, Button
} from './styles';

const EmployeesNew = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    name: '',
    salary: '',
    age: '',
  });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      await api.post('/employees', formData);
      toast.success("Empregado criado com sucesso!");
      history.push('/employees');
    }
    catch (error) {
      console.log(error)
      toast.error('Tente novamente mais tarde...');
    }
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div id="page-employees-new">
      <Container>
        <Breadcrumbs>
          <li>
            <BreadcrumbsLink to="/">Início</BreadcrumbsLink>
          </li>
          <BreadcrumbsDivider> / </BreadcrumbsDivider>
          <li>
            <BreadcrumbsLink to="/employees">Lista de empregados</BreadcrumbsLink>
          </li>
          <BreadcrumbsDivider> / </BreadcrumbsDivider>
          <BreadcrumbsDisabled>Novo empregado</BreadcrumbsDisabled>
        </Breadcrumbs>

        <InputsCard>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Nome</label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Nome do empregado"
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="age">Idade</label>
              <Input
                type="number"
                name="age"
                id="age"
                placeholder="Idade do empregado"
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="salary">Salário</label>
              <Input
                type="text"
                name="salary"
                id="salary"
                placeholder="Salário do empregado"
                onChange={handleInputChange}
                required
              />
            </div>

            <Button type="submit">
              <span>
                Salvar
              </span>
            </Button>
          </form>
        </InputsCard>
      </Container>
    </div>
  )
}

export default EmployeesNew;