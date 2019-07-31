import React from 'react';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <label htmlFor="bar">
                    bar
                </label>
                <input type="text" onChange={() => {
                    console.log("hello")
                }}/>
            </React.Fragment>
        );
    }
}

export default App;