import  productController from "../../../controller/products.js";
import { getProductId } from "../../../utils/get-ids.js";
import notFound from "../../components/notFound.js";
import { renderProductsList } from "./products.js";

export default async () => {
    const product = await productController.getProduct(getProductId());

    if (product == null) {
        return notFound();
    }

    setTimeout(() => {
        document.getElementById("edit-product").addEventListener("submit", async (event) => {
            event.preventDefault();
            await productController.editProduct(getFormData(event));
        }, 100);
    });

    return ` 
        <div class="form-box">
            <h1>Edit Product</h1>
            <form id="edit-product">
                <label for="model"></label>
                <input type="text" id="product-model" name="model" value="${product.model}" placeholder="Model" required>

                <label for="description"></label>
                <input type="text" id="product-description" name="description" value="${product.description}" placeholder="Description" required>

                <button type="submit">Edit</button>
            </form>
        </div>
    `;
}

function getFormData(event){
    const form = event.target;
    const model = form.model.value;
    const description = form.description.value;

    if (!model || !description) {
        alert('Please fill in all fields.');
        return null;
    }
   
    return { model, description };
}
