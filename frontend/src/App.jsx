import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import IncomeSection from './components/income/IncomeSection';
import ExpenseSection from './components/Expense/ExpenseSection';
import DebtSection from './components/Debt/DebtSection';
import CreditCardSection from './components/CreditCard/CreditCardSection';

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Dashboard</Link>
                <Link to="/income">Income</Link>
                <Link to="/expense">Expense</Link>
                <Link to="/debt">Debt</Link>
                <Link to="/creditcard">Credit Card</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/income" element={<IncomeSection />} />
                <Route path="/expense" element={<ExpenseSection />} />
                <Route path="/debt" element={<DebtSection />} />
                <Route path="/creditcard" element={<CreditCardSection />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;