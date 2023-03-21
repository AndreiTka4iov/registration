const defaultState = {
    sign: false,
    userName: '',
    email: '',
    firstname: '',
    lastname: '',
}

export const userDataReducer = (state = defaultState, action) => {
    switch (action.type){
        case "SIGN":
            return {...state, sign: true, ...action.payload}
        case "UN_SIGN":
            return {...state, 
                sign: false, 
                userName: '',
                email: '',
                firstname: '',
                lastname: '',
            }
        default: 
            return state
    }
} 