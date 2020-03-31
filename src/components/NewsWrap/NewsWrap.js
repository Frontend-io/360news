import React from 'react'
import NewsList from '../newslist/list';
import { categories } from '../../container/mockNews';
import randID from '../../randID';


const NewsWrap = (props) =>{
    const newsCategories = categories(props.news)

    return(
        
        newsCategories.map( item =>{
            return(
                newsCategories.length > 0 ? <NewsList category={item}  key={randID()}/> : null
            )
        })
    )
}

export default NewsWrap