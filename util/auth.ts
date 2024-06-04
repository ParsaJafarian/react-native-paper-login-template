import axios from "axios";

const API_KEY = process.env.EXPO_PUBLIC_FIREBASE_API_KEY;

export async function createUser(email: string, password: string) {
    const data = { email, password, returnSecureToken: true };
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
    
    axios.post(url, data).catch((error) => console.error(error));
}

export async function loginUser(email: string, password: string) {
    const data = { email, password, returnSecureToken: true };
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

    axios.post(url, data).catch((error) => console.error(error));
}