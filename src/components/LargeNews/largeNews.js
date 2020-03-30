import React from 'react'
import "./largeNews.css";
import { Link } from 'react-router-dom'


const LargeNews = (props)=>{
     const {title, description:summary, urlToImage: image, source} = props.news
    const link = `/categories/${source.name.toLowerCase()}/${title.split(" ").join("-").toLowerCase()}`

    return(
        <Link to = {link}  className="largeNews news">
            <div className="img">
                <img src={image} alt="img" />
                <label className="absolute label">{source.name ? source.name : "N/A"}</label>
            </div>
            <div className="des">
                <div className='content'>
                    <h4 className="title">{title}</h4>
                    <p className="content">{summary}</p>
                </div>
            </div>
        </Link>
    )
}

export default LargeNews