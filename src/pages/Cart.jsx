import React from 'react'

function Cart() {
    return (
        <div className='cart'>
            <div className="a-container">
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantify</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Id</td>
                            <td><img src="./img/download1.png" alt="" /></td>
                            <td>Name</td>
                            <td>Price</td>
                            <td><button className='tanggiam'>-</button>Quantify<button className='tanggiam'>+</button></td>
                            <td>Total</td>
                            <td><button className='edit'>EDIT</button><button className='delete'>DELETE</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Cart