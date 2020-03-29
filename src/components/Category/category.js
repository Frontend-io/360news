import React from 'react'
import { Link } from "react-router-dom"

const Category = (props)=>{
    return(
        <div style={{margin: "50px 0px 10px 0px"}} className="cat-wrap">
            <div className="divider"></div>
            <div className="grid apart ">
                <span style={{fontSize: "20px"}}>{props.category}</span>
                <Link to={`/categories/${props.category}`} 
                    className='padded-5 red' style={{borderRadius: 3, padding: "8px 10px"}}>Browse all <b>{props.category}</b> News
                </Link>  
            </div>
        </div>
    )
}
export default Category