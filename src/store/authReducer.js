const defaultState = {
    signIn: "in",
}

export const authReducer = (state = defaultState, action) => {
    switch (action.type){
        case "SIGN_IN":
            return {...state, signIn: "in"}
        case "SIGN_UP":
            return {...state, signIn: "up"}
        case "FORGOT_PASS":
            return {...state, signIn: "forgot"}
        default: 
            return state
    }
} 