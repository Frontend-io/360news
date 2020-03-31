
const initialState = {
    news:[],
    title: "360News",
    message: "",
    fetching: false,
    canLog: false
}



export const NewsReducer = (state = initialState, action)=>{
        
    const { type, payload } = action
    switch(type){
        case "FETCH_NEWS_REQUEST":
            return{
                ...state,
                fetching: true,
                message: "Fetching News, please wait..."
            }
        case "FETCH_NEWS_SUCCESS":
            return {
                ...state, 
                news: payload['articles'],
                message: `Fetched ${payload.articles.length} News sucessfully!`,
                fetching: false,
                canLog : true
            }
        case "FETCH_NEWS_FAILURE":
                return {
                    message: payload,
                    news: [...state.news],
                    fetching: false,
                    title: state.title,
                    canLog: true
                }
        case 'CLEAR_MESSAGE_LOG':
            return{
                ...state,
                message : ""
            }
        default: 
            return state
    }
}
