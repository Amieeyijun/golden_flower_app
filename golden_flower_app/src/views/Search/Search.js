import React, { Component } from 'react';
import { SearchBar,WhiteSpace} from 'antd-mobile';
import './Search.css'
class Search extends Component {
    render() {
        return (
            <div>
                <SearchBar placeholder="Search" maxLength={8} />
                <WhiteSpace />
            </div>
        );
    }
}

export default Search;