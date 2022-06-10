import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import './Table.css'

function Table({ data, totalAmount, setTotalAmount }) {
    var totalPrice;
    // const [total, setTotal] = useState(0);
    // console.log(props);
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
        let rows = document.querySelectorAll(".qty-amount")
        let sum = 0

        for (let i = 0; i < rows.length; i++) {
            if (rows[i].className === "qty-amount") {
                sum += isNaN(rows[i].value) ? 0 : parseInt(rows[i].value)
                setTotalAmount(sum)
            }
        }
    })

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
                    <td><input type="number" className="qty-amount" value={totalPrice} /></td>
                </tr>
            </tbody>
        </>
    )
}

export default Table