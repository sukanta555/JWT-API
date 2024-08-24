import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Make sure this URL is correct

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { email, password });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
