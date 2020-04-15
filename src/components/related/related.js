import React from 'react'
import { News } from '../News/news';
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import fetchCategory from '../../container/utilities/fetchCategory';
import randID from '../../randID';
import "./related.css"

const Related = props=>{
    const newsCase = props.metaData[0];
    const tag = newsCase.source.id !== null ? newsCase.source.id : newsCase.source.name
    const relatedNews = fetchCategory(props.state,tag)

    return(
        <div className="mat shadow white related">
            <div className="padded-10 grid align-c apart head">
                <h3 className="grey-t">More from {tag} -</h3>
                <span className="orange-t">{relatedNews.length}</span>
            </div>
            <div className="divider"></div>
            <div className="list">
                {
                    relatedNews.map(item => (
                        <News exclude="description" newsInfo={item} key={randID()} />
                    ))
                }
                {
                    relatedNews.length < 1 && 
                    <p className="padded-10 grey-t centered-text ">Sorry, there are currently no related News</p>
                }
            </div>
            <Link to="/" className="full-width btn"> Return to Home</Link>
        </div>
    )
}

const mapStateToProps = state=>{
    return{
        state: state.news.news
    }
}
export default connect(mapStateToProps)(Related) 