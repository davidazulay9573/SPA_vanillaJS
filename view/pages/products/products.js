import productController from "../../../controller/products.js";
import { getCompanyId } from "../../../utils/get-ids.js";
import productCard from "../../components/productCard.js";

export default async () => {
    setTimeout(async () => {
        const products = await productController.getAllProduct();
        await renderProductsList(products);

        const searchInput = document.getElementById("product-search");
        const filterTypeSelect = document.getElementById("filter-type");

        searchInput.addEventListener("keyup", async () => {
            const filter = searchInput.value.trim().toLowerCase();
            const filterType = filterTypeSelect.value;
            await renderProductsList(products, filter, filterType);
        });

        filterTypeSelect.addEventListener("change", async () => {
            const filter = searchInput.value.trim().toLowerCase();
            const filterType = filterTypeSelect.value;
            await renderProductsList(products, filter, filterType);
        });

    }, 100);

    return `
        <h1>Products</h1>
        <button><a href="#/companies/${getCompanyId()}/products/register">Register new Product</a></button>

        <div>
            <input class="search-input" type="text" id="product-search" placeholder="Search products...">
            <select id="filter-type">
                <option value="model">Search by Model</option>
                <option value="description">Search by Description</option>
            </select>
        </div>

        <ul id="products-list" class="products-list">
          
        </ul>
    `;
};

export async function renderProductsList(products, filter, filterType = 'model') {
    if (filter) {
        products = products.filter(product => {
            if (filterType === 'model') {
                return product.model.toLowerCase().includes(filter);
            } else if (filterType === 'description') {
                return product.description.toLowerCase().includes(filter);
            }
            return true;
        });
    }

    const productsListElement = document.getElementById('products-list');
  
    if (productsListElement) {
        if (!products || products.length === 0) {
            productsListElement.innerHTML = "Don't have products yet";
            return;
        }
        

        const productCards = await Promise.all(products.map(async (product) => {
            return await productCard(product);
        }));

        productsListElement.innerHTML = productCards;

        document.querySelectorAll(".delete-button").forEach(button => {
            button.addEventListener("click", async (event) => {
                event.preventDefault();
                await productController.deleteProduct(event.target.getAttribute('data-id'));
            });
        });
    }
};
