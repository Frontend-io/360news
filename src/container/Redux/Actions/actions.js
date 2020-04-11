import axios from "axios";
import { randNum } from "../../../randID";

// News fetching init
export const fetchNewsRequest = ()=>{
    return{
        type: "FETCH_NEWS_REQUEST",
    }
}

// Success fetching news flag
export const fetchNewsSuccess = (payload)=>{
    return{
        type: "FETCH_NEWS_SUCCESS",
        payload
    }
}

// Errror fetching news flag
export const fetchNewsFailure = (payload)=>{
    return{
        type: "FETCH_NEWS_FAILURE",
        payload
    }
}

// Async action to fetch news
export const fetchNews = (query)=>{

    return (dispatch)=>{
        // Set fetching flag to true
        dispatch(fetchNewsRequest())

        // Fetch news
        const API_KEY = "775be0dc079c4a25b9db299e22d3effd"
        // Randomly select a category if no query is passed
        const default_queries = ['africa', 'nigeria', 'covid-19', 'corona virus', 'programming', 'technology', 'software', 'education', 'science', 'space']
        const random_default_query = randNum(default_queries)
        const url = `https://newsapi.org/v2/everything?q=${query ? query : random_default_query}&apiKey=${API_KEY}`
        
        axios.get(url)
        .then(response => {
            // Push news data to state
            const data = response.data
           dispatch(fetchNewsSuccess(data))
        })
        .catch(error=>{
            // Push message to state
            const message = error.message
            dispatch(fetchNewsFailure(message))
        })
    }
}
 
export const clearLog = ()=>{
    return{
        type: "CLEAR_MESSAGE_LOG"
    }
}

export const printLog = (payload)=>{
    return{
        type: "PRINT_LOG",
        payload
    }
}