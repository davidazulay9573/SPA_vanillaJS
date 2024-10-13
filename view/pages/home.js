import { globalState } from "../../index.js"
import companyController from "../../controller/company.js";
import notFound from "../components/notFound.js";

export default async () => {
  
      return globalState.isLoggedIn
      ?   
      `    <div>
             <h1> Generic Iot Infrastructure </h1>
             <button><a href="#/companies">See Your Companies</a></button>
          </div>
      `
      :  `
      <div>
          <h3>Already registered? <a href="#/auth/login">Login</a></h3>
          <h3>Not registered yet? <a href="#/auth/register">Register</a></h3>
     </div>
   `;
 
   
}