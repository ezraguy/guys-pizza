export const addPizza = (pizza, total) => {
    return { type: "ADD_PIZZA", pizza: pizza, total: total }
}

export const removePizza = (index) => {
    return { type: "REMOVE_PIZZA", index: index }
}

export const clearPizzas = () => {
    return { type: "CLEAR_PIZZAS" };
}


export const addCustomPizza = (pizza) => {
    return { type: "ADD_PIZZA", pizza }

}