import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import "./categories.css"
import { categories } from '../../container/mockNews';
import randID from '../../randID';
import { fetchNews } from '../../container/Redux/Actions/actions';

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
        fontSize: 14,
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
   useEffect(()=>{
        props.dispatch(fetchNews('nigeria'))
   }, [])

    const title = props.match.path.split("/")[1]
    const list  = categories(props.state)   

    // Get length of categories
    const getLength = (category)=>{
        // let length = 0
        // const arr = props.state
        // for(let i in arr){
        //     let index = arr[i]
        //     let id = index.source.id ? index.source.id : index.source.name
        //     if(id.toLowerCase() === category.toLowerCase()){
        //        length++;
        //     }
        //  }
        // return length
    }

    return(
        <>
            {
                list  &&
                <div className="categories">
                    <TopBar  title={title}/>
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
            }
        </>
    )
}

const mapStateToProps = ( state, prevProp) =>{
    return{
        state: state.news,
        props: prevProp
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        dispatch : (action)=>{dispatch(action)}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Categories)