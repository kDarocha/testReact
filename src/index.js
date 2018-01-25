import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCBMpr-H0S5GYNU01Kcp2JIGZHD5PYo1ss';

const App = () => {
	return (
	    <div>
            <SearchBar />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('.container'));