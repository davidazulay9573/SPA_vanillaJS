import companyModel from "../model/company.js";

export const registerCompany = async (company) => {
    try {
        await companyModel.registerCompany(company);

        location.hash = `#/companies`
    } catch (error) {
        alert('Error registering company: ' + error);
    }
};

export const getCompany = async () => {
    try {
        return await companyModel.getCompany(companyId);
    } catch (error) {
        alert('Error getting company details: ' + error);
        return null;
    }
};

export const getAllCompanies = async () => {
    try {
        return await companyModel.getAllCompanies();
    } catch (error) {
        alert('Error getting company details: ' + error);
        return null;
    }
};

export default {
    registerCompany,
    getCompany,
    getAllCompanies
}