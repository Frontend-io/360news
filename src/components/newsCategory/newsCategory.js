import React from 'react'
import { connect } from "react-redux"
import { TopBar } from '../categories/categories';
import { News } from '../News/news';
import randID from '../../randID';
import "./newsCategory.css"

const NewsCategory = props =>{
    const currentCategory = props.match.params.id
    
       
    return(
        <div className="newsCategory">
            <TopBar title={currentCategory} />
            <div className="container">
                <div className="news-wrap">
                    {
                        props.state.map(item =>{
                            return(
                                (item.source.name.toLowerCase() === currentCategory.toLowerCase()) && <News newsInfo={item} key={randID()} /> 
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = state =>{
    return{
        state: state.news.news
    }
}


export default connect(mapStateToProps)(NewsCategory)