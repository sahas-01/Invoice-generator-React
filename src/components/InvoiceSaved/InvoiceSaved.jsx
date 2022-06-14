import React from 'react'
import Header from '../Header/Header'

function InvoiceSaved({ list }) {
    //saved invoice component
    console.log(list)
    return (
        <>
            <main className="mt-20 p-5 xl:max-w-4xl mx-10 bg-white rounded shadow main-content">
                <div className="line bg-textpurple" style={{ width: '100%', height: '20px' }}>

                </div>
                <Header />
                <section className="m-8">
                    <input type="text" placeholder="Enter transaction name" className="transaction-input" />
                    <p className="mt-4 mx-2">Paid on 05/04/2022</p>
                </section>





            </main>
        </>
    )
}

export default InvoiceSaved