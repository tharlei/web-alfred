import React, { useEffect, useState, ChangeEvent } from 'react';
import api from '../../services/api'
import * as EmployeesActions from '../../store/ducks/employees/actions';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Employee } from '../../store/ducks/employees/types';
import { ApplicationState } from '../../store';

import { Link } from 'react-router-dom';
import { FaTrash, FaPencilAlt, FaPlus, FaArrowRight, FaRegQuestionCircle } from 'react-icons/fa';

import {
  Modal, ModalContent,
  ActionWrapper, ActionCard, ActionCardContent, ActionCardLogo, ActionCardText, Input,
  TableCard, TableCardContent, Table, TableTh, TableTd, ButtonEdit, ButtonDelete
} from './styles';

interface Props {
  employees: Employee[]
  loadRequest(): void
}

const EmployeeList = ({ loadRequest, employees }: Props) => {
  const history = useHistory();

  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([])
  const [employeeToDelete, setEmployeeToDelete] = useState<string>('')

  useEffect(() => {
    refreshEmployees();
  }, [employees])

  useEffect(() => {
    loadRequest();
  }, [loadRequest]);

  async function refreshEmployees() {
    try {
      const employeesPayload = employees.map(employee => {
        const salary = parseFloat(employee.salary).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

        return {
          ...employee,
          salary
        }
      });

      setFilteredEmployees(employeesPayload);
    }
    catch (error) {
      console.log(error)
      toast.error('Tente novamente mais tarde...');
    }
  }

  async function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;

    if (!value) {
      setFilteredEmployees(employees);
      return;
    }

    const employeesPayload = employees.filter(employee => {
      const title = employee.name.toLowerCase().trim();
      const search = value.toLowerCase().trim();
      const data = title.indexOf(search) >= 0 ? employee : null

      return data;
    })
    setFilteredEmployees(employeesPayload);
  }

  function handleEdit(id: string) {
    history.push(`/employees/${id}`);
  }

  async function handleDelete() {
    try {
      await api.delete(`/${employeeToDelete}`);
      toast.success('Empregado excluído com sucesso!');
      refreshEmployees();
    }
    catch (error) {
      console.log(error)
      toast.error('Tente novamente mais tarde...');
    }
    setEmployeeToDelete('')
  }

  return (
    <div id="component-employees-list">
      <ActionWrapper>
        <ActionCard>
          <ActionCardContent>
            <Link to="/employees/new">
              <ActionCardLogo>
                <FaPlus />
              </ActionCardLogo>
              <ActionCardText>
                <span>Adicionar novo empregado</span>
                <FaArrowRight />
              </ActionCardText>
            </Link>
          </ActionCardContent>
        </ActionCard>

        <Input
          type="text"
          name="search"
          id="search"
          placeholder="Pesquisar por empregados"
          onChange={handleSearch}
        />
      </ActionWrapper>

      <TableCard>
        <TableCardContent>
          <Table>
            <thead>
              <tr>
                <TableTh responsive={false}>Nome</TableTh>
                <TableTh responsive={true}>Idade</TableTh>
                <TableTh responsive={true}>Salário</TableTh>
                <TableTh responsive={false}>Ações</TableTh>
              </tr>
            </thead>
            <tbody>
              {
                filteredEmployees.map(employee => (
                  <tr key={employee._id}>
                    <TableTd responsive={false}>{employee.name}</TableTd>
                    <TableTd responsive={false}>{employee.age}</TableTd>
                    <TableTd responsive={true}>{employee.salary}</TableTd>
                    <TableTd responsive={false}>
                      <ButtonEdit onClick={() => handleEdit(employee._id)}>
                        <FaPencilAlt />
                      </ButtonEdit>
                      <ButtonDelete onClick={() => setEmployeeToDelete(employee._id)}>
                        <FaTrash />
                      </ButtonDelete>
                    </TableTd>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </TableCardContent>
      </TableCard>

      <Modal active={!!employeeToDelete}>
        <ModalContent>
          <FaRegQuestionCircle />
          <h1>Você realmente deseja excluir?</h1>
          <div>
            <button onClick={handleDelete}>Sim, vou excluir</button>
            <span onClick={() => setEmployeeToDelete('')}>Não, desisti de excluir</span>
          </div>
        </ModalContent>
      </Modal>
    </div >
  );
}

const mapStateToProps = (state: ApplicationState) => ({
  employees: state.employees.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(EmployeesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);