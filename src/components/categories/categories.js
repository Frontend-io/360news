import React from 'react'
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import "./categories.css"
import { categories } from '../../container/mockNews';
import randID from '../../randID';

const Category = props=>{
    
    return(
        <Link  to={`/categories/${props.item.toLowerCase()}`} className="mat shadow grid apart padded-20 white segment">
            <h3>{props.item}</h3>
            <p className="count">{props.length}</p>
        </Link>
    )
} 
export const TopBar = (props)=>{
    const title = props.title.toUpperCase()
    const styles = {
        color: "#aaa",
        borderBottom: "1.5px solid #ddd",
        fontSize: 14
    }
    window.scrollTo(0, 0)
    return(
        <div className="padded-20 white top-bar" style={styles}>
            <h1> {title} </h1>
            {
                props.metaData && 
                <>
                    {props.metaData[0] &&
                        <span>{new Date(props.metaData[0].publishedAt).toDateString()}</span>
                    }&nbsp;
                    {props.metaData[0].source.name &&
                        <label className="red-t">{props.metaData[0].source.name}</label>
                    }
                </>
            }
        </div>
    )
}

const Categories = (props)=>{
    const list  = categories(props.state)   

    // Get length of categories
    const getLength = (category)=>{
        let length = 0
        const arr = props.state
        for(let i in arr){
           let index = arr[i]
           if(index.source.name.toLowerCase() === category.toLowerCase()){
              length++;
           }
        }
        return length
    }

    return(
        <div className="categories">
            <TopBar  title={props.match.path.split("/")[1]}/>
           <div className="container">
                <div className=" tabs">
                    {
                        list.map(item=>{
                            return <Category history={props.history} item={item} length={getLength(`${item}`)} key={randID()}/>
                        })
                    }
                </div>
           </div>
        </div>
    )
}

const mapStateToProps = ( state, prevProp) =>{
    return{
        state: state.news.news,
        props: prevProp
    }
}
export default connect(mapStateToProps)(Categories)