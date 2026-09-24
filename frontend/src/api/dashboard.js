import { apiFetch } from "./client";

export async function getDashboard() {
    try {
        return await apiFetch('/dashboard/');
    } catch (error) {
        console.error(error.message);
        return { remaining_in_hand: 0, total_debt: 0, total_credit_card: 0 };
    }
}