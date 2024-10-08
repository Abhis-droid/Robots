import React, { Component } from "react";
import Cardlist from "../components/Cardlist";
import Searchbox from "../components/Searchbox";
import Scroll from "../components/Scroll";
import './App.css'



class App extends Component{
    constructor(){
        super()
        this.state={
             robots: [],
             searchfield: ""

            }
        }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then (response =>  response.json())
        .then(users =>this.setState({robots: users}))    
    }

    OnSearchchange=(event) =>{
        this.setState({searchfield: event.target.value})
    } 
        
    
    render(){
        const {robots,searchfield}=this.state;
        const filteredrobots= robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        return !robots.length?
           <h1>Loading...</h1> :
        (  
            <div className="tc">
                <h1 className="f1">Hello Robofriends</h1>
                <Searchbox searchchange={this.OnSearchchange} />
                <Scroll>
                    <Cardlist robots={filteredrobots} />
                </Scroll>
                
            </div>
    
        );
        

    }
}
    


export default App;