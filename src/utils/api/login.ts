import { fetch } from "../request";
import { USER_LOGIN } from "../url";

export class UserLogin {
  login = (params) => {
    return fetch(USER_LOGIN, { method: "POST", params });
  };
}
