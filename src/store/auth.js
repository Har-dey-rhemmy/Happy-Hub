import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-type": "application/json"
    }
});

export const loginUser = async(email, password) => {
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.json();

        localStorage.SetItemm('token', data.token);

        return true;
    } catch (error) {
        console.error('Login error:', error);
        return false;
    }
};

export const getToken = () => {
    return localStorage.getItem('token');
};