import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import './Table.css'

function Table({ data }) {
    var totalPrice;
    var totalAmount = 0;
    console.log(data);
    const [description, setDescription] = useState("Product 1")
    const [quantity, setQuantity] = useState(5)
    const [rate, setRate] = useState(0)
    const [amount, setAmount] = useState(1000)
    const [selectedOption, setSelectedOption] = useState("");
    // console.log(data)
    const [list, setList] = useState([{
        description,
        quantity,
        rate,
        amount
    }])
    useEffect(() => {
        const calcAmount = () => {
            setAmount(quantity * rate)
            console.log(quantity, amount)

        }
        calcAmount(parseInt(amount))
    }, [quantity, rate, setAmount])

    // calcAmount(amount)

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
                    <td>{
                        data.map(item => {
                            if (item.title === selectedOption) {
                                totalPrice = parseInt(item.price) * quantity
                                totalAmount = totalAmount + totalPrice
                                return (
                                    <>
                                        {item.price}
                                    </>
                                )
                            }
                        }
                        )
                    }</td>
                    <td><input type="number" className="qty-rate" value={quantity} onChange={(e) => { setQuantity(e.target.value) }} /></td>
                    <td><input type="number" className="qty-rate" value={totalPrice} /></td>
                </tr>
            </tbody>
        </>
    )
}

export default Table