import {useRef} from 'react';
import Expense from './Expense';

interface Props
{
        expenses: Expense[]
        setExpenses: Function
}

function AddExpense(props: Props)
{
        const expenseDescriptionRef = useRef<HTMLInputElement | null>(null);
        const expenseDateRef = useRef<HTMLInputElement | null>(null);
        const expenseAmountRef = useRef<HTMLInputElement | null>(null);

        function onAddExpenseClick()
        {
                const description = expenseDescriptionRef?.current?.value;
                const date = expenseDateRef?.current?.value;
                const amount = expenseAmountRef?.current?.value;

                // Don't allow blank data
                if (description === '' || date === '' || amount === '')
                        return;
                // Make sure the amount is a number
                else if (isNaN(Number(amount)))
                        return;

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
                                <input ref={expenseDescriptionRef} type='text' id='expense-description' />
                        </div>
                        <div>
                                <label htmlFor='expense-date'>Date</label>
                                <input ref={expenseDateRef} type='date' id='expense-date' />
                        </div>
                        <div>
                                <label htmlFor='expense-amount'>Amount</label>
                                <input ref={expenseAmountRef} type='text' id='expense-amount' />
                        </div>
                        <div>
                                <input type='button' onClick={onAddExpenseClick} value='Add Expense' />
                        </div>
                </>
        );
}

export default AddExpense;