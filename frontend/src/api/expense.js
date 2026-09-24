import { apiFetch } from './client';

export async function getExpense() {
    try {
        return await apiFetch('/expense/');
    } catch (error) {
        console.error(error.message);
        return [];
    }
}


export async function addExpense(data) {
    try {
        const result = await apiFetch('/expense/', {
            method: 'POST',
            body: JSON.stringify(data),
        });
        return result;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}