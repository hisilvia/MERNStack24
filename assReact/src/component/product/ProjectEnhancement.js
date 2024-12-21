// Dec-20-2024 - Cart Implementation

// Cart Implementation
// Create New Cart Component using react hooks, functional component
// Each Item in this component should be added from Product Component 
// Now each Product should have general fields, like Name, Description, Rating, Price, Category (New Product Document/ Collection)
// In Product component each item when we click to display details should also have a button "Add To Item" on click should add to New Cart
// On Cart Component, Button for save to Checkout should save the cart item to database (New Cart Document/ Collection)


// Dec-19-2024

// Product Component - Create Product and Display Them

// Create a product component using functional component and hooks (try using useRef as react hook and implement accordingly)
// Create productReducer use it in store.js and also write switch case to add products
// Create a form to allow user to submit Product Details - name, price, desc, rating
// Create an action method to add the detail to database using a server api
// Server Side - Create product router and api to save the product using productdatamodel
// Everything should be done in continuation with shopping cart project



//- StudentReact > Component, Route, NavLink,Action, Reducer,
//StudentName, Age, Address, etc

// -StudentAPI >
// StudentDataModel, Router/API/Endpoints to save and fetch students
// -ExpressApp for students and do mounting


import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'

function App() {
    const [ row, setRow ] = useState([])
    const [ column, setColumn ] = useState([])

    useEffect(()=>{
        fetch('http://localhot:')
        .then(res => res.json())
        .then(data=>{
            setRow(data.users)
            setColumn(Object.keys(data.users[0]))
        })
    },[])

    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        {column.map((c,i) => {
                            <th key={i}>{c}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {
                        records.map((record, i) =>{
                            <tr key={i}>
                                <td>{record.id}</td>
                                <td>{record.name}</td>
                                <td>{record.email}</td>
                            </tr>
                        })
                    }
                </tbody>

            </table>

        </div>
    )
}