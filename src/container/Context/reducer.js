export const reducer = (state , action)=>{
    switch(action.type){
        case "CHANGE_TITLE":
            return {...state, name: action.payload}
        default: 
            return state
    }
}