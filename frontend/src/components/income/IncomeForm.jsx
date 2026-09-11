import { useState } from "react";
import { addIncome } from "../../api/income";


export default function IncomeForm({onIncomeAdded}) {

    const [formData,setFormData] = useState({
        source: '',
        amount:'',
        month: '',
    });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await addIncome(formData);
        setFormData({ source: '', amount: '', month: '' });
        onIncomeAdded();
    }


    return (
        <form onSubmit={handleSubmit}>
            <input name="source" value={formData.source} onChange={handleChange} />
            <input name="amount" value={formData.amount} onChange={handleChange} />
            <input name="month" value={formData.month} onChange={handleChange} type="date" />
            <button type="submit">Submit</button>
        </form>
    );
}