import { useState } from "react";
import { payDebt } from "../../api/debt";

export default function DebtPayForm({debt,onPaymentDone}) {
    const [amount,setAmount] = useState('')
    const [date,setDate] = useState('')

    async function handleSubmit(e) {
                e.preventDefault();
                await payDebt(debt.id, {amount, date});
                setAmount('');
                setDate('');
                onPaymentDone();
            }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="amount" value={amount} onChange={(e) => setAmount(e.target.value)}/>
                <input name="date" value={date} type="date" onChange={(e) => setDate(e.target.value)}/>
                <button type="submit">Confirm Payment</button>
            </form>
        </div>
    )
}