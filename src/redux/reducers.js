import * as constants from "./constants";
const initial = {
  list: [],
  page: 1,
  total: 1,
  listFailure: false,
  listMessage: "",
  listLoading: false,
  publication: {},
  singleFailure: false,
  singleMessage: "",
  singleLoading: false,
  filter: "All",
  value: "",
  categories: [],
  categoriesFailure: false,
  categoriesMessage: "",
  categoriesLoading: false,
};
function reducer(state = initial, action) {
  switch (action.type) {
    case constants.LIST_SET:
      return { ...state, ...action.payload };
    case constants.LIST_SET_PAGE:
      return { ...state, ...action.payload };
    case constants.LIST_SET_TOTAL:
      return { ...state, ...action.payload };
    case constants.LIST_FILTER:
      return { ...state, ...action.payload };
    case constants.LIST_SET_VALUE:
      return { ...state, ...action.payload };
    case constants.LIST_FAILURE:
      return { ...state, ...action.payload };
    case constants.LIST_LOADING:
      return { ...state, ...action.payload };
    case constants.SINGLE_SET:
      return { ...state, ...action.payload };
    case constants.SINGLE_FAILURE:
      return { ...state, ...action.payload };
    case constants.SINGLE_LOADING:
      return { ...state, ...action.payload };
    case constants.CATEGORY_SET:
      return { ...state, ...action.payload };
    case constants.CATEGORY_FAILURE:
      return { ...state, ...action.payload };
    case constants.CATEGORY_LOADING:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
export default reducer;
