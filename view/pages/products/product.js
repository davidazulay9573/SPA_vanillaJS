import productController from "../../../controller/products.js";
import notFound from "../../components/notFound.js"
import productCard from "../../components/productCard.js";

export default async (params) => {
    setTimeout(() => {
        document.getElementById("delete-product").addEventListener("click", async (event) => {
            event.preventDefault();
            await productController.deleteProduct(event.target.getAttribute('data-id'));
        });
       
    }, 1000);

    const product = await productController.getProduct(params[1]); 
    if (product == null){
        return notFound();
    }

    return productCard(product);
};

