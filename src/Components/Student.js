import React, { Component } from "react";

class Student extends Component {
    //  state ={
    //     text: "this is state...........",
    //     rollno:this.props.rollno

    //  }
    constructor(props){
        super(props);
        console.log("constructor called...........")
        this.state ={
                text: "this is state...........",
                rollno:this.props.rollno
        
             }
             this.handleClick=this.handleClick.bind(this)
    }

    static getDerivedStateFromProps(props , state){
        console.log("get derived state from props");
        console.log(props,state)

    }

    componentDidMount(){
        console.log("component did mount called....")
    }
    handleClick(){
        // console.log("click me here" , this)
        this.setState({text:"this is another state......" , rollno:'500'});
    }

    render(){
        console.log("render called........");
        return(
            <>
            {/* <p>{this.state.text} roll no is {this.state.rollno}</p>
            <h1>Hello ...class component</h1>
            <p>{this.props.name}</p> */}
            {/* <p>{this.props.rollno}</p> */}
            <button className="button"  onClick={this.handleClick}>Clicked</button>
            </>
        )
    }
}

export default Student;