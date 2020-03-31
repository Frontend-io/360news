import React, { useState } from 'react' 
import{ connect } from 'react-redux'
import "./read.css"
import { TopBar } from '../categories/categories';
import randID from '../../randID';
import Related from '../related/related';

const Read = (props)=>{
    const title = props.match.params.id.split("-").join(" ")
    const parsedTitle = title.split(" ").join("").split(":").join("").split("?").join("").toLowerCase()
    const currentNews = []

    const [visibility, setVisibility] = useState(false)
    
    const handleModal = ()=>{
        visibility === false && setVisibility(true)
        visibility !== false && setVisibility(false)
    }
    
    const findNews = (query)=>{
        return query.title.split("-").join("").split(" ").join("").split(":").join("").split("?").join("").toLowerCase()
    }
    

    return(
        <div className="read">
            {
                visibility && <div onClick={handleModal} className="overlay"></div>
            }
            <TopBar title={title} metaData={currentNews} />
            <div className="grid read-tab container"> 
                <div className="mat shadow paper">
                    {
                        props.state.map(item =>{
                            return (
                                findNews(item) === parsedTitle && 
                                <React.Fragment  key={randID()}>
                                   <span className="no-display"> {currentNews.push(item)}</span>
                                    <p>Author - {<span className="red-t">{item.author}</span>}</p>
                                    <div className="divider"></div>
                                    <img src={item.urlToImage} alt={item.source.name} />
                                    <p>{item.content}  </p> 
                                    <div className="divider"></div><br /><br />
                                    <button onClick={handleModal} className="padded-20 red bordered ">Continue to {item.source.name} for full story </button>
                                    {
                                        visibility &&
                                        <div className="padded-20 white goModal">
                                            <p>How do your want to open the link?</p>
                                            <div onClick={handleModal} className="grouped grid">
                                                <a target="blank" href={`${item.url}`} >Open in new tab</a>
                                                <a href={`${item.url}`} >Continue </a>
                                            </div>
                                        </div>
                                    }
                                </React.Fragment>
                            )
                        })
                    }
                </div>
                <Related metaData={currentNews} />
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