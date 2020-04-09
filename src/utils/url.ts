const API_PREFIX = "https://portalapps-server.herokuapp.com";

export const USER_LOGIN = API_PREFIX + "/login";
export const USER_REGISTER = API_PREFIX + "/register";
export const USER_DATA = API_PREFIX + "/user/profile";
export const USER_POST = API_PREFIX + "/user/post";
export const CREATE_POST = API_PREFIX + "/user/create/post";
export const DELETE_POST = API_PREFIX + "/user/delete/post";
export const UPDATE_USER_PROFILE = API_PREFIX + "/user/profile/update";

// customer
export const ADD_DATA = API_PREFIX + "/customer/add";
export const GET_DATA = API_PREFIX + "/customer";
export const UPDATE_DATA = API_PREFIX + "/customer/update";
export const DELETE_DATA = API_PREFIX + "/customer/delete";
