import React , { Component } from 'react' ;

class Map extends Component {


    componentDidMount () {

        // the method Map is elated to the google maps library - the first argument is the reference , and the second argument is some configs , lat and lon will be coming from the weather api ss
        new google.maps.Map( this.refs.map , {
            zoom : 12 ,
            center : {
                lat : this.props.lat ,
                lng : this.props.lon
            }
        } )

    }

    render () {

        return (

            <div ref="map" />

        );
    }

}

export default Map ;