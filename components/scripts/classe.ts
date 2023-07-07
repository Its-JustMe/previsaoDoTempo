// Arquivo que contém a classe principal do programa

/** Interface que contém funções encapsuladas da Classe WeatherMap */
interface WeatherInfo {
    /**
     * Método Público responsável por carregar os dados fornecidos
     * pela API na página
     * 
     * @param data JSON contendo as informações do Clima
    */
    loadWeatherInfo: (data: Record<string, any>) => void;
}

/**
 * Classe que carrega as informações da API e implementa
 * a interface WeatherInfo
*/
export class WeatherMap implements WeatherInfo {
    private url_API: string;
    private city: HTMLInputElement;

    constructor (cidade: HTMLInputElement) {
        this.city = cidade;
        this.url_API = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(this.city.value)}&units=metric&appid=984b2f5c2607b6f57ed10545ed59c079`;
    }

    // Getters e Setters
    public get getUrl (): string {
        return this.url_API;
    }

    public get getCityValue (): string {
        return this.city.value;
    }
    public set setCityValue (city_name: string) {
        this.city.value = city_name;
    }

    // Métodos

    /** 
     * Método público assíncrono getWeatherData realiza uma
     * requisição para a API OpenWeather, e caso obtenha uma resposta,
     * é feita uma chamada para outra função da classe, loadWeatherInfo()
     * passando os dados da API como parâmetros
    */
    public async getWeatherData (): Promise<void> {
        const warning: HTMLSpanElement = document.querySelector('#warning') as HTMLSpanElement;
        
        try {
            await fetch(this.getUrl).then((res: Response) => res.json()).then((data: Record<string, any>) => {
                if (data?.cod && data.cod === '404') {
                    warning.innerHTML = 'Erro: Cidade não encontrada.';
                }
    
                this.loadWeatherInfo(data);
            });
        } catch (e) {
            alert(e);
        }
    }

    public loadWeatherInfo (data: Record<string, any>): void {
        const div_content: HTMLDivElement = document.querySelector('div.weather-info') as HTMLDivElement;
        const cidade: HTMLHeadingElement = document.querySelector('h2#cidade') as HTMLInputElement;
        const img_clima: HTMLImageElement = document.querySelector('img') as HTMLImageElement;
        const temperatura: HTMLSpanElement = document.querySelector('#temperatura') as HTMLSpanElement;


        cidade.innerHTML = `${data.name}, ${data.sys.country}`;
        temperatura.innerHTML = `${Math.floor(data.main.temp)}° C`;
        
        div_content.style.visibility = 'visible';
        img_clima.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    }
}