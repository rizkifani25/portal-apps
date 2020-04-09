import { fetch } from "../request";
import { USER_POST } from "../url";

export class GetUserPost {
  getUserPost = (params) => {
    return fetch(USER_POST, { method: "GET", params });
  };
}
