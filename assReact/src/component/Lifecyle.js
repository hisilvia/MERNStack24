import React, {Component} from "react";

export default class Lifecyle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            info: {
                pet: "cat",
                city: "MO"
            }
        }
    }
    
    componentDidMount() {
        console.log("componentDidMount")
        setTimeout(() => {
          this.setState({
            info: {
                pet: "dog",
                city: "FL" 
            }
        })
        }, 1000)
    }

    shouldComponentUpdate (nextProps, nextState) {
        console.log("shouldComponentUpdate")

        if (this.state.info == nextState.info ) {
            return false // should not call render method to create virtual dom - as no change in firstName
        } else {
            return true // keep calling render method     
        }

    }

    // change = () => {
    //     this.setState({
    //         pet: "dog1",
    //         city: "FL1"
        
    //     })
    // }
    incrementAge = ()=>{
        this.incrementAgeLoop = setInterval(()=>{ //continous loop
            this.incrementAgeVal++
            this.setState({
                age : this.incrementAgeVal
            })

            console.log(this.incrementAgeVal)
        }, 500) //runs every  2 seconds forever - unless cleared

        // setTimeout(()=>{
        //     clearInterval(this.incrementAgeLoop)
        // },1000)
    }

     //update life cycle methods called after render
     getSnapshotBeforeUpdate(prevState, prevProps){
        console.log("getSnapshotBeforeUpdate");
        // console.log("prevState", prevState);
        // console.log("prevProps", prevProps);

        // this.prevUser = prevState.user;
        // this.setState({
        //     user : this.prevUser
        // })

        return {
            prevState,
            prevProps
        }
    }

    componentDidUpdate(prevState, prevProps){
        console.log("componentDidUpdate");
        
    }

    //destruction
    componentWillUnmount(){
        console.log("componentWillUnmount is called")
        clearInterval(this.incrementAgeLoop)

    }

    render() {

        return (
            <>
                <div className="header">
                    <h2>The Favorite pet is {this.state.info.pet}</h2>
                    <h2>The Favorite pet is {this.state.info.city}</h2>
                </div>
                
            </>

        )
    }

    

}