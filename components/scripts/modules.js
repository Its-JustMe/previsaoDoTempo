"use strict";
var exports = {};
Object.defineProperty(exports, "__esModule", { value: true });
import { WeatherMap } from "./classe.js";
function checkCityInput(city) {
    if (!city.value) {
        return false;
    }
    return true;
}
function clickEventHandler() {
    var cidade = document.querySelector('input#input-cidade');
    var warning = document.querySelector('#warning');
    if (!checkCityInput(cidade)) {
        cidade.focus();
        warning.innerHTML = 'Por favor, preencha o campo acima corretamente.';
    }
    else {
        warning.innerHTML = '';
        var weather_map = new WeatherMap(cidade);
        weather_map.getWeatherData();
    }
}
const _clickEventHandler = clickEventHandler;
export { _clickEventHandler as clickEventHandler };
