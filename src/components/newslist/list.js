import React from 'react'
import { connect } from "react-redux"
import "./list.css"
import Category from '../Category/category';
import LargeNews from '../LargeNews/largeNews';
import randID from '../../randID';
import { News } from "../News/news"
import FetchSome from '../../container/utilities/FetchSome';



const NewsList = (props)=>{
    
    const { properties } = FetchSome( props.state)
    

    return(
        <>
            {
                properties.length &&
                <div className="newsList">
                    <div className="container">
                    <Category category={props.category} btnColor="red"/>
                        <div className="newsList">
                            {
                                 properties.map( item =>(
                                    (item.source.name.toLowerCase() === props.category.toLowerCase() ) ? 
                                    <News news={item} key={randID()}/> : null
                                )) 
                            }  
                        </div>
                        <div className="large-news">
                            {
                                properties.map( item =>(
                                    (item.source.name.toLowerCase() === props.category.toLowerCase() ) ? 
                                    <LargeNews news={item} key={randID()}/> : null
                                ))                   
                            }
                        </div>     
                    </div>
                </div>
            }
        </>
    )
}

const mapStateToprops = state=>{
    return {
        state: state.news.news
    }
}

export default connect(mapStateToprops)(NewsList)