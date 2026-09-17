const url = "http://127.0.0.1:8000/api/dashboard/"

export async function getDashboard() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error.message);
        return { remaining_in_hand: 0, total_debt: 0, total_credit_card: 0 };
    }
}