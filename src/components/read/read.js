import React from 'react' 
import{ connect } from 'react-redux'
import { Link } from "react-router-dom"
import "./read.css"
import { TopBar } from '../categories/categories';
import randID from '../../randID';

const Read = (props)=>{
    const title = props.match.params.id.split("-").join(" ")
    const parsedTitle = title.split(" ").join("").toLowerCase()
    const currentNews = []


    

    return(
        <div className="read">
            <TopBar title={title} metaData={currentNews} />
            <div className="container"> 
                <div className="mat shadow paper">
                    {
                        props.state.map(item =>{
                            return (
                                item.title.split("-").join("").split(" ").join("").toLowerCase() === parsedTitle && 
                                <React.Fragment  key={randID()}>
                                   <span className="no-display"> {currentNews.push(item)}</span>
                                    <p>Author - {<span className="red-t">{item.author}</span>}</p>
                                    <div className="divider"></div>
                                    <p>{item.content}  </p> 
                                    <div className="divider"></div><br /><br />
                                    <Link to={`${item.url}`} className="padded-20 red bordered ">Continue to {item.source.name} for full story </Link>
                                </React.Fragment>
                            )
                        })
                    }
                    {/* {
                           &&
                        <p className="centered-text grey-t ">Sorry, but your links doesnt match any News</p>
                    } */}
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
export default connect(mapStateToProps)(Read)