import React , { Component } from 'react'

export default class Login extends Component {
    
    constructor(props){
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    render (){
        return (
            <div>
                <h1>Login</h1>
                <form>
                    Username: <input type="text" onChange={this.handleInputChange}/>
                    Password: <input type="password" onChange={this.handleInputChange}/>
                </form>
            </div>
        )
    }
}