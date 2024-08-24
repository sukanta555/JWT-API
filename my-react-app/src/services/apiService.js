import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Your Laravel API URL

// Function to log in the user
export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { email, password });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Other API calls like register, refresh token, etc., can be added here.
