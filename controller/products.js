import productModel from "../model/products.js";
import {getCompanyId, getProductId } from "../utils/get-ids.js";
import { renderProductsList } from "../view/pages/products/products.js";

export const createProduct = async (productInput) => {
    try {
        const product = await productModel.regProduct(productInput);
        location.hash = `#/companies/${getCompanyId()}/products`
    } catch (error) {
        alert('Error registering product:' + error);
    } 
};

export const getProduct = async (productId) => {
    try {
        return await productModel.getProduct(productId);
    } catch (error) {
        return null;
    }
};

export const getAllProduct = async () => {
    return await productModel.getAllProduct();
};

export const editProduct = async (productInput) => {
    try {
        const productId = getProductId();
    
        await productModel.updateProduct(productId, productInput);
        await renderProductsList(await getAllProduct());
    
        location.hash = `#/companies/${getCompanyId()}/products/${productId}`;
    } catch (error) {
        alert('Error updating product:', error);
    } 
};

export const deleteProduct = async (productId) => {
    try {
        if (confirm(`Are you sure you want to delete product ${productId}?`)) {
            await productModel.deleteProduct(productId);
            await renderProductsList(await getAllProduct());

            location.hash = `#/companies/${getCompanyId()}/products`;
        }
    } catch (error) {
        alert('Error deleting product:', error);
    } 
};

export default {
    createProduct,
    getProduct,
    getAllProduct,
    editProduct,
    deleteProduct,
};
