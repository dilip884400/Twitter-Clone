import { api } from "./Api";

export function fetchTweets(){
    return api.get('/tweets.json').then(responce=>responce.data)
}