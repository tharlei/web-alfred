import { Reducer } from 'redux';
import { EmployeesState, EmployeesTypes } from './types';

const INITIAL_STATE: EmployeesState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<EmployeesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EmployeesTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case EmployeesTypes.LOAD_SUCCCES:
      return {
        ...state, loading: false, error: false, data: action.payload.data,
      };
    case EmployeesTypes.LOAD_FAILURE:
      return {
        ...state, loading: false, error: true, data: [],
      };
    default:
      return state;
  }
};

export default reducer;
