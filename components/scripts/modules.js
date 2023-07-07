"use strict";
var exports = {};
Object.defineProperty(exports, "__esModule", { value: true });
import { WeatherMap } from "./classe.js";
/**
 * Função que verifica se o valor do input está vazio,
 * emitindo true caso o campo esteja preenchido e false
 * caso o contrário
 *
 * @param city Elemento Input a ser analisado
*/
function checkCityInput(city) {
    if (!city.value) {
        return false;
    }
    return true;
}
/** Função responsável por lidar com o evento de clique do botão da página,
 * além de realizar chamadas para outras funções e acessar a classe WeatherMap
 */
function clickEventHandler() {
    var cidade = document.querySelector('input#input-cidade');
    var warning = document.querySelector('#warning');
    if (!checkCityInput(cidade)) {
        cidade.focus();
        warning.innerHTML = 'Por favor, preencha o campo acima corretamente.';
    }
    else {
        warning.innerHTML = '';
        /**Instância da classe WeatherMap */
        var weather_map = new WeatherMap(cidade);
        weather_map.getWeatherData();
    }
}
const _clickEventHandler = clickEventHandler;
export { _clickEventHandler as clickEventHandler };
