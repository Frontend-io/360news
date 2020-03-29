import MockNews from "../data";

const initialState = {
    news: MockNews[0]['articles'],
    title: "360News"
}


export const NewsReducer = (state = initialState, action)=>{
    switch(action.type){
        case "CHANGE_TITLE":
            return {...state, title: action.payload}
        default: 
            return state
    }
}


// {title: "Assu to embark on strike", category: "Entertainment", summary: "<h1>ipisicing elit, sed do eiusmodtempnt </h1> <p>ut labore etris nisi ut aliquip ex ea commodoconsequat.</p><p> Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa</p>", others:{vendor: "Vanguard Newspaper"}, date: "4 April, 2020", id: 1},
//         {title: "Nigeria confirms Five new cases of Corona Virus", hot: true,  category: "Football",summary: " amet, consectetur adipisicing elit, sed  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea", id: 2},
//         {title: "Doctors embark on strike amid Covid-19",  category: "Entertainment", summary: " amet, consectetur adipisicing elit, sed  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea", others:{vendor: "Legit.ng"}, date: "5 Minutes ago", id: 3},
//         {title: "Nigerian Airforce to Lunch Operation Wakanda", hot: true,  category: "Politics", summary: " amet, consectetur adipisicing elit, sed  in", id: 4}  
