import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

let Header = (props) => {

    let user = props.user;  //reading from mapStateToProps which reads from userReducer.user
    //userName = "SS";
    // let user = {
    //     userName : "Summy"
    // }

    console.log(user.userName)
    
    const usrName = user && user.userName ? user.userName : "";

    //const usrName = props.userName;
    return(
        <>
            {/* {usrName != "" ? 
                <h2>Hi {usrName} , Welcome to Shopping Cart sponsored by Tech Team SIT</h2> 
                : <h2>Welcome to Shopping Cart sponsored by Tech Team SIT,
                    <h3>Please click on login button to proceed to login</h3>
                </h2>
            } */}

            {usrName != '' ? (
                <div>
                    <NavLink to="/home"  className="button" activeclassname="true"> Home </NavLink>
                    {/* <NavLink to="/login1"  className="button" activeclassname="true"> User1 </NavLink>
                    <NavLink to="/login2"  className="button" activeclassname="true"> User2 </NavLink> */}
                    <NavLink to="/login3"  className="button" activeclassname="true"> User3 </NavLink>
                    {/* <NavLink to="/app"  className="button" activeclassname="true"> AppCopy </NavLink> */}
                    <NavLink to="/product"  className="button" activeclassname="true"> Product </NavLink>
                    <NavLink to="/cart"  className="button" activeclassname="true"> Cart </NavLink>
                    <NavLink to="/order"  className="button" activeclassname="true"> Order</NavLink>
                    {/* <NavLink to="/checkout"  className="button" activeclassname="true"> Checkout </NavLink> */}
                    <NavLink to="/about"  className="button" activeclassname="true"> About </NavLink>
                    {/* <NavLink to="/about/2500"  className="button" activeclassname="true"> About with Param</NavLink>
                    <NavLink to="/me"  className="button" activeclassname="true"> Me </NavLink>
                    <NavLink to="/lifecycle"  className="button" activeclassname="true"> Method </NavLink> */}
                </div>
            
                ) : (
                <div>
                    <NavLink to="/home"  className="button" activeclassname="true"> Home </NavLink> 
                    <NavLink to="/login3"  className="button" activeclassname="true"> User3 </NavLink>
                    <NavLink to="/about"  className="button" activeclassname="true"> About </NavLink>
                
                </div>
                
            )}
        </>
    )
}

let mapStateToProps = (store) =>{
    return {
        user: store.UserReducer.user
    }
}

export default connect(mapStateToProps, null)(Header);
//export default Header;