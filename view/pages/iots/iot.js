import iotController from "../../../controller/iots.js";
import notFound from "../../components/notFound.js"
import iotCard from "../../components/iotCard.js";

export default async (params) => {
    setTimeout(() => {
        document.getElementById("delete-iot").addEventListener("click", async (event) => {
            event.preventDefault();
            await iotController.deleteIot(event.target.getAttribute('data-id'));
        });
    }, 100);

    const iot = await iotController.getIot(params[2]); 
    if (iot == null){
        return notFound();
    }
       
    return iotCard(iot);
};

