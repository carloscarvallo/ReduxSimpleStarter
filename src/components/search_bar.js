import React, { Component } from 'react';


class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { term: ''};
    }

    render() {
        // event handler is onChange
        return (
            <div>
                <input onChange={event => this.setState({ term: event.target.value })} />
                {/* Value of the input: {this.state.term} */}
            </div>
        );
    }
}

// const SearchBar = () => {
//     return <input />;
// };

export default SearchBar;