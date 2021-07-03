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
export const getValue = (state) => state.app.value;
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
export function* searchPublications(action) {
  try {
    // if the search value is empty
    const LastSearchValue = yield select(getValue);
    if (!LastSearchValue && !action.payload.value) {
      return;
    }
    yield put(actions.setList([]));
    if (LastSearchValue && !action.payload.value) {
      // if the user removes the search value and tries to search again with empty value
      yield put(actions.setValue(""));
      yield put(actions.setFilter("All"));
      yield put(actions.getList(1, ""));
      return;
    }
    yield put(actions.listLoading(true));
    yield put(actions.setValue(action.payload.value));
    yield call(checkAuth);
    const response = yield call(services.searchPublication, action.payload);
    yield put(actions.setList(response?.data?._embedded?.edition));
  } catch (error) {
    yield put(actions.listFailure(true, error.message));
  } finally {
    if (action.payload.value) yield put(actions.listLoading(false));
  }
}
export function* searchPublicationsSaga() {
  yield takeLatest(constants.LIST_SEARCH, searchPublications);
}

export function* filterPublications(action) {
  yield put(actions.setList([]));
  if (action.payload.filter === "All") {
    yield put(actions.getList(1));
    return;
  }
  yield put(actions.getList(1, action.payload.filter));
}
export function* filterPublicationsSaga() {
  yield takeLatest(constants.LIST_FILTER, filterPublications);
}
export function* getCats() {
  try {
    yield put(actions.catsLoading(true));
    yield call(checkAuth);
    const response = yield call(services.getAllCategories);
    yield put(actions.setCats(response?.data?._embedded?.category));
  } catch (error) {
    yield put(actions.catsFailure(true, error.message));
  } finally {
    yield put(actions.catsLoading(false));
  }
}
export function* getCatsSaga() {
  yield takeLatest(constants.CATEGORY_GET, getCats);
}
export function* getOnePublication(action) {
  try {
    yield put(actions.singleLoading(true));
    yield call(checkAuth);
    const response = yield call(services.getOnePublication, action.payload);
    yield put(actions.setOne(response.data));
  } catch (error) {
    yield put(actions.singleFailure(true, error.message));
    if (error.response.status === 404) {
      window.location = "/404";
    }
  } finally {
    yield put(actions.singleLoading(false));
  }
}
export function* getOnePublicationSaga() {
  yield takeLatest(constants.SINGLE_GET, getOnePublication);
}

const Sagas = [
  getPublicationsSaga(),
  searchPublicationsSaga(),
  getCatsSaga(),
  filterPublicationsSaga(),
  getOnePublicationSaga(),
];
export default Sagas;
