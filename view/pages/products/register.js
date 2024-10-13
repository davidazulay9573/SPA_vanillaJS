import { createProduct } from "../../../controller/products.js";

export default () => {
    setTimeout(() => {
        document.getElementById("register-product").addEventListener("submit", async (event) => {
            event.preventDefault();
            const formData = getFormData(event);
            if (formData) {
                await createProduct(formData);
            }
        }, 100);
    });

    return ` 
        <div class="form-box">
            <h1>Register Product</h1>
            <form id="register-product">
                <label for="model"></label>
                <input type="text" id="product-model" name="model" placeholder="Model" required>

                <label for="description"></label>
                <input type="text" id="product-description" name="description" placeholder="Description" required>

                <button type="submit">Register</button>
            </form>
        </div>
    `;
}

function getFormData(event) {
    const form = event.target;
    const model = form.model.value;
    const description = form.description.value;

    if (!model || !description) {
        alert('Please fill in all fields.');
        return null;
    }
   
    return { model, description };
}
