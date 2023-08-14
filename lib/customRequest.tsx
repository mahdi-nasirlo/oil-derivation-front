import axios from "axios";

export const customRequest = axios.create({
    baseURL: process.env['NEXT_PUBLIC_API_URL'],
    timeout: 1000,
    // adapter: fetchAdapter,
    headers: {'Content-Type': 'application/json'}
});