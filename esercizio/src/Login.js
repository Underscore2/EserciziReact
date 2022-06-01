import react from 'react';

class Login extends react.Component {

    state = {
        username: '',
        password: '',
        remember: false,
        login: true
    }

    inputHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        const remember = event.target.checked
        const type = event.target.type



        this.setState({
            [name]: type === 'checkbox' ? remember : value,
            login:
                this.state.username !== '' ||
                    this.state.password !== '' ? false : true
        })


    }

    onLogin = () => {
        console.log(this.state)
    }

    onReset = () => {
        this.setState(
            {
                password: '',
                username: '',
                remember: false,
                login: true,
            }
        )
    }
    render() {
        return (
            <div>
                <div> <h3>Nome:</h3>
                    <input type="text" name="username" value={this.state.username} onChange={this.inputHandler} /></div>
                <div> <h3>Password:</h3>
                    <input type="password" name="password" value={this.state.password} onChange={this.inputHandler} />
                    <input type="checkbox" name="remember" value={this.state.remember} onChange={this.inputHandler} />
                    <button type='submit' disabled={this.state.login} onClick={this.onLogin}>Login</button>
                    <button onClick={this.onReset}>Reset</button>
                </div>
            </div>
        )
    }

}
export default Login;