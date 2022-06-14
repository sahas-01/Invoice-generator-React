import React from 'react'
import InvoiceHeading from '../../components/Heading/InvoiceHeading'
import './Landing.css'
import Trademarkia from "../../assets/Trademarkia.png"
import InvoiceSaved from '../../components/InvoiceSaved/InvoiceSaved'
import { useNavigate } from "react-router-dom";

function Landing() {
    //To get from the localStorage
    let list = localStorage.getItem("list")
    list = JSON.parse(list)
    console.log(list)
    const navigate = useNavigate()
    const generateInvoice = () => {
        navigate("./invoicegenerate", { replace: true });
    }

    return (
        <>
            <div className="landingcontainer">
                <nav className="landingnav">
                    <InvoiceHeading />
                </nav>
                <div className="landingcomponents">
                    <input type="text" placeholder="Enter name" className="name-input" />

                    <button className="invoice-btn" onClick={generateInvoice}>Generate invoice</button>

                </div>
                <img src={Trademarkia} alt="invoice" className="invoice-img" />
            </div>
            <h4 className="savedinvoices-heading">Saved Invoices</h4>
            <div className="savedinvoices-container">
                <InvoiceSaved data={list} />
            </div>
        </>
    )

}

export default Landing