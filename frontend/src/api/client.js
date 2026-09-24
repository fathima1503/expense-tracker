const BASE_URL = "http://127.0.0.1:8000/api";

export async function apiFetch(endpoint, options = {}) {
    const token = localStorage.getItem('access_token');

    const response = await fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            "Authorization": token ? `Bearer ${token}` : '',
            ...options.headers,
        },
    });

    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }

    return response.json();
}