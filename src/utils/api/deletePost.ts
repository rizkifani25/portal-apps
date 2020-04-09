import { fetch } from "../request";
import { DELETE_POST } from "../url";

export class DeletePost {
  userDeletePost = (params) => {
    return fetch(DELETE_POST, { method: "POST", params });
  };
}
