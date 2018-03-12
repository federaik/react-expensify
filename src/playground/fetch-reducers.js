export function itemsIsLoadingReducer(state = false, action){
    switch(action.type){
        case 'ITEMS_IS_LOADING':
            return action.loading;            
        default: 
            return state;
    }
}

export function itemsHasErroredReducer(state = false, action){
    switch(action.type){
        case 'ITEMS_HAS_ERRORED':
            return action.errored;            
        default: return state;
    }
}


export function itemsFetchSuccessReducer(state = [], action){
    switch(action.type){
        case 'ITEMS_FETCH_SUCCESS':
            return action.items;
        default: return state;
    }
}