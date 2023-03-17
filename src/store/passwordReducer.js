const defaultState = {
    password: false,
}

export const passwordReducer = (state = defaultState, action) => {
    switch (action.type){
        case "SHOW_PASS":
            return {...state, password: action.payload}
        case "HIDE_PASS":
            return {...state, password: action.payload}
        default: 
            return state
    }
} 