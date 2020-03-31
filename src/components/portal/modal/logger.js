import React from 'react'
import ReactDOM from "react-dom"
import { useSelector, useDispatch } from "react-redux"
import "./logger.css"
import { clearLog } from '../../../container/Redux/Actions/actions';


const Logger = ()=>{
    const state = useSelector(state=>{ 
        return{
            state
        }
    })
    const dispatch = useDispatch()
    const { message, canLog } = state.state.news

    // Clear log and hide message after 5s
    if(canLog){
        setTimeout(()=>{
            dispatch(clearLog())
        }, 5000)
    }

    return ReactDOM.createPortal(
        <React.Fragment>
            {
                message !== "" &&
                <div className="align-c padded-20 grid logger">
                    <i className="fa fa-info-circle"></i>
                    <h3>{message}</h3>
                </div>
            }
        </React.Fragment>,
        document.getElementById("portal")
    )
}
export default Logger