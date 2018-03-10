export function itemsIsLoadingReducer(state, action){
    switch(action.type){
        case 'ITEMS_IS_LOADING':
            return {
                loading: action.loading
            };
        default: 
            return state;
    }
}

export function itemsHasErroredReducer(state, action){
    switch(action.type){
        case 'ITEMS_HAS_ERRORED':
            return {
                errored: action.errored
            };
        default: return state;
    }
}


export function itemsFetchSuccessReducer(state, action){
    switch(action.type){
        case 'ITEMS_FETCH_SUCCESS':
            return {
                items: action.items
            };
        default: return state;
    }
}