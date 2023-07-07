"use strict";
var exports = {};
Object.defineProperty(exports, "__esModule", { value: true });
import { clickEventHandler } from "./modules.js";
window.onload = function () {
    var input_cidade = document.querySelector('input#input-cidade');
    var btn_search = document.querySelector('#btn-search');
    btn_search.addEventListener('click', clickEventHandler);
    input_cidade.addEventListener('keydown', function (ev) { return ev.key === 'Enter' ? btn_search.click() : null; });
};
