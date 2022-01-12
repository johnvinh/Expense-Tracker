import Header from './Header';
import AddExpense from './AddExpense';
import Expenses from './Expenses';
import {useState, useEffect} from 'react';

function App()
{
        const [expenses, setExpenses] = useState([]);

        useEffect(() =>
        {
                setExpenses(JSON.parse(localStorage.getItem('expenses') as string));
        }, []);

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
