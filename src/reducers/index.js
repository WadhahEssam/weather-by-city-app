// import { combineReducers } from 'redux';
// import WeatherReducer from './weather_reducer' ;
//
// // the state of our app or as they call it in Redux ( the store )
// const rootReducer = combineReducers({
//   weather : WeatherReducer ,
//     name : 'wadah'
// });
//
// export default rootReducer;

import { combineReducers } from 'redux';
import WeatherReducer from './weather_reducer' ;
import NameReducer from './name_reducer' ;

// the state of our app or as they call it in Redux ( the store )
const rootReducer = combineReducers({
    weather : WeatherReducer ,
    name : NameReducer
});

export default rootReducer;
