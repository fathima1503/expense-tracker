import { useState } from "react";
import { addCreditCard } from "../../api/creditcard";

export default function CreditCardForm({onCardAdded}) {

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
            await addCreditCard(formData);
            setFormData({ name: '', total_amount: '', remaining_amount:'',});
            onCardAdded();
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