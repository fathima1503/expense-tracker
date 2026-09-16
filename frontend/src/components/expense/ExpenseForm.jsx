import { useState } from "react";
import {addExpense} from "../../api/expense"



export default function ExpenseForm({onExpenseAdded}) {

    const [formData,setFormData] = useState({
            date: '',
            category: '',
            amount:'',
            note: '',
        });
    
        function handleChange(e) {
            setFormData({
                ...formData,
                [e.target.name] : e.target.value
            });
        }

    async function handleSubmit(e) {
        e.preventDefault();
        await addExpense(formData);
        setFormData({ date: '', category:'', amount: '', note: '' });
        onExpenseAdded();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input name="date" value={formData.date} onChange={handleChange} type="date" />
            <select name="category" value={formData.category} onChange={handleChange}>
                <option value="emi">EMI</option>
                <option value="grocery">Grocery</option>
                <option value="clothes">Clothes</option>
                <option value="rent">Rent</option>
                <option value="other">Other</option>
            </select>
            <input name="amount" value={formData.amount} onChange={handleChange} />
            <input name="note" value={formData.note} onChange={handleChange}  />
            <button type="submit">Submit</button>
        </form>
    )
}