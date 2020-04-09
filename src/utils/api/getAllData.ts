import { fetch } from "../request";
import { GET_DATA } from "../url";

export class GetAllData {
  getData = (params) => {
    return fetch(GET_DATA, { method: "GET", params });
  };
}