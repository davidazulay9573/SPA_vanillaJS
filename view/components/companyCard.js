export default (company) => {

    const { id, name, address, payment, contact } = company;

    return `
        <li class="company-details">
        
            <h2>Company Details</h2>
            <h3>Company ID: <span class="company-id">${id}</span></h3>
            <h4>Name: ${name}</h4>

            <div class="info-container">
                <div class="company-card">
                    <h3>Address</h3>
                    <p>Street: ${address.street}</p>
                    <p>Street Number: ${address.streetNumber}</p>
                    <p>City: ${address.city}</p>
                    <p>Country: ${address.country}</p>
                    <p>Postal Code: ${address.postalCode}</p>
                </div>

                <div class="company-card">
                    <h3>Payment Information</h3>
                    <p>Card Number: ${payment.cardNumber}</p>
                    <p>CVV: ${payment.cvv}</p>
                    <p>Holder Name: ${payment.holderName}</p>
                    <p>Holder ID: ${payment.holderID}</p>
                    <p>Expiry Date: ${payment.expiryDate}</p>
                </div>

                <div class="company-card">
                    <h3>Contact Details</h3>
                    <p>Name: ${contact.name}</p>
                    <p>Phone: ${contact.phone}</p>
                    <p>Email: ${contact.email}</p>
                </div>
            </div>
              <button> <a href=#/companies/${company.id}/products >Products of Company</a></button>
        </li>
    `;
};
