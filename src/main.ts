// (async function() {
//    console.log('this works'); 
// })();

// interface Car {
//     model: string;
//     year: number | string;
// }

// function carIsValid(car: Car): boolean {
//     if (car.model && car.year) {
//         return true;
//     } else {
//         return false;
//     }
// }

// (function() {
//     let car: Car = {
//         model: 'Ford',
//         year: 1984
//     };

//     console.log(carIsValid(car))

// })();

// // --------------------------------------
// import WeatherData from './types';

// import axios from 'axios';

// const baseUrl = 'https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e8b30761fae22'

// // const longTimePromise = new Promise((resolve) => {
// //     setTimeout(() => {
// //         resolve('Here is some data');
// //     }, 1000);
// // })

// async function goGetData(): Promise<WeatherData> {
//     // console.log('I am here 1')
//     // const promiseData = await longTimePromise;
//     // console.log('promiseData', promiseData)
//     // console.log('I am here 2')

//     const { data } = await axios.get(baseUrl);
//     return data;
// }

// (async () => {
//     const data = await goGetData();
//     data.weather[0].id;
// })()

// ------------------------------------------
// Classes

class Car {
    public model: string;
    private serialNumber: number;

    constructor(
        model: string,
        serialNumber: number
        ) {
            this.model = model;
            this.serialNumber = serialNumber;
        }

    accelerate(): void {

    }
}

(() => {
    const firstCar = new Car('Chrysler', 123);
    const secondCar = new Car('Ford', 890)

    console.log('firstCar', firstCar);
    console.log('secondCar', secondCar);

    firstCar.accelerate();
})();