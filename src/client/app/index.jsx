import React from 'react';
import {render} from 'react-dom';
import LikeButton from './LikeButton.jsx';

class App extends React.Component {
  render () {
    return ( 
        <div>
            <p> Hello React!</p>
            <LikeButton />
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));

