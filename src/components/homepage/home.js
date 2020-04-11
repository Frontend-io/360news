import React, { useEffect } from 'react'
import { connect } from "react-redux"
import Landing from './landing/landing';
import NewsWrap from '../NewsWrap/NewsWrap';
import { fetchNews } from '../../container/Redux/Actions/actions';
import "./home.css"


const Home = ({fetchNews,state})=>{
    // Fetch news onLoad
    useEffect(()=>{
        fetchNews()
    }, [])

    return(
        <section className="home">
           {
               state.news.length > 0 ? 
               <>
                    <Landing news={state} />
                    <NewsWrap news={state} />
               </>
               : null
               
           }
           {
                !state.length && 
               <div className="padded-20 white mat shadow grid centered-text grey-t align-c centered void">
                   <h1>OooooopS!</h1>
                   <p>Sorry, but we cannot load your content at the moment</p>
                   <p>Apparently, you have a <b>Network error</b> </p>
               </div>
           }
        </section>
    )
}




const mapStateToProps = (state)=>{
    return{
        state: state.news
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        fetchNews: ()=> dispatch(fetchNews("Nigeria"))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)