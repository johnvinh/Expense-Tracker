import Expense from './Expense';

interface Props
{
        expenses: Expense[];
        setExpenses: Function;
}

function ClearExpenses(props: Props)
{
        return (
            <input type="button" value="Clear" onClick={() => props.setExpenses([])}/>
        );
}

export default ClearExpenses;