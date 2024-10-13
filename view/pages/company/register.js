import companyController from "../../../controller/company.js";

export default () => {
    setTimeout(() => {
        document.getElementById("register-company").addEventListener("submit", async (event) => {
            event.preventDefault();
            const formData = getFormData(event);
            if (formData) {
                await companyController.registerCompany(formData);
            }
        });
    }, 100);
   
    return `
        <h1>Register Company</h1>
        <form id="register-company">    
            <fieldset class="register-company">
                <legend>Company Information</legend>
                <label for="company-name">Company Name:</label>
                <input type="text" id="company-name" name="name" placeholder="Name" required>
            </fieldset>
            
            <fieldset class="address-form">
                <legend>Address</legend>
                <label for="street">Street:</label>
                <input type="text" id="street" name="address.street" placeholder="Street" required>
                
                <label for="street-number">Street Number:</label>
                <input type="number" id="street-number" name="address.streetNumber" placeholder="Street Number" required>
                
                <label for="city">City:</label>
                <input type="text" id="city" name="address.city" placeholder="City" required>
                
                <label for="country">Country:</label>
                <input type="text" id="country" name="address.country" placeholder="Country" required>
                
                <label for="postal-code">Postal Code:</label>
                <input type="number" id="postal-code" name="address.postalCode" placeholder="Postal Code" required>
            </fieldset>

            <fieldset class="payment-form">
                <legend>Payment Information</legend>
                <label for="card-number">Card Number:</label>
                <input type="text" id="card-number" name="payment.cardNumber" placeholder="Card Number" required>
                
                <label for="cvv">CVV:</label>
                <input type="number" id="cvv" name="payment.cvv" placeholder="CVV" required>
                
                <label for="holder-name">Card Holder Name:</label>
                <input type="text" id="holder-name" name="payment.holderName" placeholder="Card Holder Name" required>
                
                <label for="holder-id">Card Holder ID:</label>
                <input type="text" id="holder-id" name="payment.holderID" placeholder="Card Holder ID" required>
                
                <label for="expiry-date">Expiry Date:</label>
                <input type="date" id="expiry-date" name="payment.expiryDate" required>
            </fieldset>

            <fieldset class="contact-form">
                <legend>Contact Information</legend>
                <label for="contact-name">Contact Name:</label>
                <input type="text" id="contact-name" name="contact.name" placeholder="Contact Name" required>
                
                <label for="contact-phone">Contact Phone:</label>
                <input type="tel" id="contact-phone" name="contact.phone" placeholder="Contact Phone" required>
                
                <label for="contact-email">Contact Email:</label>
                <input type="email" id="contact-email" name="contact.email" placeholder="Contact Email" required>
            </fieldset>
            
            <button type="submit">Register</button>
        </form>
    `;
}

function getFormData(event) {
    const form = event.target;

    const name = form.name.value;
    
    const street = form['address.street'].value;
    const streetNumber = form['address.streetNumber'].value;
    const city = form['address.city'].value;
    const country = form['address.country'].value;
    const postalCode = form['address.postalCode'].value;
    
    const cardNumber = form['payment.cardNumber'].value;
    const cvv = form['payment.cvv'].value;
    const holderName = form['payment.holderName'].value;
    const holderID = form['payment.holderID'].value;
    const expiryDate = form['payment.expiryDate'].value;
    
    const contactName = form['contact.name'].value;
    const contactPhone = form['contact.phone'].value;
    const contactEmail = form['contact.email'].value;

    if (!name || !street || !streetNumber || !city || !country || !postalCode || 
        !cardNumber || !cvv || !holderName || !holderID || !expiryDate || 
        !contactName || !contactPhone || !contactEmail) {
        alert('Please fill in all fields.');
        return null;
    }

    return {
        name,
        address: {
            street,
            streetNumber: parseInt(streetNumber, 10),
            city,
            country,
            postalCode: parseInt(postalCode, 10)
        },
        payment: {
            cardNumber,
            cvv: parseInt(cvv, 10),
            holderName,
            holderID,
            expiryDate
        },
        contact: {
            name: contactName,
            phone: contactPhone,
            email: contactEmail
        }
    };
}
