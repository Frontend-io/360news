import React from 'react'
import { useSelector } from "react-redux"
import "./preloader.css"


const Preloader = () =>{

    const status = useSelector((state)=>{
        return{
            state: state.news
        }
    })
    
    

    return(
        <>
            {
                status.state.preloader &&
                <div className="preloader">
                    <div className="loader">j</div>
                </div>
            }
        </>
    )
}
export default Preloader