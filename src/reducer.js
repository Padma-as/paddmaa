import { USER_POST_FAILURE, USER_POST_SUCCESS } from "./Constants";

const postReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_POST_SUCCESS:
      return { ...state, data: action.data };
    case USER_POST_FAILURE:
      return { ...state, data: action.data };
    default:
      return state;
  }
};
export default postReducer;
