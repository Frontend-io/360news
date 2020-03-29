import React from 'react'
import NewsList from '../newslist/list';
import { categories } from '../../container/mockNews';
import randID from '../../randID';
import { connect } from "react-redux"


const NewsWrap = (props) =>{

   
    const newsCategories = categories(props.news.news)

    
   

    return(
        
        newsCategories.map( item =>{
            return(
                newsCategories.length > 0 ? <NewsList category={item}  key={randID()}/> : null
            )
        })
    )
}


const mapStateToProps = (state)=>{
    return {
        news: state.news
    }
}
// const mapDispatchToProps = (dispatch)=>{
//     return {
//         loadNews:  ()
//     }
// }
export default connect(mapStateToProps)(NewsWrap)