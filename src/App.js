import React from 'react'
import styled from 'styled-components'
import axios from 'axios';
import './App.css';
import User from './User.js';
import Followers from './Followers.js';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
        user: {},
        followers: []
    }
  } 
  
  componentDidMount(){
    axios.get('https://api.github.com/users/opa1164')
    .then(response => {
      this.setState({user: response.data});
      console.log(this.state.user);
    })
    .catch(error => {
      console.log(error);
    });
    
    axios.get('https://api.github.com/users/opa1164/followers')
    .then(response => {
      this.setState({followers: response.data});
      console.log(this.state.followers);
    })
    .catch(error => {
      console.log(error);
    }); 
  }
  
  
  
  
  render() {
    return (
        <div classname = "Main">
          <User user = {this.state.user} followers = {this.state.followers}/>
          <Followers followers = {this.state.followers}/>
        </div>
    );
  }
}

export default App;
