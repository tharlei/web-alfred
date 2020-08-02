/**
 * Action types
 */
export enum EmployeesTypes {
  LOAD_REQUEST = '@employees/LOAD_REQUEST',
  LOAD_SUCCCES = '@employees/LOAD_SUCCCES',
  LOAD_FAILURE = '@employees/LOAD_FAILURE'
}

/**
 * Data types
 */
export interface Employee {
  _id: string;
  name: string;
  salary: string;
  age: string;
}

/**
 * State type
 */
export interface EmployeesState {
  readonly data: Employee[]
  readonly loading: boolean
  readonly error: boolean
}
