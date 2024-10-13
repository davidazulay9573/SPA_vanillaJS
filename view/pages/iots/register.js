import { createIot } from "../../../controller/iots.js";

export default () => {
    setTimeout(() => {
        document.getElementById("register-iot").addEventListener("submit", async (event) => {
            event.preventDefault();
            await createIot(getFormData(event));
        });
    }, 100);

    return ` 
        <div class="form-box">
            <h1>Register IoT</h1>
            <form id="register-iot">
                <label for="iot-sn"></label>
                <input type="text" id="iot-sn" name="iotSN" placeholder="IoT Serial Number" required>

                <label for="iot-contact-name"></label>
                <input type="text" id="iot-contact-name" name="contactName" placeholder="Contact Name" required>

                <label for="iot-contact-phone"></label>
                <input type="text" id="iot-contact-phone" name="contactPhone" placeholder="Contact Phone" required>
                
                <button type="submit">Register</button>
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
