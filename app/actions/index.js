const API_KEY = '1d47984d24064a2783333bdd93cfbc19';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
    return {
        type: FETCH_WEATHER
    }
}