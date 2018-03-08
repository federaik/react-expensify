export const addExpense = (expense = {}) => {
    console.log('test branch');
    return {
        type: 'ADD_EXPENSE',
        data: {
            ...expense
        }
    }
}

