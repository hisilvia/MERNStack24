import React from "react";
import Footer from "./CommonComponents/FooterComponent";
import Header from "./CommonComponents/HeaderComponent";
import MyComponent  from "./CommonComponents/HomeComponent";

export default class Application extends React.Component {

    constructor(props) {
        super(props);  //is used to passback data <props -here> so that its udpated in base object for react framework

        //state - object is used to allow updation of values via react rendering life cycle
        this.state = {
            userName: "Duncan",
            user: {
                address: "Somewhere on earth",
                session: "Somewhere on webex"
            }
        }
    }

    onclick = (evt)=>{
        console.log("Name change click is clicked")
        this.setState({
            userName : "Sierra"

            //userName: ["Nilay", "Gesan", "Jimmy", "Ben Ma", "Jay", "Everyone else"]
            // userName.map((name)=>{
            //     return <b><hr/>{name}</b>})


        })
        console.log("After setstate called", this.state.userName)
        evt.preventDefault();
    }

    //render - method is responsible to create virtual dom for every change of state or props
    render(){
        console.log("Render is called!! ", this.state.userName)
        let myname = "Windiee - JSX => Javascript Like XML Structure"
        let nameList = ["Nilay", "Gesan", "Jimmy", "Ben Ma", "Jay", "Everyone else"]
        let nameListWorking = []
        return(
        <>
             
            {/* <h2>This is my first react page from application Component</h2>
            <h2>This is my first react page with data {myname}</h2>
            <h3>Done</h3> */}
            

            <Header myname={myname}/>

            {nameList && nameList.map((name)=>{
                //return <b><hr/>{name}</b>})}
                return <Footer id={name} name={name} user={this.state.user}>
                    {/* <h2>Footer Componet-H2</h2>
                    <h3>Footer Componet-H3</h3> */}
                </Footer> })}
            
            <h3>Still Working</h3>
            {nameListWorking && nameListWorking.map((name)=>{
                //return <b><hr/>{name}</b>})}
                 return <Footer id={name} name={name} />})}
               

            <hr/>
            {/* <h2>{this.state.userName}</h2> */}
            <h2 name="h2_element">{this.state.userName}</h2>
            <button onClick={this.onclick}>Change Name</button>  

            <hr/>
            <h3>Home component</h3> 
            <MyComponent />
        </>)
    }
}