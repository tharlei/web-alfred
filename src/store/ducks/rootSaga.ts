import { all, takeLatest } from 'redux-saga/effects';

import { EmployeesTypes } from './employees/types';
import { load as loadEmployees } from './employees/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(EmployeesTypes.LOAD_REQUEST, loadEmployees),
  ]);
}
