
export default function ExpenseList({expenses}) {
    
    return (
        <div>
            {expenses.map((expense) => (
                <p key={expense.id}>{expense.date} : {expense.category} : {expense.amount} : {expense.note}</p>
            ))}
        </div>
    );
}