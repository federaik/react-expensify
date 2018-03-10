//action creators are functions that return an action. 
//We export each one so we can use them elsewhere in our codebase
import 'whatwg-fetch';

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        loading: bool
    }
}

export function itemsHasErrored(bool){
    return {
        type: 'ITEMS_HAS_ERRORED',
        errored: bool
    }
}

export function itemsFetchSuccess(items){
    return {
        type: 'ITEMS_FETCH_SUCCESS',
        items
    }
}

export function itemsFetchData(url){
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        
        fetch(url)
            .then((response) => {
                dispatch(itemsIsLoading(false))
                return response;
            })
            .then(response => response.json())
            .then((items) => {
                dispatch(itemsFetchSuccess(items))
            })

    }
}