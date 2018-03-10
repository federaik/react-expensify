export default (state, action) => {
    switch (action.type) {
        case 'FILTER_VISIBLE_EXPENSES':
            return state; //.filter(expense => expense.visible);
        default:
            return state;
    }
}