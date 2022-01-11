function AddExpense()
{
        return (
                <>
                        <div>
                                <label htmlFor='expense-description'>Description</label>
                                <input type='text' id='expense-description' />
                        </div>
                        <div>
                                <label htmlFor='expense-date'>Date</label>
                                <input type='date' id='expense-date' />
                        </div>
                        <div>
                                <label htmlFor='expense-amount'>Amount</label>
                                <input type='text' id='expense-amount' />
                        </div>
                        <div>
                                <input type='button' value='Add Expense' />
                        </div>
                </>
        );
}

export default AddExpense;