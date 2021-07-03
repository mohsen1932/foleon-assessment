import * as constants from "./constants";

export const getList = (page, filter) => ({
  type: constants.LIST_GET_ALL,
  payload: {
    page,
    filter,
  },
});
export const setList = (list) => ({
  type: constants.LIST_SET,
  payload: {
    list,
  },
});
export const setPage = (page) => ({
  type: constants.LIST_SET_PAGE,
  payload: {
    page,
  },
});
export const setTotal = (total) => ({
  type: constants.LIST_SET_TOTAL,
  payload: {
    total,
  },
});
export const listFailure = (listFailure, listMessage) => ({
  type: constants.LIST_FAILURE,
  payload: {
    listFailure,
    listMessage,
  },
});
export const listLoading = (listLoading) => ({
  type: constants.LIST_LOADING,
  payload: {
    listLoading,
  },
});
export const setFilter = (filter) => ({
  type: constants.LIST_FILTER,
  payload: {
    filter,
  },
});
export const search = (value) => ({
  type: constants.LIST_SEARCH,
  payload: {
    value,
  },
});
export const setValue = (value) => ({
  type: constants.LIST_SET_VALUE,
  payload: {
    value,
  },
});
export const getOne = (id) => ({
  type: constants.SINGLE_GET,
  payload: {
    id,
  },
});
export const setOne = (publication) => ({
  type: constants.LIST_SET,
  payload: {
    publication,
  },
});
export const singleFailure = (singleFailure, singleMessage) => ({
  type: constants.SINGLE_FAILURE,
  payload: {
    singleFailure,
    singleMessage,
  },
});
export const singleLoading = (singleLoading) => ({
  type: constants.SINGLE_LOADING,
  payload: {
    singleLoading,
  },
});
export const getCats = () => ({
  type: constants.CATEGORY_GET,
  payload: {},
});
export const setCats = (categories) => ({
  type: constants.CATEGORY_SET,
  payload: {
    categories,
  },
});
export const catsFailure = (categoriesFailure, categoriesMessage) => ({
  type: constants.CATEGORY_FAILURE,
  payload: {
    categoriesFailure,
    categoriesMessage,
  },
});
export const catsLoading = (categoriesLoading) => ({
  type: constants.CATEGORY_LOADING,
  payload: {
    categoriesLoading,
  },
});
