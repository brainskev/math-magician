import React from 'react';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Calculator />
        <Quote />
      </div>
    );
  }
}

export default App;
