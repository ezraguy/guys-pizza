const initState = {
    pizzasInCart: [],

}

const rootReducer = (state = initState, action) => {

    if (action.type === 'ADD_PIZZA') {
        return {

            pizzasInCart: [...state.pizzasInCart, action.pizza],

        }
    }
    return state;
}


export default rootReducer;