import React from 'react'
import { connect } from "react-redux"
// import randID from "../../randID"
// import { CHANGE_TITLE } from '../../container/Redux/Actions/actions';
// import { StateContext } from '../../container/Context/context';
import Landing from './landing/landing';
// import NewsList from '../newslist/list';
// import {news} from "../../container/mockNews"
import NewsWrap from '../NewsWrap/NewsWrap';


const Home = (props)=>{
    // const { state, dispatch } = props
    // let allNews = state.news;



    return(
        <div className="home">
            <Landing/>
            <NewsWrap />
        </div>
    )
}











const mapStateToProps = (state)=>{
    return{
        state
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        dispatch: (action)=> dispatch(action)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)