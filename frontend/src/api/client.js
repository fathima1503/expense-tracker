const BASE_URL = "http://127.0.0.1:8000/api";

async function refreshAccessToken() {
    const refreshToken = localStorage.getItem('refresh_token');
    const response = await fetch(`${BASE_URL}/token/refresh/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refresh: refreshToken }),
    });

    if (!response.ok) {
        throw new Error('Refresh failed');
    }

    const data = await response.json();
    localStorage.setItem('access_token', data.access);
    return data.access;
}

export async function apiFetch(endpoint, options = {}) {
    const token = localStorage.getItem('access_token');

    let response = await fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            "Authorization": token ? `Bearer ${token}` : '',
            ...options.headers,
        },
    });

    if (response.status === 401) {
        try {
            const newToken = await refreshAccessToken();
            response = await fetch(`${BASE_URL}${endpoint}`, {
                ...options,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${newToken}`,
                    ...options.headers,
                },
            });
        } catch (err) {
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            window.location.href = '/login';
            throw new Error('Session expired');
        }
    }

    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }

    return response.json();
}