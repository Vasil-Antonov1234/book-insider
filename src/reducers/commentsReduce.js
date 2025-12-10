export function commentReducer(state, action) {

    switch (action.type) {
        case "GET_ALL":
            return action.payload
        case "ADD_COMMENT":
            return [...state, action.payload]
        default:
            return state
    }

}