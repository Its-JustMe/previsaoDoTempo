import { clickEventHandler } from "./modules";

window.onload = (): void => {
    const input_cidade: HTMLInputElement = document.querySelector('input#input-cidade') as HTMLInputElement;
    const btn_search: HTMLButtonElement = document.querySelector('#btn-search') as HTMLButtonElement;

    btn_search.addEventListener('click', clickEventHandler);
    input_cidade.addEventListener('keydown', (ev: KeyboardEvent) => ev.key === 'Enter' ? btn_search.click() : null);
}