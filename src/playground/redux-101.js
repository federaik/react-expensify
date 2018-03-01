import { createStore, combineReducers } from 'redux';

const myState = { count: 0, someText: '' };
const myGuitars = [
    { id: 1, brand: 'Taylor', model: '114e', year: 2015 },
    { id: 2, brand: 'Fender', model: 'Strat', year: 2015 },
    { id: 3, brand: 'Jackson', model: 'Dinky', year: 2015 }
];

//REDUCERS
const myStateReducer = (state = myState, action) => {
    switch (action.type){
        case 'INCREMENT':
            const incrementBy = (typeof action.incrementBy === 'number') ? action.incrementBy : 1; 
            return {
                ...state,
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - action.decrementBy
            };

        case 'CHANGE_SOME_TEXT':
            return {
                ...state,
                someText: action.newText
            };
        default:
            return state;
    }
}

const myGuitarsReducer = (guitars = myGuitars, action) => {
    switch (action.type){
        case 'ADD_GUITAR':
            return [...guitars, action.guitar];
        case 'REMOVE_GUITAR':
            console.log(action.guitarId)
            return guitars.filter(g => g.id !== action.guitarId);
        case 'EDIT_GUITAR':
            return guitars.map(g => {
                if (g.id === action.guitarId){
                    return {
                        ...g,
                        ...action.data
                    }
                }
                return g;
            });
        case 'SORT_BY_BRAND':

            return guitars.sort((g1, g2) => {
                if (g1.brand > g2.brand){
                    return 1;
                }

                if (g1.brand < g2.brand){
                    return -1;
                }

                return 0;
            })
            
        default:
            return guitars;
    }
}

//STORE
const store = createStore(
    combineReducers({
        myState: myStateReducer,
        myGuitars: myGuitarsReducer
    })
);


//ACTION GENERATORS
const incrementAction = ({ incrementBy = 1 } = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy: incrementBy
    };
};

const decrementAction = ({ decrementBy = 1} = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy: decrementBy
    }
};

const changeSomeText = ({ newText } = {}) => {
    return {
        type: 'CHANGE_SOME_TEXT',
        newText: newText
    }
};

const addGuitar = (
    { 
        brand = '', 
        model = '', 
        year = 0
    } = {}
) => ({
    type: 'ADD_GUITAR',
    guitar: {
        id: Math.ceil(Math.random() * 1000),
        brand,
        model,
        year
    }
})

const removeGuitar = ({ id } = {}) => {
    return {
        type: 'REMOVE_GUITAR',
        guitarId: id
    }
}

const editGuitar = ({id, data} = {}) => {
    return {
        type: 'EDIT_GUITAR',
        guitarId: id,
        data: data
    }
}

const sortByBrand = () => {
    return {
        type: 'SORT_BY_BRAND'
    }
}

/////
const unsubscribe = store.subscribe(() => {
    //a changed in state ocurred

    const stateChange = store.getState();
    console.log(`I own ${stateChange.myState.count} guitars`, stateChange );
});

store.dispatch(incrementAction({ incrementBy: myGuitars.length}));

store.dispatch(changeSomeText( { newText: 'eah eah'} ));

const gibson = store.dispatch(addGuitar({ brand: 'Gibson', model: 'Les Paul', year: 2015 }));

// store.dispatch(removeGuitar(
//     {id: gibson.guitar.id}
// ));

store.dispatch(editGuitar(
    {
        id: gibson.guitar.id,
        data: {
            year: 1970,
            color: "Tobacco Sunburst"    
        }
    }
));

store.dispatch(incrementAction({ incrementBy: 1 }));
store.dispatch(sortByBrand());
unsubscribe();