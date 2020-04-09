import { fetch } from "../request";
import { CREATE_POST } from "../url";

export class UserCreatePost {
  userCreatePost = (params) => {
    return fetch(CREATE_POST, { method: "POST", params });
  };
}
