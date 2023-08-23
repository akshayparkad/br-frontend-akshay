import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts";

export function getAllPost(){
    return axios.get(BASE_URL);
}