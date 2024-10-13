import updatesController from "../../../controller/updates.js";
import updateCard from "../../components/updateCard.js";

export default async () => {
    const updates = await updatesController.getAllUpdates();
    setTimeout(async () => {
        await renderUpdatesList(updates);

        document.getElementById("load-button").addEventListener("click", async () => await renderUpdatesList(updates));
        document.getElementById("timestamp-filter").addEventListener("change", async () => await renderUpdatesList(updates));
    }, 100);

    return `
        <h1>Updates</h1>
        <button id="load-button"> Load New Updates</button>

        <div>
             <input type="date" id="timestamp-filter" placeholder="Filter by Date">
        </div>

        <ul id="updates-list" class="updates-list">
            <!-- The update list will be rendered here -->
        </ul>
    `;
};

export async function renderUpdatesList(updates){
  
    const updatesListElement = document.getElementById('updates-list');
    const timestampFilter = document.getElementById('timestamp-filter').value;

    if (updatesListElement) {
        let filteredUpdates = updates;

        if (timestampFilter) {
            filteredUpdates = updates.filter(update => {
                const updateDate = new Date(update.timestamp).toISOString().split('T')[0];
                return updateDate === timestampFilter;
            });
        }

        if (!filteredUpdates || filteredUpdates.length === 0) {
            updatesListElement.innerHTML = "Don't have updates yet";
        } else {
            updatesListElement.innerHTML = filteredUpdates.map(update => updateCard(update)).join('</br></br>');
        }
    }
};
