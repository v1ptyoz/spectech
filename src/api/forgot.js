import axios from "axios";
import { SetLoading, SetCode, SetError } from "../store/user/actions";

export function ForgotPassword({ login }) {
  return async function (dispatch) {
    let isFounded = false;

    dispatch(SetLoading());

    try {
      const { data } = await axios("../users.json");
      data.forEach(user => {
        if (user.phone === login) {
          dispatch(SetCode({login, code: '111111'}))
          isFounded = true;
        }
      })
      if (!isFounded) {
        dispatch(SetError("Пользователь с таким номером не найден"));
      }
    } catch (e) {
      dispatch(SetError("Ошибка во время выполнения запроса..."));
    }
    

  }
}