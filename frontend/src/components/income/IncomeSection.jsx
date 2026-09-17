import IncomeList from "./IncomeList";
import IncomeForm from "./IncomeForm";
import { useState,useEffect } from "react";
import { getIncome } from "../../api/income";

export default function IncomeSection() {
  const [incomes,setIncomes] =useState([])

  async function refreshIncomes() {
    const data = await getIncome();
    setIncomes(data);
  }

  useEffect(() => {
    refreshIncomes();
  }, []);

  return (
    <div>
      <h1>Income</h1>
      <IncomeForm onIncomeAdded={refreshIncomes}/>
      <IncomeList incomes={incomes}/>
      
    </div>
  );   
}