
export default function IncomeList({incomes}) {
    
    return (
        <div>
            {incomes.map((income) => (
                <p key={income.id}> {income.source}: {income.amount}</p>
            ))}
        </div>
    );
}