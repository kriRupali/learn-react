import React, { Component } from 'react'

export default class NewConditionalRendering extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
    }
    handleIncrement =()=>
    // this.setState({count : this.state.count+1});

    {this.setState((prevstate) =>{return {count: prevstate.count + 1}})}

    handleDecrement = ()=>{this.setState((prevstate) =>{return {count: prevstate.count - 1}})}
    handleReset = ()=>{this.setState((prevstate)=>{return{count :0 }})}

    handleLogin = ()=>{this.setState({userlogin : !this.state.userlogin})}
    
  render() {
    return (
        <section>
            <article>
                <h1>Class Component-Counter</h1>
                <h2>{this.state.count}</h2>
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleDecrement}>Decrement</button>
                <button onClick={this.handleReset}>Reset</button>
            </article>

            {this.state.userLogin && 
            <section>
             
             <NewConditionalRendering handleIncrement = {this.handleIncrement} handleDecrement = {this.handleDecrement}  handleReset = {this.handleReset} count = {this.state.count}/>

            </section>
           }
             <button onClick={this.handleLogin}>Logout</button>

           <button onClick={this.handleLogin}>Login</button>
        </section>

    )
  }
}
