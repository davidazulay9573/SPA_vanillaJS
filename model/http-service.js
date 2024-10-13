import { logout } from "../controller/auth.js";
import { globalState } from "../index.js";
export const BASE_ENDPOINT = `http://localhost:8080`;


const GET = async (END_POINT) => { 
    const response = await fetch(END_POINT, {
        method :"GET",
        headers :{
            "auth" : globalState.authToken.token
        },
    });

    if (response.status == 401){
        logout();
    }

    if (!response.ok) {    
        const errorBody = await response.json();
        throw new Error(`HTTP error! ${JSON.stringify(errorBody.message)}`);
    }
    
    return await response.json();
}

const POST = async (END_POINT, data) => {
    
    const response = await fetch(END_POINT, {
        method: 'POST',
        headers: {
            "auth" :globalState.authToken?.token,
            'Content-Type': 'application/JSON'
        },
        body: JSON.stringify(data)
    });

    if (response.status == 401){
        logout();
    }

    if (!response.ok) {    
        const errorBody = await response.json();
        throw new Error(`HTTP error! ${JSON.stringify(errorBody.message)}`);
    }

    return await response.json();
    
}

const PUT = async (END_POINT, data) => {
    const response = await fetch(END_POINT, {
        method: 'PUT',
        headers: {
            "auth" :globalState.authToken.token,
            'Content-Type': 'application/JSON'
        },
        body: JSON.stringify(data)
    });

    if (response.status == 401){
        logout();
    }

    if (!response.ok) {    
        const errorBody = await response.json();
        throw new Error(`HTTP error! ${JSON.stringify(errorBody.message)}`);
    }

    return await response.json();
}

const DELETE = async (END_POINT) => {
    const response = await fetch(END_POINT, {
        method: 'DELETE',
        headers :{
            "auth" :globalState.authToken.token
        }
    });
       
    if (response.status == 401){
        logout();
    }

    if (!response.ok) {    
        const errorBody = await response.json();
        throw new Error(`HTTP error! ${JSON.stringify(errorBody.message)}`);
    }
}

export default {
    GET,
    PUT,
    POST,
    DELETE
}