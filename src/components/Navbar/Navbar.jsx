import React from 'react'
import './Navbar.css'
import Trademarkialogo from "../../assets/Trademarkia-logo.png"

function Navbar() {
    return (
        <nav className="invoice-nav">
            <img src={Trademarkialogo} alt="" width={50} height={50}/>
            <h1 className="invoice-gen-text">Invoice Generator</h1>
        </nav>
    )
}

export default Navbar