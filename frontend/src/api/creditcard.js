import { apiFetch } from "./client";
export async function getCreditCards() {
    try {
        return await apiFetch('/creditcard/');
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

export async function addCreditCard(data) {
    try {
        const result = await apiFetch('/creditcard/', {
            method: "POST",
            body: JSON.stringify(data),
        });
        return result;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

export async function payCreditCard(id,data) {
    try {
        const result = await apiFetch(`/creditcard/${id}/pay/`, {
            method: "POST",
            body: JSON.stringify(data),
        });
        return result;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}
