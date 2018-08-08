import React , { Component } from 'react' ;


class SearchBar extends Component  {

    constructor ( props ) {
        super( props ) ;
        this.state = { searchText:'' } ;
        this.onInputChange = this.onInputChange.bind(this) ;
        SearchBar.onFormSubmit = SearchBar.onFormSubmit.bind(this) ;
    }

    onInputChange ( event ) {
        this.setState({ searchText : event.target.value })  ;
    }

    onFormSubmit (event ) {
        // preventing the browser from making the default form submit
        event.preventDefault() ;
    }

    render () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="search-bar input-group mb-3">

                        <input type="text"
                               className="form-control"
                               value={this.state.searchText}
                               onChange={ this.onInputChange }
                               placeholder="Search for a city"
                               aria-label="Recipient's username"
                               aria-describedby="basic-addon2" />

                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="submit">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        ) ;
    }

}

export default SearchBar ;