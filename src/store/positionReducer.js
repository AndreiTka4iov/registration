const defaultState = {
    position: false,
}

export const positionReducer = (state = defaultState, action) => {
    switch (action.type){
        case "RIGHT_POSITION":
            return {...state, position: false}
        case "LEFT_POSITION":
            return {...state, position: true}
        default: 
            return state
    }
} 