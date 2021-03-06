import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux" 
import { Link } from "react-router-dom"
import "./header.css";
import { printLog } from '../../container/Redux/Actions/actions';

const Header = () =>{
    const [nav, setNav]= useState(false)
    const status = useSelector((state)=>{
        return{
            state: state.news.news
        }
    })

    const dispatch = useDispatch()

    const handleEvent = ()=>{
        nav ? setNav(false) : setNav(true)
        !status.length && dispatch(printLog("Sorry, you cannot do that!")) 

    }


    let screenSize = window.innerWidth
    const classes = screenSize <= 768 ?
            nav ? 
                "grid apart open mobile header" :
                     "grid apart mobile header" :
                "grid apart header"

    return(
        <header  className={classes} >
            <div className="logo">
                <Link className="home"  to="/">360News</Link>
            </div>
           {
               status.length &&
               <nav className="grid">
               <Link to={"/categories/us"} >US</Link>
               <ul className=" innerLink">Africa
                   <ul className="no-padding grid col drop">
                       <Link to={"/categories/Nigeria/"}>Nigeria</Link>
                       <Link to={"/categories/south-africa"}>South Africa</Link>
                       <Link to={"/categories/sudan"}>Sudan</Link>
                       <Link to={"/categories/kenya"}>Kenya</Link>
                       <Link to={"/categories/rwanda"}>Rwanda</Link>
                   </ul>
               </ul>
               <ul className=" innerLink">Europe
                   <ul className="no-padding grid col drop">
                       <Link to={"/categories/italy"}>Italy</Link>
                       <Link to={"/categories/france"}>France</Link>
                       <Link to={"/categories/germany"}>Germany</Link>
                       <Link to={"/categories/dublin"}>Dublin</Link>
                   </ul>
               </ul>
               <ul className=" innerLink">Asia
                   <ul className="no-padding grid col drop">
                       <Link to={"/categories/china"}>China</Link>
                       <Link to={"/categories/japan"}>Japan</Link>
                       <Link to={"/categories/korea"}>Korea</Link>
                       <Link to={"/categories/india"}>India</Link>
                   </ul>
               </ul>
               <Link to={"/categories/education"}>Education</Link>
               <Link to={"/categories/tech"}>Tech</Link>
           </nav>
           }
           {
            window.innerWidth <= 768 &&
            <i onClick={handleEvent} className="fa fa-bars"></i>
           }
        </header>
    )
}

export default Header