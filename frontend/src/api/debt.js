import { apiFetch } from './client';

export async function getDebts() {
    try {
        return await apiFetch('/debt/');
    } catch (error) {
        console.error(error.message);
        return [];
    }
}
export async function addDebt(data) {
    try {
        const result = await apiFetch('/debt/', {
            method: 'POST',
            body: JSON.stringify(data),
        });
        return result;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

export async function payDebt(id,data) {
    try {
        const result = await apiFetch(`/debt/${id}/pay/`, {
            method: "POST",
            body: JSON.stringify(data),
        });
        return result;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

