import React, { Component } from "react";
import { connect } from "react-redux";
import { AddStudentToStore, SaveStudentToDBUsingFetch } from "../../state/StudentActions";
//import { SaveStudentToDBUsingAxios } from "../../state/StudentActions";

class StudentComponent extends Component{

    constructor(props){
        super(props);

        this.state = {
            studentName : props.student.studentName, // we need to read from store using props through container
                                            // student is from StudentReducer.js
            major : props.student.major,
            
        }
    }

    onTextChange = (evt)=>{
        let target = evt.target;
        let classList = target.classList;//reading the class name of html when change event happens
        let value = target.value;
    
        if(classList.contains("studentname")){
            this.setState({ studentName : value })
        }else  {
            this.setState({ major : value })
        }    

        evt.preventDefault();
    }

    loginStudent = (evt)=>{        
        let newStudent = this.state;
        alert("Logged Innn -"+JSON.stringify(newStudent))

        //upon user action to login we send user to store
        //this.props.addUser(newUser);    //line 106: addUser()
        
        this.props.saveStudentToDBUsingFetch(newStudent);

        //this.props.saveStudentToDBUsingAxios(newStudent);

        //this.props.loginUser(newUser) //will go to usercontainer => useraction => server(db) => store => userreducer

        evt.preventDefault();
    }


    render(){
        return(
            <>
                <h1>Student Login Page</h1>
                <section className={"componentClass"}>
                    <div className="form col-md-8">
                        <div className="col-md-12">
                            <b>Student Name</b>
                            <input type="text" className="form-control col-md-6 studentname" 
                                    value={this.state.studentName} 
                                placeholder="Student Name" onChange={this.onTextChange} maxLength={40}/>
            
                            </div>
                            <div className="col-md-12">
                                    <b>Major</b>
                                    <input type="text" className="form-control col-md-6 pass" value={this.state.major} 
                                    placeholder="major" onChange={this.onTextChange} maxLength={40}/>
                            </div>
                            {/* <div className="col-md-12">
                            <b>Street </b>
                                <input type="text" className="form-control col-md-6 street" value={this.state.street} 
                                        placeholder="Street Name" onChange={this.onTextChange} />
                            </div>
                        
                            <div className="col-md-12">
                                <b>Mobile </b>
                                <input type="number" className="form-control col-md-6 mobile" value={this.state.mobile} 
                                placeholder="Mobile" maxLength="11"
                                onChange={this.onTextChange} />
                            </div> */}

                            <input type="submit" className={"btn btn-primary col-md-2 saveStudent"} 
                                    value={"SignIn-Up"} 
                                    onClick={this.loginStudent}/>
                                    
                        </div>
                </section>
            </>
        )
    }
}


//mapstatetoprops -- allows component to become subscriber

let mapStateToProps = (store) => { //store is the redux states
    return {
        student : store.StudentReducer.student
    //user - will be accessed as props.user in component which is a UserReducer
    }
}

//mapDispatchToProps -- allows us to send data back to store to update in reducer
//dispatch - this dispatcher we get from connect to send action to store
let mapDispatchToProps = (dispatch)=>{
    return {
        addStudent : (student)=>{
            dispatch(AddStudentToStore(student))
        },
        saveStudentToDBUsingFetch : (student)=>{
            dispatch(SaveStudentToDBUsingFetch(student))
        },
        saveStudentToDBUsingAxios : (student)=>{
            dispatch(SaveStudentToDBUsingAxios(student))
        }
    }
}


//connect accepts - mapStateToProps - for subscribing and mapDispatchToProps - for publishing
export default connect(mapStateToProps, mapDispatchToProps)(StudentComponent)