import React, { useState } from 'react'
import { useEffect } from 'react'
import './Table.css'

function Table({ data, totalAmount, setTotalAmount, list, setList }) {
    var totalPrice;
    const [quantity, setQuantity] = useState(5)
    const [selectedOption, setSelectedOption] = useState("");

    useEffect(() => {
        let rows = document.querySelectorAll(".qty-amount")
        let sum = 0
        // For displaying the total amount
        // For displaying the total amount
        for (let i = 0; i < rows.length; i++) {
            if (rows[i].className === "qty-amount") {
                sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
                setTotalAmount(sum)
            }
        }
    })

    useEffect(() => {
        const newList = [...list]
        newList.push({
            selectedOption,
            quantity,
        }
        )
        setList(newList)
    }
        , [selectedOption, quantity])

    // calcAmount(amount)

    return (
        <>
            <>

                <tbody className="table-body">
                    <tr>
                        <td>
                            <select className="description-dropdown font-bold" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                                {
                                    data.map(item => {
                                        return (
                                            <option key={item.id} value={item.title} className="font-bold">{item.title}</option>
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
                                    return (
                                        <div className="item-price font-bold">
                                            {item.price}
                                        </div>
                                    )
                                }
                            }
                            )
                        }</td>
                        <td><input type="number" className="qty-rate font-bold" value={quantity} onChange={(e) => { setQuantity(e.target.value) }} /></td>
                        <td><p className="qty-amount" style={{ fontWeight: 'bold' }} >{totalPrice}</p></td>
                    </tr>
                </tbody>
            </>
        </>
    )
}

export default Table