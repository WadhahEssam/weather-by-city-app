const API_KEY = 'd8bfb85711fc7f4676c4ee982e6d0924' ;
const ROOT_URL = `https://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}` ;

export const FETCH_WEATHER = 'FETCH_WEATHER' ;

export function fetchWeather ( cityName ) {
    return {
        type : FETCH_WEATHER ,
        cityName : cityName ,
    }
}