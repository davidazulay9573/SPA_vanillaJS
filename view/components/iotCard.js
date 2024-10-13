import { getCompanyId } from "../../utils/get-ids.js"

export default (iot) => {
    return `<li class="iot-card">
                <a href="#/companies/${getCompanyId()}/products/${iot.productID}/iots/${iot.id}">
                    <p>Serial Number: ${iot.iotSN}</p>
                    <p>Contact name: ${iot.contact.name}</p>
                    <p>Contact phone: ${iot.contact.phone}</p>
                </a>
                <div class="iot-actions">
                    <button id="delete-iot" class="delete-button" data-id="${iot.id}">Delete</button>
                    <button class="update-button"><a href="#/companies/${getCompanyId()}/products/${iot.productID}/iots/${iot.id}/edit" >Edit</a></button>
                    <button><a href="#/companies/${getCompanyId()}/products/${iot.productID}/iots/${iot.id}/updates" >Updates of Iot</a></button>
                </div>
            </li>`;
};

