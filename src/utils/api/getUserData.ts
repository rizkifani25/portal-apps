import { fetch } from "../request";
import { USER_DATA } from "../url";

export class GetUserData {
  getUserData = (params) => {
    return fetch(USER_DATA, { method: "GET", params });
  };
}
