
import react, { createRef } from 'react';

class Login extends react.Component {
    _formRef = createRef()
    _autoFocus = createRef()
    _passwordRed=createRef()


    state={
        password:''
    }




    inputHandler = (event) => {
        this.setState((state)=>{return{
            password: state.password=event.target.value
        }})
     

    }

    handlerFormPrefill = () => {
        this._formRef.current.elements.username.value = "Jimmy"
        this._formRef.current.elements.password.value = "CIAO"
        this._formRef.current.elements.remember.checked = true;

    }

    
    
    render() {

        const buttonStyle={
         border:   this.state.password.length <= 8 ? "1px solid red" : "1px solid green"
        }
        return (
            <div>
                <form ref={this._formRef} onSubmit={this.inputHandler}>
                    <div>
                        <h3>Nome:</h3>
                        <input type="text" ref={this._autoFocus} name="username" /></div>
                    <div>
                        <h3>Password:</h3>
                        <input name="password" style={buttonStyle} value={this.state.password} onChange={this.inputHandler}type="password" />
                        <input name="remember" type="checkbox" />
                        <button type="submit">Login</button>
                        <button type='reset' >Reset</button>
                        <button type='button' onClick={this.handlerFormPrefill}>Prefill</button>
                    </div>
                </form>
            </div>
        )
    }
    componentDidMount = () => {
        this._autoFocus.current.focus()
    }

}
export default Login;

