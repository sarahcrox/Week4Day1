import React, {Component} from 'react';

class Login extends Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return(
            <div>
                <input placeholder="Name"/>
                <input placeholder="Email Address"/>
                <input placeholder="Password"/>
                <button>Login</button>
            </div>
        )
    }
}

export default Login