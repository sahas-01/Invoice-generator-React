import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import './Table.css'

function Table({ data }) {
    console.log(data);
    const [description, setDescription] = useState("Product 1")
    const [quantity, setQuantity] = useState("5")
    const [price, setPrice] = useState("200")
    const [amount, setAmount] = useState("1000")
    const [selectedOption, setSelectedOption] = useState("");
    // console.log(data)
    const [list, setList] = useState([{
        description,
        quantity,
        price,
        amount
    }])
    useEffect(() => {
        const calcAmount = () => {
            setAmount(parseInt(quantity) * parseInt(price))
        }
        calcAmount(amount)
    }, [quantity, price, setAmount])

    return (
        <>

            <tbody className="table-body">
                <tr>
                    <td>
                        <select className="description-dropdown" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                            {
                                data.map(item => {
                                    return (
                                        <option key={item.id} value={item.title}>{item.title}</option>
                                    )
                                }
                                )
                            }
                        </select>
                    </td>
                    <td>{price}</td>
                    <td><input type="number" className="qty-price" value={quantity} onChange={(e) => { setQuantity(e.target.value) }} /></td>
                    <td>{amount}</td>
                </tr>
            </tbody>
        </>
    )
}

export default Table