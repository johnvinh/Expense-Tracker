import Header from './Header';
import AddExpense from './AddExpense';
import Expenses from './Expenses';
import {useState, useEffect} from 'react';

function App()
{
        const [expenses, setExpenses] = useState([]);

        // Load in existing expenses from localstorage
        useEffect(() =>
        {
                setExpenses(JSON.parse(localStorage.getItem('expenses') as string) ?? []);
        }, []);

        // Update localstorage whenever a new expense is added
        useEffect(() =>
        {
                localStorage.setItem('expenses', JSON.stringify(expenses));
        }, [expenses]);

        return (
                <>
                        <Header/>
                        <AddExpense expenses={expenses} setExpenses={setExpenses} />
                        <Expenses expenses={expenses} />
                </>
        );
}

export default App;
