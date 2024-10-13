import iotController from "../../../controller/iots.js";
import { getIotId } from "../../../utils/get-ids.js";
import notFound from "../../components/notFound.js"

export default async () => {
    const iot = await iotController.getIot(getIotId()); 
    if (iot == null){
        return notFound();
    }

    setTimeout(() => {
        document.getElementById("edit-iot").addEventListener("submit", async (event) => {
            event.preventDefault();
            await iotController.editIot(getFormData(event));
            
        });
    }, 100);

    return ` 
        <div class="form-box">
            <h1>Edit IoT</h1>
            <form id="edit-iot">
                <label for="iot-sn"></label>
                <input type="text" id="iot-sn" name="iotSN" value="${iot.iotSN}" placeholder="IoT Serial Number" required>

                <label for="iot-contact-name"></label>
                <input type="text" id="iot-contact-name" name="contactName" value="${iot.contact.name}" placeholder="Contact Name" required>

                <label for="iot-contact-phone"></label>
                <input type="text" id="iot-contact-phone" name="contactPhone" value="${iot.contact.phone}" placeholder="Contact Phone" required>
                
                <button type="submit">Edit</button>
            </form>
        </div>
`;
}

function getFormData(event){
    const form = event.target;

    const iotSN = form['iotSN'].value;
    const name = form['contactName'].value;
    const phone = form['contactPhone'].value;

    if (!iotSN || !name || !phone) {
        alert('Please fill in all fields.');
        return false;
    }

    return {
        iotSN,
        contact: {
            name,
            phone
        }
    };
}
