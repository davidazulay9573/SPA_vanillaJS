import { getCompanyId } from "../../utils/get-ids.js";
 
export default (product) => {

    return `<li class="product-card">
                <a href="#/companies/${getCompanyId()}/products/${product.id}">
                    <p>ID: ${product.id}</p>
                    <p>Model: ${product.model}</p>
                    <p>Description: ${product.description}</p>
                </a>
                <div class="product-actions">
                    <button id="delete-product" class="delete-button" data-id="${product.id}">Delete</button>
                    <button> <a href="#/companies/${getCompanyId()}/products/${product.id}/edit" >Edit</a></button>
                    <button> <a href="#/companies/${getCompanyId()}/products/${product.id}/iots" >Iots of product</a></button>
                </div>
            </li>`;
};
