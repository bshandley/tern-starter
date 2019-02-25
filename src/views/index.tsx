import * as React from 'react'
import * as ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            message: 'No response from server!'
        }
    }
    apiTest() {
        axios.get('/ApiTest').then(response => {
            this.setState({message: response.data});
        })
    }
    componentDidMount(): void {
        this.apiTest();
    }
    render() {
        return(<div>{this.state.message}</div>)
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);