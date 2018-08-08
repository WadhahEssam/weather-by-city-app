import $ from 'axios' ;

const API_KEY = 'd8bfb85711fc7f4676c4ee982e6d0924' ;
export const FETCH_WEATHER = 'FETCH_WEATHER' ;

export function fetchWeather ( cityName ) {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName},us&appid=${API_KEY}` ;

    const response = $.get(url);

    return {
        type: FETCH_WEATHER,
        payload: response
    };


}