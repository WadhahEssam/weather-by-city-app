import React , { Component } from 'react' ;
import { connect } from 'react-redux' ;
import { bindActionCreators } from 'redux' ;
import { fetchWeather } from "../actions/index.js";


class SearchBar extends Component  {

    constructor ( props ) {
        super( props ) ;
        this.state = { searchText:'' } ;
        this.onInputChange = this.onInputChange.bind(this) ;
        this.onFormSubmit = this.onFormSubmit.bind(this) ;
    }

    onInputChange ( event ) {
        this.setState({ searchText : event.target.value })  ;
    }

    onFormSubmit (event ) {
        // preventing the browser from making the default form submit
        event.preventDefault() ;

        this.props.fetchWeather(this.state.searchText) ;

        // this is why controlled components are important
        this.setState({searchText:''}) ;
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

function mapDispatchToProps ( dispatch ) {
    return bindActionCreators( { fetchWeather:fetchWeather } , dispatch ) ;
}



export default connect ( null ,  mapDispatchToProps ) ( SearchBar )  ;
