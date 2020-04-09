import { fetch } from "../request";
import { USER_REGISTER } from "../url";

export class UserRegister {
  resigter = (params) => {
    return fetch(USER_REGISTER, { method: "POST", params });
  };
}
