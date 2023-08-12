import { removeToken } from "../../services/token";
import { userActions } from "../reducer/userReducer";

export const logout = () => (dispatch) => {
  dispatch(userActions.resetUserInfo());
  localStorage.removeItem("account");
  removeToken();
};