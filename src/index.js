import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = '470324462257-lg9f07s6gcmg6h3em7agmg5na7ns97q0.apps.googleusercontent.com';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));