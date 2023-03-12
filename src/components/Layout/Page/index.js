import React from 'react'
import "./styles.css"
import Header from "../Header/Header";


const Layout = (props) =>
    <div className="layout">
        <Header/>
        {props.children}
    </div>

export default Layout