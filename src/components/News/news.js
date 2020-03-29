import React from 'react';
import { Link } from "react-router-dom"



export const News = (props)=>{
    const {title, description:summary, urlToImage: image, source} = props.newsInfo
    const link = `/categories/${source.name.toLowerCase()}/${title.split(" ").join("-").toLowerCase()}`



    return(
        <Link to={link} className="news">
           
                { !props.noImage && 
                     <div className="img">
                       <img src={image} alt="img" />
                        <label className="absolute label">{source.name}</label>
                    </div>
                }
            <div className="des">
                <h4 className="title">{title}</h4>
                <p className="content">
                    {summary}
                </p>
            </div>
        </Link>
    )
}
