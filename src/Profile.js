import React, { Component } from 'react'

class Profile extends Component {
    constructor(props){
        console.log("constructor()")
        super(props);
        this.state={
            intervall:null,
timer:0

        }
    }
    componentDidMount(){
        console.log("componentDidMount()");
    this.setState({
        intervall :setInterval(()=>{
        this.setState({timer:this.state.timer+1})
        },1000)
    }

    )
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
componentWillUnmount(){
    console.log("componentWillUnmount");
    clearInterval(this.state.intervall);
}


    state={
        isVisible:false

    }
    todos=[
        'badiaa rtimi',
        'process engineer',
        '26 ans',
    ]
    toggleVisibility=()=>{
        this.setState({
        isVisible:!this.state.isVisible})
    }
    render(){

    console.log("render()");
    return (
        <div>
            <button className="visibility-btn" onClick={this.toggleVisibility}>{this.state.isVisible ? 'hide profile' :'show profile'}</button>
            {this.state.isVisible ?
        <ul className="profile" >
        {this.todos.map((todo,i)=> (     
        <li key={i}>{todo}</li>
        ))}
        </ul>:(<h4>click on the button to show the profile</h4>)    
         
        }
           
       </div>
    )
}
}

export default Profile ;