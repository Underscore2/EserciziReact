import react from 'react';
import Age from './Age';

class Welcome extends react.Component {
    render() {
        return (<div>
            <h1>Welcome {this.props.name}</h1>
            {((this.props.age > 18 && this.props.age < 65) && (this.props.name === "John")) && <Age age={this.props.age} />}
        </div>)
    }
}

export default Welcome;