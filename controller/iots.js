import iotModel from "../model/iots.js";
import { getIotId, getProductId, getCompanyId } from "../utils/get-ids.js";
import { renderIotsList } from "../view/pages/iots/iots.js";

export const createIot = async (iotInput) => {
    try {
        const iot = await iotModel.regIot({...iotInput, productID : getProductId()});
        location.hash = `#/companies/${getCompanyId()}/products/${iot.productID}/iots`;
    } catch (error) {
        alert('Error registering IoT:', error);
    } 
};

export const getIot = async (iotId) => {
    try{
        return await iotModel.getIot(iotId);
    }catch(error){
        return null;
    }
};

export const editIot = async (iotInput) => {
    try {
        const newIot = {...iotInput, productID : getProductId()};
        const updatedIot = await iotModel.updateIot(getIotId(), newIot);
        await renderIotsList(await getAllIots());
        location.hash = `#/companies/${getCompanyId()}/products/${getProductId()}/iots`;
        return updatedIot;
    } catch (error) {
        alert('Error registering IoT:', error);
    } 
};

export const deleteIot = async (iotId) => {
    if (confirm(`Are you sure you want to delete iot ${iotId}?`)) {
        await iotModel.deleteIot(iotId);
        await renderIotsList(await iotModel.getAllIots());
        location.hash = `#/companies/${getCompanyId()}/products/${getProductId()}/iots`;
    }
};

export const getAllIots = async () => {
    return await iotModel.getAllIots();
};

export default {
    createIot,
    getIot,
    getAllIots,
    editIot,
    deleteIot,
};
