import Expense from './Expense';

interface Props
{
        expenses: Expense[]
}

function Expenses(props: Props)
{
        return (
                <table>
                        <thead>
                        <tr>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Amount</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.expenses.map((expense: Expense) =>
                        {
                                return (
                                        <tr key={expense.id} >
                                                <td>
                                                        {expense.description}
                                                </td>
                                                <td>
                                                        {expense.date}
                                                </td>
                                                <td>
                                                        ${expense.amount}
                                                </td>
                                        </tr>
                                );
                        })}
                        </tbody>
                        <tfoot>
                        <tr>
                                <th colSpan={2}>
                                        Total
                                </th>
                                <td>
                                        ${props.expenses.length > 0 && props.expenses.reduce((previousValue: Expense, currentValue: Expense): Expense =>
                                        {
                                                return {
                                                        ...previousValue,
                                                        amount: previousValue.amount! + currentValue.amount!
                                                };
                                        }).amount}
                                </td>
                        </tr>
                        </tfoot>
                </table>
        );
}

export default Expenses;