import { useState,useEffect } from "react";
import { getDashboard } from "../api/dashboard";

export default function Dashboard() {
    const [dashboard, setDashboard] = useState({
        remaining_in_hand: 0,
        total_debt: 0,
        total_credit_card: 0,
    });

    async function refreshDashboard() {
        const data = await getDashboard();
        setDashboard(data);
    }

    useEffect(() => {
        refreshDashboard();
    },[]);

    return (
        <div>
            <h1>Remaining amount : ₹{dashboard.remaining_in_hand}</h1>
            <h1>Total Debt : ₹{dashboard.total_debt}</h1>
            <h1>Total Credit Card : ₹{dashboard.total_credit_card}</h1>
        </div>
    )
}