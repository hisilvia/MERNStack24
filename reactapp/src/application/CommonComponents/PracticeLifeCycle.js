import React from 'react';
import ReactDOM from 'react-dom/client';

export default class PracticeLifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() {
    console.log("componentDidMount method is called")
    setTimeout(() => {
      console.log("before this.setState")
      this.setState({favoritecolor: "yellow"})
      console.log("inside this.setState")
    }, 1000)
  }
  render() {
    return (
        <>
            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        </>
      
    );
  }
}