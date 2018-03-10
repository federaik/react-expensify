import { addExpense } from '../actions/expenses';

test('Should add expense to store', () => {
    const newExpense = { id: 1, name: 'E1', desc: 'desc', visible: true };
    const addedExpense = addExpense(newExpense);

    expect(addedExpense.data).toEqual(newExpense);

})