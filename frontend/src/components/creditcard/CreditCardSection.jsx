
import { useState,useEffect } from "react";
import CreditCardForm from "./CreditCardForm";
import CreditCardList from "./CreditCardList";
import { getCreditCards } from "../../api/creditcard";


export default function CreditCardSection() {
  const [card,setCard] =useState([])

  async function refreshCards() {
    const data = await getCreditCards();
    setCard(data);
  }

  useEffect(() => {
    refreshCards();
  }, []);

  return (
    <div>
      <h1>Credit Cards</h1>
      <CreditCardForm onCardAdded={refreshCards}/>
      <CreditCardList cards={card} refreshCards={refreshCards}/>
      
    </div>
  );   
}