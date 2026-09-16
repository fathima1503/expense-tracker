import { useState } from "react";
import { addDebt } from "../../api/debt";

export default function DebtForm({onDebtAdded}) {

    const [formData,setFormData] = useState({
                name: '',
                total_amount: '',
                remaining_amount:'',
            });
        
            function handleChange(e) {
                setFormData({
                    ...formData,
                    [e.target.name] : e.target.value
                });
            }
    
        async function handleSubmit(e) {
            e.preventDefault();
            await addDebt(formData);
            setFormData({ name: '', total_amount: '', remaining_amount:'',});
            onDebtAdded();
        }

        return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={formData.name} onChange={handleChange}/>
            <input name="total_amount" value={formData.total_amount} onChange={handleChange} />
            <input name="remaining_amount" value={formData.remaining_amount} onChange={handleChange}  />
            <button type="submit">Submit</button>
        </form>
    )
    
}