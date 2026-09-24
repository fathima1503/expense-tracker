import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    function handleLogout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        navigate('/login');
    }

    if (location.pathname === '/login') {
        return null;
    }

    return (
        <nav>
            <Link to="/">Dashboard</Link>
            <Link to="/income">Income</Link>
            <Link to="/expense">Expense</Link>
            <Link to="/debt">Debt</Link>
            <Link to="/creditcard">Credit Card</Link>
            <button onClick={handleLogout}>Logout</button>
        </nav>
    );
}