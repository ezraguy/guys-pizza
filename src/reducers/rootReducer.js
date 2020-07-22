const initState = {
    pizzasInCart: [],

}

const rootReducer = (state = initState, action) => {

    if (action.type === 'ADD_PIZZA') {
        return {
            pizzasInCart: [...state.pizzasInCart, action.pizza],
        }
    }

    if (action.type === 'REMOVE_PIZZA') {
        let newPizzas = state.pizzasInCart;
        newPizzas.splice(action.index, 1)

        return {
            ...state,
            pizzasInCart: [...newPizzas]
        }
    }
    return state;
}


export default rootReducer;