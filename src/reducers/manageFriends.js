export function manageFriends(state = {friends: []}, action){
    if (action.type === "ADD_FRIEND") {
        const  newFriendArray = [...state.friends, action.friend]
        return Object.assign(...state, {friends: newFriendArray})
    } else if (action.type === "REMOVE_FRIEND") {
       const friendIndex = state.friends.findIndex((friend)=> friend.id === action.id)
       console.log(action.friend)
       console.log(friendIndex)
       console.log ([...state.friends])
       const newFriendsArray = [...state.friends.slice(0, friendIndex), ...state.friends.slice(friendIndex+1)]
        return Object.assign(...state, {friends: newFriendsArray})
    } else {
        return state
    }
}
