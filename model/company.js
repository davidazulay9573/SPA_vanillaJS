import httpService from "./http-service.js";
import { BASE_ENDPOINT } from "./http-service.js";

export const registerCompany = async (company) => {
    return await httpService.POST(`${BASE_ENDPOINT}/companies`, company);
}

export const getCompany = async (companyId) => {
    const endpoint = `${BASE_ENDPOINT}/companies/${companyId}`
    return await httpService.GET(endpoint);
}

export const getAllCompanies = async () => {
    const endpoint = `${BASE_ENDPOINT}/companies`
   return await httpService.GET(endpoint);
   ;
}

export default {
    registerCompany,
    getCompany,
    getAllCompanies
}