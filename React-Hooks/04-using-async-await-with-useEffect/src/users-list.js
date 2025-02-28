import React from 'react';

export default class UsersList extends React.Component{
 state  = {
     users: []
 }

 componentDidMount(){
     console.log('Component Mounted');
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
     .then(res => this.setState({users: res}))
     .catch(err => console.log(err))
 }

 render(){
     console.log('render...');
     return(
         <div>Total Users: {this.state.users.length}</div>
     )
 }
}