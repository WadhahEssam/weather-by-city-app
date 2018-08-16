import React , { Component } from 'react' ;
import { connect } from 'react-redux' ;
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {


    renderWeather (cityData) {

        let temp = [] ;
        let pressure = [] ;
        let humidity = [] ;

        cityData.list.map( function (day) {
            temp.push( day.main.temp ) ;
            pressure.push( day.main.pressure ) ;
            humidity.push( day.main.humidity ) ;
        }) ;



        console.log('hey') ;
        console.log(temp) ;

        return (
            <tr key={ cityData.city.id } >
                <td className={'city-name'}> {cityData.city.name} </td>
                <td >
                    <Sparklines data={temp} width={100} height={50}>
                        <SparklinesLine color="red" />
                    </Sparklines>
                </td>
                <td >
                    <Sparklines data={pressure} width={100} height={50}>
                        <SparklinesLine color="green" />
                    </Sparklines>
                </td>
                <td >
                    <Sparklines data={humidity} width={100} height={50}>
                        <SparklinesLine color="blue" />
                    </Sparklines>
                </td>
            </tr>
        );
    }

    render () {

        return (


                <table className="table table-hover">
                    {console.log(this.props)}
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temp</th>
                            <th>Pressure</th>
                            <th>Humidity</th>
                        </tr>
                    </thead>

                    <tbody>
                    { this.props.weather.map( this.renderWeather ) }
                    </tbody>

                </table>

        ) ;
    }

}

function mapStateToProps (  state  ) {
    return {
        weather : state.weather ,
        name : state.name
    } ;
}


export default connect ( mapStateToProps ) ( WeatherList )  ;
