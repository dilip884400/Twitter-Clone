import { api } from "./Api";

export function fetchUsers(){
    return api.get('/users.json').then(responce=>responce.data)
}