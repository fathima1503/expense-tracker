import { apiFetch } from './client';

export async function getIncome() {
    try {
        return await apiFetch('/income/');
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

export async function addIncome(data) {
    try {
        const result = await apiFetch('/income/', {
            method: 'POST',
            body: JSON.stringify(data),
        });
        return result;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}




