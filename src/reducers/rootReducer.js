const initState = {
    pizzasInCart: [],
    showModal: false,
    showCart: false

}

const rootReducer = (state = initState, action) => {

    if (action.type === 'ADD_PIZZA') {
        return {
            ...state,
            showModal: false,
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
            showCart: false,
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

    if (action.type === 'HANDLE_CART') {
        let showCart = state.showCart;
        showCart = action.showCart;

        return {
            ...state,
            showCart: showCart
        }
    }
    return state;
}


export default rootReducer;