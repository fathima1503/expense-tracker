import { useState } from "react";
import CreditCardPayForm from "./CreditCardPayForm";

export default function CreditCardList({ cards,refreshCards }) {
    const [payingId,setPayingId] = useState(null)
    return (
        <div>
            {cards.map((card) => {
                const amountPaid = Number(card.total_amount)- Number(card.remaining_amount)
                return (
                    <div key={card.id}>
                        <p >{card.name} : ₹{card.total_amount} : ₹{amountPaid} : ₹{card.remaining_amount}</p>
                        <button onClick={() => setPayingId(card.id)}>Log Payment</button>
                        {payingId === card.id && (
                            <CreditCardPayForm card={card} onPaymentDone={ () => {
                                refreshCards();
                                setPayingId(null);
                            }}/>
                        )}

                    </div>
                );
            })}
        </div>
    );
}