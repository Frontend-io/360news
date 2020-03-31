import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from "react-redux"
import { TopBar } from '../categories/categories';
import { News } from '../News/news';
import randID from '../../randID';
import "./newsCategory.css"
import { fetchNews } from '../../container/Redux/Actions/actions';
import fetchCategory from '../../container/utilities/fetchCategory';

const NewsCategory = props =>{
    const currentCategory = props.match.params.id

    const dispatch = useDispatch()
    const newState = useSelector((state)=>{
        return{
            state: state.news
        }
    })
    useEffect( ()=>{
        dispatch(fetchNews(currentCategory))
    }, [currentCategory, dispatch])

    // Fetch news related to current category
    const returnWhich = props.state.length > 0 ? props.state : newState
    const list = fetchCategory(returnWhich, currentCategory)
   
    
       
    return(
        <div className="newsCategory">
            <TopBar title={currentCategory} />
            <div className="container">
                <div className="news-wrap">
                    {
                        list.map(item =>{
                            return(
                                <News newsInfo={item} key={randID()} /> 
                            )
                        })
                    }
                </div>
                {
                    !list.length && 
                    <div className="padded-20 grey-t full-width grid align-c  col">
                        <h3>Sorry, there are currenly no news that matches '{currentCategory}' category. </h3>
                        <ul>
                            <h4>Possible causes-</h4>
                            <div className="divider"></div>
                            <li>Reload page</li>
                            <div className="divider"></div>
                            <li>Typos in link</li>
                            <div className="divider"></div>
                            <li>Network Error</li>
                        </ul>

                    </div> 
                }
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