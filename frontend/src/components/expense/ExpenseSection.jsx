
import { useState,useEffect } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseForm from "./ExpenseForm";
import { getExpense } from "../../api/expense";


export default function ExpenseSection() {
  const [expense,setExpense] =useState([])

  async function refreshExpenses() {
    const data = await getExpense();
    setExpense(data);
  }

  useEffect(() => {
    refreshExpenses();
  }, []);

  return (
    <div>
      <h1>Expenses</h1>
      <ExpenseForm onExpenseAdded={refreshExpenses}/>
      <ExpenseList expenses={expense}/>
      
    </div>
  );   
}