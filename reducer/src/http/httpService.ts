import axios from "axios";

const api = axios

api.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

export interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}


class HttpServices {
    static async getTodos() {
        const response = await api.get<ITodo[]>('/todos?_limit=10')
        return response
    }

    static async getUsers() {
        const response = await api.get<User[]>('/users')
        return response
    }
}

export default HttpServices