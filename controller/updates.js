import updateModel from "../model/updates.js";

export const getAllUpdates = async () => {
    return await updateModel.getAllUpdates();
};

export default {
    getAllUpdates
}