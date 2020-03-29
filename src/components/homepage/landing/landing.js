import React from 'react';
import "./landing.css"
import FetchSome from '../../../container/utilities/FetchSome';
import randID, { randNum } from '../../../randID';
import { News } from '../../News/news';
import { connect } from "react-redux"
// import Axios from 'axios';
// import MockNews from '../../../container/Redux/data';






const Landing = (props)=>{

        
    // const API_KEY = "775be0dc079c4a25b9db299e22d3effd"
    // const QUERY = 'nigeria'
    // const url = `https://newsapi.org/v2/everything?q=${QUERY}&apiKey=${API_KEY}`
    // let  [state, setState] = useState({
    // fetching: false,
    // fetch_error: false,
    // news: []
    // })
    // useEffect(
    //     ()=>{
    //         Axios
    //         .get(url)
    //         .then(response =>{
    //             setState({...state, fetching: false, news: [response.data]})
    //             console.log(response.data)
    //         } )
    //         .catch(err=>{
    //             console.log(err.message);
    //             setState({...state, fetching: false,fetch_error: true, news: []})
    //         })
    //     }
    //     , [url]

    // )

    // Fetch Number of news
    const { properties } = FetchSome(props.state.news, 3)
    // Get random news for the landing
    let landingNews = randNum(props.state.news)
    const date = new Date(landingNews.publishedAt).toDateString()
    

    return(
        <section className="landing-wrap">
            <div className="no-wrap grid apart landing" style={
                {backgroundImage: `linear-gradient(to right, rgba(200, 0, 0, .4), rgba(0,0, 0, 0.7)), 
                url(${landingNews.urlToImage})`}} >
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
const mapStateToProps = state=>{
    return {
        state: state.news
    }
}

export default connect(mapStateToProps)(Landing)