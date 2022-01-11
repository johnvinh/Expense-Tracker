import Header from './Header';
import AddExpense from './AddExpense';
import Expenses from './Expenses';
import {useState} from 'react';

function App()
{
        const [expenses, setExpenses] = useState([]);

        return (
                <>
                        <Header/>
                        <AddExpense expenses={expenses} setExpenses={setExpenses} />
                        <Expenses expenses={expenses} />
                </>
        );
}

export default App;
