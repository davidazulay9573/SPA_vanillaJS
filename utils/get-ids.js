import { globalState } from "../index.js";

export function getCompanyId() {
    const url = window.location.hash;
   
    const match = url.match(/\/companies\/(\w+)/);
    if (match && match[1]) {
        return match[1];
    }
    return null;
}

export function getProductId() {
    const url = window.location.hash;
   
    const match = url.match(/\/products\/(\w+)/);
    if (match && match[1]) {
        return match[1];
    }
    return null;
}

export function getIotId() {
    const url = window.location.hash;
   
    const match = url.match(/\/iots\/(\w+)/);
    if (match && match[1]) {
        return match[1];
    }
    return null;
}
