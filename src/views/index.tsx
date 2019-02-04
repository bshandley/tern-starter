import * as React from 'react'
import * as ReactDOM from 'react-dom';

class App extends React.Component<any, any> {
    // @ts-ignore
    constructor(props) {
        super(props);
    }
    render() {
        return(<div>Hello World!</div>)
    }
}

ReactDOM.render(
    <App compiler="TypeScript" framework="React" />,
    document.getElementById("app")
);