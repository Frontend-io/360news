import React from 'react'
import { Link } from "react-router-dom"
import "./header.css";

const Header = () =>{

    return(
        <header className="grid apart header">
            <div className="grouped logo">
                <Link className="home"  to="/">360News</Link>
                <button onClick={()=>{
                    window.history.back()
                }} >Go back</button>
            </div>
            <nav className="grid">
                <Link to={"/categories/us"} >US</Link>
                <ul className=" innerLink">Africa
                    <ul className="no-padding grid col drop">
                        <Link to={"/categories/africa/nigeria"}>Nigeria</Link>
                        <Link to={"/categories/africa/south-africa"}>South Africa</Link>
                        <Link to={"/categories/africa/sudan"}>Sudan</Link>
                        <Link to={"/categories/africa/kenya"}>Kenya</Link>
                    </ul>
                </ul>
                <ul className=" innerLink">Europe
                    <ul className="no-padding grid col drop">
                        <Link to={"/categories/europe/italy"}>Italy</Link>
                        <Link to={"/categories/europe/france"}>France</Link>
                        <Link to={"/categories/europe/germany"}>Germany</Link>
                        <Link to={"/categories/europe/dublin"}>Dublin</Link>
                    </ul>
                </ul>
                <ul className=" innerLink">Asia
                    <ul className="no-padding grid col drop">
                        <Link to={"/categories/asia/china"}>China</Link>
                        <Link to={"/categories/asia/japan"}>Japan</Link>
                        <Link to={"/categories/asia/korea"}>Korea</Link>
                        <Link to={"/categories/africa/india"}>India</Link>
                    </ul>
                </ul>
                <Link to={"/categories/education"}>Education</Link>
                <Link to={"/categories/tech"}>Tech</Link>
            </nav>
        </header>
    )
}

export default Header