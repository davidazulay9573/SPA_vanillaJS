import { getCompanyId, getProductId } from "../utils/get-ids.js";
import httpService from "./http-service.js";
import { BASE_ENDPOINT } from "./http-service.js";

export const regIot = async (iot) => {  
    const endpoint = `${BASE_ENDPOINT}/companies/${getCompanyId()}/products/${getProductId()}/iots`;
    const newIot = await httpService.POST(endpoint, iot);
    return newIot;
}

export const updateIot = async (iotId, iot) => {
    const endpoint = `${BASE_ENDPOINT}/companies/${getCompanyId()}/products/${getProductId()}/iots/${iotId}`;
    const updatedIot = await httpService.PUT(endpoint, iot);
    return updatedIot;
}

export const getAllIots = async () => {
    const endpoint = `${BASE_ENDPOINT}/companies/${getCompanyId()}/products/${getProductId()}/iots`;
    return await httpService.GET(endpoint);
}

export const getIot = async (iotId) => {
    const endpoint = `${BASE_ENDPOINT}/companies/${getCompanyId()}/products/${getProductId()}/iots/${iotId}`;

    return await httpService.GET(endpoint);
}

export const deleteIot = async (iotId) => {
    const endpoint = `${BASE_ENDPOINT}/companies/${getCompanyId()}/products/${getProductId()}/iots/${iotId}`;
    await httpService.DELETE(endpoint);
}

export default {
    regIot,
    getAllIots,
    getIot,
    deleteIot,
    updateIot,
}
