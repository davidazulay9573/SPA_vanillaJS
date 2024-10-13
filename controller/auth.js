import authModel from "../model/auth.js";
import { globalState } from "../index.js";

export const login = async (credentials) => {
    try {
        const token = await authModel.login(credentials);
        console.log(token);
        
        Cookies.set('auth', JSON.stringify(token), { expires: 7 }); 
      
        globalState.isLoggedIn = true;
        globalState.authToken = JSON.parse(Cookies.get('auth'));

        location.hash = `#/`; 
        location.reload();

    } catch (error) {
        alert('Error logging in: ' + error);
    }
};

export const register = async (user) => {
    try {
        await authModel.register(user);
        await login(user);
    } catch (error) {
        alert('Error registering company: ' + error);
    }
};

export const logout = () => {
    Cookies.remove('auth');
    globalState.isLoggedIn = false;
    globalState.authToken = null;
    location.reload();
}


export default {
    register,
    login,
    logout,
}
