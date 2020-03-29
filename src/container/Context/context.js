import React, { createContext, useReducer } from "react"
import { reducer } from "./reducer";


export const StateContext = createContext()

function StateContextProvider(props){

    const [initialState, dispatch] = useReducer(reducer, {
        name: "Jefferson"
    });

    return(
        <StateContext.Provider value={ { dispatch, initialState}  }>
            {props.children}
        </StateContext.Provider>
    )
}

export default StateContextProvider


