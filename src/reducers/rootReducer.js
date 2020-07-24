const initState = {
    pizzasInCart: [],
    showModal: false

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

    if (action.type === 'CLEAR_PIZZAS') {
        let newPizzas = state.pizzasInCart;
        newPizzas = []
        return {
            ...state,
            pizzasInCart: [...newPizzas]
        }
    }


    if (action.type === 'HANDLE_MODAL') {
        let showModal = state.showModal;
        showModal = action.showModal;
        return {
            ...state,
            showModal: showModal
        }
    }
    return state;
}


export default rootReducer;