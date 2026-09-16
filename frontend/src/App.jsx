import CreditCardSection from "./components/creditcard/CreditCardSection";
import DebtSection from "./components/debt/DebtSection";
import ExpenseSection from "./components/expense/ExpenseSection";
import IncomeSection from "./components/income/IncomeSection";


function App() {
  return (
    <div>
      <IncomeSection/>
      <ExpenseSection/>
      <DebtSection/>
      <CreditCardSection/>
    </div>
  );
}

export default App;