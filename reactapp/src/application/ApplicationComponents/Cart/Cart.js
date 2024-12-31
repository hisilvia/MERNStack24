
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

let Cart = ()=>{

    const [ dataTable, setDataTable ] = useState([]);
    
    useEffect(()=>{

        axios.get(`http://localhost:9000/product/api/getproducts`)
        .then(res => {
            console.log(res)
            setDataTable(res.data)})       //if data is object, setDataTable(res.data.dataTable)
        .catch(err =>console.log(err))
    },[]);

    var dataDetails = "";
    dataDetails = dataTable.map((item, index)=>{
        return (
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.desc}</td>
                <td>{item.rating}</td>
                <td>
                    <Link to="/" className="btn btn-success">Edit</Link>
                </td>
                <td>
                    <button className="btn btn-danger">Delete</button>
                </td>
            </tr>
        )
    })
    
   
    return (
        <div>
            
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>View Product Items
                                    <Link to="/product" className="btn btn-primary float-right">Add Item</Link>
                                </h4>

                            </div>
                            <div className="card-body">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Description</th>
                                            <th>Rating</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dataDetails}
                                    </tbody>
                                </table>
                            </div>



                        </div>
                    </div>
                </div>

            </div>
            {/* <Table data={dataTable} column={column} /> */}


        </div>
    )


}
export default Cart;