
import { useState,useEffect } from "react";
import DebtForm from "./DebtForm";
import DebtList from "./DebtList";
import { getDebts } from "../../api/debt";


export default function DebtSection() {
  const [debt,setDebt] =useState([])

  async function refreshDebts() {
    const data = await getDebts();
    setDebt(data);
  }

  useEffect(() => {
    refreshDebts();
  }, []);

  return (
    <div>
      <DebtForm onDebtAdded={refreshDebts}/>
      <DebtList debts={debt} refreshDebts={refreshDebts}/>
      
    </div>
  );   
}