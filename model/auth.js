import httpService from "./http-service.js";
import { BASE_ENDPOINT } from "./http-service.js";

export const register = async (user) => {
    return await httpService.POST(`${BASE_ENDPOINT}/register`, user);
}

export const login = async (credentials) => {
    return await httpService.POST(`${BASE_ENDPOINT}/login`, credentials);
}

export default {
    register,
    login,
}
