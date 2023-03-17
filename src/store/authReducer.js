const defaultState = {
    signIn: true,
}

export const authReducer = (state = defaultState, action) => {
    switch (action.type){
        case "SIGN_IN":
            return {...state, signIn: true}
        case "SIGN_UP":
            return {...state, signIn: false}
        default: 
            return state
    }
} 