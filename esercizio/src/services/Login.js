import react from 'react';

class Login extends react.Component {

    state = {
        username: '',
        password: '',
        remember: false
    }

    inputHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        const remember = event.target.checked
        const type = event.target.type


        this.setState({
            [name]: type === 'checkbox' ? remember : value
        })


    }

    render() {
        return (
            <div>
                <div> <h3>Nome:</h3>
                    <input type="text" name="username" value={this.state.username} onChange={this.inputHandler} /></div>
                <div> <h3>Password:</h3>
                    <input type="password" name="password" value={this.state.password} onChange={this.inputHandler} />
                    <input type="checkbox" name="remember" value={this.state.remember} onChange={this.inputHandler} />
                </div>
            </div>
        )
    }

    componentDidUpdate() {
        console.log(this.state)
    }
}
export default Login;