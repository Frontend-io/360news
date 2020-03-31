import React from 'react'
import "./category.css"
import { Link } from "react-router-dom"

const Category = (props)=>{
    return(
        <div style={{margin: "50px 0px 10px 0px"}} className="cat-wrap">
            <div className="divider"></div>
            <div className="grid apart ">
                <p className="title" style={{fontSize: "20px"}}>{props.category}</p>
                <Link to={`/categories/${props.category}`} 
                    className='padded-5 red btn' style={{borderRadius: 3, padding: "8px 10px"}}>All <b>{props.category}</b> News
                </Link>  
            </div>
        </div>
    )
}
export default Category