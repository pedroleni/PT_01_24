import axios from 'axios';
import { updateToken } from '../utils';

// las headers de nuestro servicio

const APIHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${updateToken()}`,
}

// llamada al servicio --> url del backend

export const APIuser = axios.create({
    // en vuestro caso la url es https://localhost:PORT/api/v1
    baseURL: `https://node-user-production.up.railway.app/api/v1`,
    headers: APIHeaders,
    timeout: 60000,
});