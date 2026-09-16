import { useState } from "react";
import DebtPayForm from "./DebtPayForm";

export default function DebtList({debts,refreshDebts}) {
    const [filter,setFilter] = useState('all')
    const [payingId,setPayingId] = useState(null)

    const filteredDebts = debts.filter((debt) => {
        if (filter === 'all') return true;
        if (filter === 'pending') return Number(debt.remaining_amount) > 0;
        if (filter === 'paid') return Number(debt.remaining_amount) === 0;
    });
    return (
        <div>
            <div>
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('pending')}>Pending</button>
                <button onClick={() => setFilter('paid')}>Paid</button>
            </div>
            {filteredDebts.map((debt) => (
                <div key={debt.id}>
                    <p >{debt.name} : ₹{debt.total_amount} : ₹{debt.remaining_amount}</p>
                    <button onClick={() => setPayingId(debt.id)}>Log Payment</button>
                    {payingId === debt.id && (
                        <DebtPayForm debt={debt} onPaymentDone={ () => {
                            refreshDebts();
                            setPayingId(null);
                        }} />
                    )}
                </div>
            ))}
        </div>
    )
}