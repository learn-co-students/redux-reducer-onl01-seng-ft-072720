export function manageFriends(state, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            return {...state, friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND':
            const friendById = state.friends.findIndex(friend => friend.id === action.id)
            return ({
                ...state, friends: [...state.friends.slice(0, friendById),
                    ...state.friends.slice(friendById + 1)]})
        default: 
            return state;
    }
}
