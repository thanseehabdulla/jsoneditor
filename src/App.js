import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import JSONInput from 'react-json-editor-ajrm';


const object = {
    name: 'unknown',
    address: 'unknown'
}

const style = {
    outerBox: {
        width: '100%',
        height: '100vh'
    },
    container: {
        width: '100%',
        height: '100vh'
    },
    body: {
        width: '100%',
        height:'100vh'
    },
    labels: {
        width: "10%",
        height: '100vh'
    },
    contentBox: {
        width: "90%",
        height: '100vh'
    },
    warningBox: {
        width: '100%'
    },
    errorMessage: {
        width: '100%',
    }
}


class App extends Component {
    render() {
        return (
            <div className="">
                <JSONInput
                    id='a_unique_id'
                    placeholder={object}
                    // colors      = { darktheme }
                    height='550px'
                    style={style}
                />
            </div>
        );
    }
}

export default App;
