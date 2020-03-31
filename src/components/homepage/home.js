import React, { useEffect } from 'react'
import { connect } from "react-redux"
import Landing from './landing/landing';
import NewsWrap from '../NewsWrap/NewsWrap';
import { fetchNews } from '../../container/Redux/Actions/actions';


const Home = (props)=>{

    // Fetch news onLoad
    useEffect(()=>{
        props.dispatch(fetchNews())
    },[])

    // Backup last loaded news in localStorage
    useEffect(
        ()=>{
            localStorage.setItem("news", JSON.stringify(props.state))
        }, [props.state]
    )


    return(
        <div className="home">
           {
               props.state.length &&
               <>
                    <Landing news={props.state} />
                    <NewsWrap news={props.state} />
               </>
           }
        </div>
    )
}




const mapStateToProps = (state)=>{
    return{
        state: state.news.news
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        dispatch: (action)=> dispatch(action)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)