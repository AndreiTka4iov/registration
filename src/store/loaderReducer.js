const defaultState = {
    loader: false,
}

export const loaderReducer = (state = defaultState, action) => {
    switch (action.type){
        case "HIDE_LOADER":
            return {...state, loader: false}
        case "SHOW_LOADER":
            return {...state, loader: true}
        default: 
            return state
    }
} 