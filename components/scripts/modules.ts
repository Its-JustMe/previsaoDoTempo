import { WeatherMap } from "./classe";

/**
 * Função que verifica se o valor do input está vazio,
 * emitindo true caso o campo esteja preenchido e false
 * caso o contrário
 * 
 * @param city Elemento Input a ser analisado
*/
function checkCityInput (city: HTMLInputElement): boolean {
    if (!city.value) {
        return false;
    }
    return true;
}

/** Função responsável por lidar com o evento de clique do botão da página,
 * além de realizar chamadas para outras funções e acessar a classe WeatherMap
 */
export function clickEventHandler (): void {
    const cidade: HTMLInputElement = document.querySelector('input#input-cidade') as HTMLInputElement;
    const warning: HTMLSpanElement = document.querySelector('#warning') as HTMLSpanElement;

    if (!checkCityInput(cidade)) {
        cidade.focus();
        warning.innerHTML = 'Por favor, preencha o campo acima corretamente.'
    } else {
        warning.innerHTML = '';
        /**Instância da classe WeatherMap */
        const weather_map: WeatherMap = new WeatherMap(cidade);
        weather_map.getWeatherData();
    }
}