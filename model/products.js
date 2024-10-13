import { getCompanyId } from "../utils/get-ids.js";
import httpService from "./http-service.js";
import { BASE_ENDPOINT } from "./http-service.js";

export const regProduct = async (product) => {
    const companyId = getCompanyId();
    const endpoint = `${BASE_ENDPOINT}/companies/${companyId}/products`;
    const newProduct = await httpService.POST(endpoint, product);
    return newProduct;
}

export const getAllProduct = async () => {
    const endpoint = `${BASE_ENDPOINT}/companies/${getCompanyId()}/products`;
    return await httpService.GET(endpoint);
}

export const getProduct = async (productId) => {
    const endpoint = `${BASE_ENDPOINT}/companies/${getCompanyId()}/products/${productId}`;
    return await httpService.GET(endpoint);
}


export const deleteProduct = async (productId) => {
    const endpoint = `${BASE_ENDPOINT}/companies/${getCompanyId()}/products/${productId}`;
    await httpService.DELETE(endpoint);
}

export const updateProduct = async(productId, product) => {
    const endpoint = `${BASE_ENDPOINT}/companies/${getCompanyId()}/products/${productId}`;
    const newProduct = await httpService.PUT(endpoint, product);

    return newProduct;
}

export default {
    regProduct,
    updateProduct,
    getAllProduct,
    getProduct,
    deleteProduct,
}
