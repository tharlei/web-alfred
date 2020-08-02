import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import api from '../../../services/api';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { Employee } from '../../../store/ducks/employees/types';

import {
  Container, Breadcrumbs, BreadcrumbsLink, BreadcrumbsDivider, BreadcrumbsDisabled,
  InputsCard, Input, Button
} from './styles';

const EmployeesEdit: React.FC = (props: any) => {
  const history = useHistory();

  const { id } = props.match.params;

  const [formData, setFormData] = useState({
    name: '',
    salary: '',
    age: ''
  });

  useEffect(() => {
    api.get<Employee>(`/employees/${id}`)
      .then(employee => {
        delete employee.data._id;
        setFormData(employee.data)
      })
      .catch(err => {
        console.log(err);
        history.push('/employees');
      });
  }, [id, history]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      await api.put(`/employees/${id}`, formData);
      toast.success("Empregado editado com sucesso!");
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
          <BreadcrumbsDisabled>Editar empregado</BreadcrumbsDisabled>
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
                value={formData.name}
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
                value={formData.age}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="price">Salário</label>
              <Input
                type="text"
                name="salary"
                id="salary"
                placeholder="Salário do empregado"
                value={formData.salary}
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

export default EmployeesEdit;