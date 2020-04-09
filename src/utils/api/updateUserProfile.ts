import { fetch } from "../request";
import { UPDATE_USER_PROFILE } from "../url";

export class UpdateUserProfile {
  updateUserProfile = (params) => {
    return fetch(UPDATE_USER_PROFILE, { method: "POST", params });
  };
}
