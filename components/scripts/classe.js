"use strict";
// Arquivo que contém a classe principal do programa
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var exports = {};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Classe que carrega as informações da API e implementa
 * a interface WeatherInfo
*/
var WeatherMap = /** @class */ (function () {
    function WeatherMap(cidade) {
        this.city = cidade;
        this.url_API = "https://api.openweathermap.org/data/2.5/weather?q=".concat(encodeURI(this.city.value), "&units=metric&appid=984b2f5c2607b6f57ed10545ed59c079");
    }
    Object.defineProperty(WeatherMap.prototype, "getUrl", {
        // Getters e Setters
        get: function () {
            return this.url_API;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WeatherMap.prototype, "getCityValue", {
        get: function () {
            return this.city.value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WeatherMap.prototype, "setCityValue", {
        set: function (city_name) {
            this.city.value = city_name;
        },
        enumerable: false,
        configurable: true
    });
    // Métodos
    /**
     * Método público assíncrono getWeatherData realiza uma
     * requisição para a API OpenWeather, e caso obtenha uma resposta,
     * é feita uma chamada para outra função da classe, loadWeatherInfo()
     * passando os dados da API como parâmetros
    */
    WeatherMap.prototype.getWeatherData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var warning, e_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        warning = document.querySelector('#warning');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, fetch(this.getUrl).then(function (res) { return res.json(); }).then(function (data) {
                                if ((data === null || data === void 0 ? void 0 : data.cod) && data.cod === '404') {
                                    warning.innerHTML = 'Erro: Cidade não encontrada.';
                                }
                                _this.loadWeatherInfo(data);
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        alert(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    WeatherMap.prototype.loadWeatherInfo = function (data) {
        var div_content = document.querySelector('div.weather-info');
        var cidade = document.querySelector('h2#cidade');
        var img_clima = document.querySelector('img');
        var temperatura = document.querySelector('#temperatura');
        cidade.innerHTML = "".concat(data.name, ", ").concat(data.sys.country);
        temperatura.innerHTML = "".concat(Math.floor(data.main.temp), "\u00B0 C");
        div_content.style.visibility = 'visible';
        img_clima.src = "http://openweathermap.org/img/wn/".concat(data.weather[0].icon, "@2x.png");
    };
    return WeatherMap;
}());
const _WeatherMap = WeatherMap;
export { _WeatherMap as WeatherMap };
