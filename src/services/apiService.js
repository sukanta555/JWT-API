import axios from 'axios';

// Set the base URL for your API
const API_URL = 'http://127.0.0.1:8000/api';

// Function to register a new user
export function register(user) {
    return axios.post(API_URL + 'register', user);
}

// Function to log in a user and store the JWT token in local storage
export function login(credentials) {
    return axios.post(API_URL + 'login', credentials)
        .then(response => {
            if (response.data.access_token) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        });
}

// Function to log out the user by removing the JWT token
export function logout() {
    return axios.post(API_URL + 'logout', {}, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    }).then(response => {
        localStorage.removeItem('user');
        return response.data;
    });
}

// Function to fetch the authenticated user's details
export function getProfile() {
    return axios.get(API_URL + 'me', {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });
}

// Helper function to get the JWT token from local storage
function getToken() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user ? user.access_token : '';
}
