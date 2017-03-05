const API_KEY = '1d47984d24064a2783333bdd93cfbc19';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?q=London,us&appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    
    return {
        type: FETCH_WEATHER
    };
}