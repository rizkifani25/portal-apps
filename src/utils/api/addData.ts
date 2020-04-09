import { fetch } from "../request";
import { ADD_DATA } from "../url";

export class AddData {
  getData = (params) => {
    return fetch(ADD_DATA, { method: "GET", params });
  };
}
