export default (expenses = [], action) => {
    switch (action.type){
        case 'ADD_EXPENSE':
            return [
                ...expenses, action.data
            ];
        default:
            return expenses;
    }
}