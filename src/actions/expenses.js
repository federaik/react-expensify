export const addExpense = (expense = {}) => {
    console.log('master branch')
    return {
        type: 'ADD_EXPENSE',
        data: {
            ...expense
        }
    }
}

