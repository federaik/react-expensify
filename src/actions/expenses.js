export const addExpense = (expense = {}) => {
    console.log('otherUser branch')
    return {
        type: 'ADD_EXPENSE',
        data: {
            ...expense
        }
    }
}

