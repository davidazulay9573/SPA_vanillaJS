export default (update) => {

    const timestamp = new Date(update.timestamp);
    const date = timestamp.toLocaleDateString();
    const time = timestamp.toLocaleTimeString();

    return `
        <li class="update-card">
            <p>Date: ${date}</p>
            <p>Time: ${time}</p>
            <p>Data: ${JSON.stringify({...update, timestamp: undefined})}</p>
            <div class="iot-actions">
                <!-- Add any additional actions or buttons here -->
            </div>
        </li>
    `;
};
