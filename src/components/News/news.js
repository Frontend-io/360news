import React from 'react';
import { Link } from "react-router-dom"



export const placeholderImage = "https://nbhc.ca/sites/default/files/styles/article/public/default_images/news-default-image%402x_0.png?itok=d03WAFvJ"

export const News = (props)=>{
    const {title, description:summary, urlToImage: image, source} = props.newsInfo
    
    const link = `/categories/${source.name.toLowerCase()}/${title.split(" ").join("-").toLowerCase()}`
    
    return(
        <Link to={link} style={{paddingTop: 10}} className="news">
           
                { !props.noImage && 
                     <div className="img">
                        <img src={image ? image : placeholderImage} alt="img" />
                        <label className="absolute label">{source.name}</label>
                    </div>
                }
            <div className="des">
                <h4 className="title">{title}</h4>
                {
                    props.exclude === "description" ? null : <p className="content">
                    {summary}
                </p>
                }
            </div>
        </Link>
    )
}
