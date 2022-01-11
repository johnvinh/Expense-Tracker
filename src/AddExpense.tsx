import {useRef} from 'react';
import Expense from './Expense';

interface Props
{
        expenses: Expense[]
        setExpenses: Function
}

function AddExpense(props: Props)
{
        const expenseDescription = useRef<HTMLInputElement | null>(null);
        const expenseDate = useRef<HTMLInputElement | null>(null);
        const expenseAmount = useRef<HTMLInputElement | null>(null);

        function onAddExpenseClick()
        {
                const description = expenseDescription?.current?.value;
                const date = expenseDate?.current?.value;
                const amount = expenseAmount?.current?.value;
                let newExpense: Expense = {
                        id: props.expenses.length,
                        description: description,
                        date: date,
                        amount: Number(amount)
                };
                props.setExpenses([...props.expenses, newExpense]);
        }

        return (
                <>
                        <div>
                                <label htmlFor='expense-description'>Description</label>
                                <input ref={expenseDescription} type='text' id='expense-description' />
                        </div>
                        <div>
                                <label htmlFor='expense-date'>Date</label>
                                <input ref={expenseDate} type='date' id='expense-date' />
                        </div>
                        <div>
                                <label htmlFor='expense-amount'>Amount</label>
                                <input ref={expenseAmount} type='text' id='expense-amount' />
                        </div>
                        <div>
                                <input type='button' onClick={onAddExpenseClick} value='Add Expense' />
                        </div>
                </>
        );
}

export default AddExpense;