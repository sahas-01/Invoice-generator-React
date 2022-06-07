import React from 'react'
import InvoiceHeading from '../../components/Heading/InvoiceHeading'
import './Landing.css'
import { Link } from 'react-router-dom'
import Trademarkia from "../../assets/Trademarkia.png"

function Landing() {
    return (
        <>
            <div className="landingcontainer">
                <nav className="landingnav">
                    <InvoiceHeading />
                </nav>
                <div className="landingcomponents">
                    <input type="text" placeholder="Enter name" className="name-input" />
                    <Link to="/invoicegenerate">
                        <button className="invoice-btn">Generate invoice</button>
                    </Link>

                </div>
                <img src={Trademarkia} alt="invoice" className="invoice-img" />
            </div>
            <h4 className="savedinvoices-heading">Saved Invoices</h4>
        </>
    )
}

export default Landing