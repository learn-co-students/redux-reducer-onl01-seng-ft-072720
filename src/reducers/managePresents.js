export function managePresents(state={numberOfPresents:8}, action){
    if (action.type === 'INCREASE') {
        return Object.assign(...state, {numberOfPresents: state.numberOfPresents + 1})
    } else {
        return state
    }
}
