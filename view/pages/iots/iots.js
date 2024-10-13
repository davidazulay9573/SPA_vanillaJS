import iotController from "../../../controller/iots.js";
import { getCompanyId, getProductId } from "../../../utils/get-ids.js";
import iotCard from "../../components/iotCard.js";

export default async () => {
    setTimeout(async () => {
        const iots = await iotController.getAllIots();
        await renderIotsList(iots);

        const searchInput = document.getElementById("iot-search");
        const filterTypeSelect = document.getElementById("filter-type");

        searchInput.addEventListener("keyup", async () => {
            const filter = searchInput.value.trim().toLowerCase();
            const filterType = filterTypeSelect.value;
            await renderIotsList(iots, filter, filterType);
        });

        filterTypeSelect.addEventListener("change", async () => {
            const filter = searchInput.value.trim().toLowerCase();
            const filterType = filterTypeSelect.value;
            await renderIotsList(iots, filter, filterType);
        });
    }, 0);

    return `
        <h1>iots</h1>
        <button> <a href="#/companies/${getCompanyId()}/products/${getProductId()}/iots/register" >Register new Iot</a></button>
        <div>
             <input class="search-input" type="text" id="iot-search" placeholder="Search products...">
             <select id="filter-type">
                <option value="iotSN">Search by Serial Number</option>
                <option value="contact-name">Search by Contact Name</option>
                <option value="contact-phone">Search by Contact Phone</option>
             </select>
        </div>
        <div id="iots-list" class="iots-list">
            <!-- The iot list will be rendered here -->
        </div>
    `;
};

export const renderIotsList = async (iots, filter, filterType = "iotSN") => {
    const iotsListElement = document.getElementById('iots-list');
    if (filter) {
        iots = iots.filter(iot => {
            if (filterType == "iotSN"){
                return iot.iotSN.toLowerCase().includes(filter);
            }else if (filterType == "contact-name"){
                return iot.contact.name.toLowerCase().includes(filter);
            }else if(filterType == "contact-phone"){
                return iot.contact.phone.toLowerCase().includes(Number.parseInt(filter));
            }

            return true;
        });
    }

    if (iotsListElement) {
        if (!iots || iots.length == 0) {
            iotsListElement.innerHTML = "Don't have iots yet";
            return;
        } 

        iotsListElement.innerHTML = iots.map(iot => iotCard(iot)).join('');
        document.querySelectorAll(".delete-button").forEach((iotCard) => {
            iotCard.addEventListener("click", async (event) => {
                event.preventDefault();
                await iotController.deleteIot(event.target.getAttribute('data-id'));
            });
        });
    }
};
