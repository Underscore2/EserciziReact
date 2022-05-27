import react from 'react';
import Age from './Age';

class Welcome extends react.Component {
    render() {
        return (<div>

            <Age age={this.props.age} />

        </div>)
    }
}

export default Welcome;