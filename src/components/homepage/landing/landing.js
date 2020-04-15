import React from 'react';
import "./landing.css"
import FetchSome from '../../../container/utilities/FetchSome';
import randID, { randNum } from '../../../randID';
import { News, placeholderImage } from '../../News/news';



const Landing = (props)=>{
    const news = props.news.news
    // Fetch some numbers of news for the landing
    const { properties } = FetchSome(news, 3)

    // Get random news for the landing page
    const landingNews = randNum(news)
    const date = new Date(landingNews.publishedAt).toDateString()


    return(
        <section className="landing-wrap">
            <div className="no-wrap grid apart landing" style={
                {backgroundImage: `linear-gradient(to right, rgba(200, 0, 0, .5), rgba(0,0, 0, 0.5)), 
                url(${landingNews.urlToImage ? landingNews.urlToImage : placeholderImage})`}} >
                <div className="brief">
                        <h1>{landingNews.title}</h1>
                        <p>{landingNews.description}</p>
                </div>
                <div className="vendor">
                    <div className="vend">
                        {
                            landingNews.source &&
                            <h3>{landingNews.source.name}</h3>
                        }
                         {
                            landingNews.publishedAt &&
                            <p>{date}</p>
                        }
                    </div>
                </div>
            </div>
                <div className="snipNews">
                   {
                       properties.map(item =>{
                           return(
                                <News newsInfo={item} key={randID()} noImage/>
                           )
                       })
                   }
                </div>
        </section>
    )
}


export default Landing