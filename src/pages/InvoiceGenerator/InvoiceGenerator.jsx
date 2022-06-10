import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Table from '../../components/Table/Table'
import axios from 'axios'
import './InvoiceGenerator.css'
import '../../components/Table/Table.css'

function InvoiceGenerator() {
    const [data, setData] = useState([])
    const invoices = [{
        title: "Product 1",
        price: 1000,
        amount: 1000,
        quantity: 5,
    }];
    console.log(invoices);
    const [components, setComponents] = useState(["Sample Component"]);
    const [totalAmount, setTotalAmount] = useState(0);
    function addComponent() {

        setComponents([...components, "Sample Component"])

    }

    console.log(components)
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/products?limit=10`)
            .then(res => {
                setData(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
    console.log(data);
    return (
        <>
            <Navbar />
            <main className="mt-20 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow main-content">
                <div className="line bg-textpurple" style={{ width: '100%', height: '20px' }}>

                </div>
                <Header />
                <section className="m-8">
                    <input type="text" placeholder="Enter transaction name" className="transaction-input" />
                    <p className="mt-4 mx-2">Paid on 05/04/2022</p>
                </section>

                <button
                    className='bg-textpurple hover:bg-hoverpurple text-white font-bold py-2 -mt-16 px-8 mr-20 float-right rounded'
                    onClick={addComponent}
                >
                    Add Item
                </button>

                <table width="100%" className="table">
                    <thead>
                        <tr>
                            <td className="font-bold text-textpurple">Description</td>
                            <td className="font-bold text-textpurple">Rate</td>
                            <td className="font-bold text-textpurple">Quantity</td>
                            <td className="font-bold text-textpurple">Amount</td>
                        </tr>
                    </thead>
                    {components.map((component, index) => {
                        return (
                            <Table data={data} totalAmount={totalAmount} setTotalAmount={setTotalAmount} />
                        )

                    }
                    )}

                </table>

                <section className="m-4">
                    <p className="font-extrabold text-black text-xl float-right mr-20" style={{
                        border: '0.5px solid #DFDCF3',
                        padding: '10px',
                        borderRadius: '10px',
                        width: '200px',
                    }}> Total: &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; {totalAmount}</p>
                </section>


            </main>
        </>
    )
}

export default InvoiceGenerator