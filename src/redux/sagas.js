import { put, takeLatest, call, select } from "redux-saga/effects";
import * as actions from "./actions";
import * as constants from "./constants";
import * as services from "../utils/services";
import * as helpers from "../utils/helpers";

export async function checkAuth() {
  const { access_token, expires_in } = helpers.getToken();
  if (!access_token || helpers.isExpired(expires_in)) {
    return await services.getNewToken();
  }
}
export const getStoredPublications = (state) => state.app.list;
export function* getPublications(action) {
  try {
    yield put(actions.listLoading(true));
    yield call(checkAuth);
    const response = yield call(services.getAllPublications, action.payload);
    const getWholeItems = yield select(getStoredPublications);
    const finalData = yield [
      ...getWholeItems,
      ...response?.data?._embedded?.edition,
    ];
    yield put(actions.setList(finalData));
    yield put(actions.setTotal(response?.data?.page_count));
    yield put(actions.setPage(action.payload.page));
  } catch (error) {
    yield put(actions.listFailure(true, error.message));
  } finally {
    yield put(actions.listLoading(false));
  }
}
export function* getPublicationsSaga() {
  yield takeLatest(constants.LIST_GET_ALL, getPublications);
}



const Sagas = [
  getPublicationsSaga(),
];
export default Sagas;
