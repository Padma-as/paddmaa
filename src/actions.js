import { USER_POST_SUCCESS, USER_POST_FAILURE } from "./Constants";
import axios from "axios";
export const postUser = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(`http://localhost:9090/employees`, {
      config,
    });
    dispatch({
      type: USER_POST_SUCCESS,
      payload: data,
    });
    console.log(data);
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_POST_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
