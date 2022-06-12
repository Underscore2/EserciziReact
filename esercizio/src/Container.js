import react from 'react';

class Container extends react.Component{
    render(){

        const divStyle={
            backgroundColor: "white",
            border: "1px solid red"
        }
        return(
            <>
                <div className='divStyle'>
                   { this.props.children}
                </div>

                <div className='divStyleBlu'><h1>{this.props.title} </h1></div>
            </>
        )
    }
}
export default Container