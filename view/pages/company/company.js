import { getCompany } from "../../../model/company.js"
import companyCard from "../../components/companyCard.js"

export default async (params) => {
    const company = await getCompany(params[0]);

    return companyCard(company);
}

