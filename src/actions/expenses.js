export const addExpense = (expense = {}) => {
    console.log(expense);
    return {
        type: 'ADD_EXPENSE',
        data: {
            ...expense
        }
    }
}

