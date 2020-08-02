import { action } from 'typesafe-actions';
import { EmployeesTypes, Employee } from './types';

export const loadRequest = () => action(EmployeesTypes.LOAD_REQUEST);

export const loadSuccess = (data: Employee[]) => action(EmployeesTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(EmployeesTypes.LOAD_FAILURE);
