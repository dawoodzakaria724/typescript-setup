"use strict";
class Car {
    constructor(model, serialNumber) {
        this.model = model;
        this.serialNumber = serialNumber;
    }
}
(() => {
    const firstCar = new Car('Chrysler', 123);
    const secondCar = new Car('Ford', 890);
    console.log('firstCar', firstCar);
    console.log('secondCar', secondCar);
})();
