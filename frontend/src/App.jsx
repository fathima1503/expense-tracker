import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import IncomeSection from './components/income/IncomeSection';
import ExpenseSection from './components/Expense/ExpenseSection';
import DebtSection from './components/Debt/DebtSection';
import CreditCardSection from './components/CreditCard/CreditCardSection';
import Login from './components/Login';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
    return (
        <BrowserRouter>
            <Navbar/>

            <Routes>
                <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                <Route path="/income" element={<ProtectedRoute><IncomeSection /></ProtectedRoute>} />
                <Route path="/expense" element={<ProtectedRoute><ExpenseSection/></ProtectedRoute>} />
                <Route path="/debt" element={<ProtectedRoute><DebtSection/></ProtectedRoute>} />
                <Route path="/creditcard" element={<ProtectedRoute><CreditCardSection /></ProtectedRoute>}/>
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;