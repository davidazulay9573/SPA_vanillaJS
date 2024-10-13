import companyController from "../../../controller/company.js";
import companyCard from "../../components/companyCard.js";

export default async () => {
    setTimeout(async () => {
        const companies = await companyController.getAllCompanies();
        await renderCompaniesList(companies);
    }, 0);

    return `
        <h1>Companies</h1>
        <button><a href="#/companies/register">Register New Company</a></button>
        <ul id="companies-list" class="companies-list"></ul>
    `;
};

export async function renderCompaniesList(companies) {
    const companiesListElement = document.getElementById('companies-list');

    if (companiesListElement) {
        if (!companies || companies.length === 0) {
            companiesListElement.innerHTML = "Don't have companies yet";
            return;
        }

        const companyCards = await Promise.all(companies.map(async (company) => {
            return await companyCard(company);
        }));

        companiesListElement.innerHTML = companyCards;
    }
};
