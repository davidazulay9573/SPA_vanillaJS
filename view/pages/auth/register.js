import { register } from "../../../controller/auth.js";

export default () => {
    setTimeout(() => { 
        document.getElementById("register").addEventListener("submit", async (event) => {
            event.preventDefault();
            await register(getFormData(event));
        });
    }, 100);

    return `
        <div class="form-box">
            <h1>register</h1>

            <form id="register">
                <label for="name"></label>
                <input type="email" id="email" name="email" placeholder="Email" required>
                
                <label for="password"></label>
                <input type="password" id="password" name="password" placeholder="Password" required>
              
                <button type="submit">register</button>
            </form>     
        </div>
    `;
}

function getFormData(event){
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    if (!email || !password) {
        alert('Please fill in all fields.');
        return null;
    }

    return { email, password };
};
