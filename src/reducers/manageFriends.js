export function manageFriends(state, action){
}

let state = {friends: [] }

function manageFriends(state, action){
    switch (action.type) {
      case 'ADD_FRIEND':
        return (
            {...state,
                friends: [
                  ...state.friends,
                  action.friend
                ]
            }
        )
            case 'REMOVE_FRIEND':
                let removed = state.friends.findIndex(friend => friend.id === action.id);
                console.log(removed)
                return (
                    {...state,
                        friends: [
                          ...state.friends.slice(0, removed),
                          ...state.friends.slice(removed + 1)
                        ]
                    }
                  )

      default:
        return state;
    }
  }