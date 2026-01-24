import axios from "axios";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "../../Constants";

export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: FETCH_USERS_REQUEST });

  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    dispatch({
      type: FETCH_USERS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_USERS_FAILURE,
      payload: error.message,
    });
  }
};
