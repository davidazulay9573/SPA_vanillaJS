import httpService from "./http-service.js";
import {getCompanyId, getProductId, getIotId } from "../utils/get-ids.js";
import { BASE_ENDPOINT } from "./http-service.js";

export const getAllUpdates = async () => {
    const endpoint = `${BASE_ENDPOINT}/companies/${getCompanyId()}/products/${getProductId()}/iots/${getIotId()}/updates`;
    return await httpService.GET(endpoint);
}

export default {
    getAllUpdates
}


