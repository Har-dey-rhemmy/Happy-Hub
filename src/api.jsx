import axios from 'axios';

const client = axios.create({
    baseURL: '/api',
});

export const registerUser = async(userData) => {
    try {
        const response = await client.post('/register/', userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const loginUser = async(credentials) => {
    try {
        const response = await client.post('/login/', credentials);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const checkAuthentication = async() => {
    try {
        const response = await client.get('/user/');
        return response.data;
    } catch (error) {
        throw error;
    }
};