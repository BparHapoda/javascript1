function Car(manufacturer, model, yearOfProduction, averageVelocity) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.yearOfProduction = yearOfProduction;
    this.averageVelocity = averageVelocity;
    this.travelTime = function (distance) {
        let time = +distance / +this.averageVelocity;
        let gap = 0;
        if (time > 4) {
            gap = time / 4;
            time += gap;
        }
        ;
        time = Math.floor(time);
        return `Преодолеет ${distance} км за ${time} часов (с учетом отдыха водителя ${gap} ч)`;
    }
    this.info = function () {
        return `Автомобиль ${manufacturer} ${model} , ${yearOfProduction}г выпуска имеет среднюю скорость 
    ${averageVelocity}км/ч`;
    }
    this.toString = function () {
        return `Car ${this.manufacturer} ${this.model} ${this.year}`;
    }
}

let zaz = new Car('Запорожец', 'ЗАЗ-964', 1960, 50);
let mers = new Car('Mercedes-Benz', 'SLC', 2021, 150);
console.log(zaz.info());
console.log(zaz.travelTime(1200));
console.log('' + zaz);

console.log(mers.info());
console.log(mers.travelTime(1200));
console.log('' + mers);


class Car1{
    constructor(manufacturer, model, yearOfProduction, averageVelocity) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.yearOfProduction = +yearOfProduction;
        this.averageVelocity = +averageVelocity;
    }

    travelTime(distance) {
        let time = +distance / this.averageVelocity;
        let gap = 0;
        if (time > 4) {
            gap = time / 4;
            time += gap;
        }
        ;
        time = Math.floor(time);
        return `Преодолеет ${distance} км за ${time} часов (с учетом отдыха водителя ${gap} ч)`;
    }

    info() {
        return `Автомобиль ${this.manufacturer} ${this.model} , ${this.yearOfProduction}г выпуска имеет среднюю скорость 
    ${this.averageVelocity}км/ч`;
    }

    toString() {
        return `Car ${this.manufacturer} ${this.model} ${this.year}`;
    }

}
let zaz1 = new Car1('Запорожец', 'ЗАЗ-964', 1960, 50);
let mers1 = new Car1('Mercedes-Benz', 'SLC', 2021, 150);
console.log(zaz1.info());
console.log(zaz1.travelTime(1200));
console.log('' + zaz1);

console.log(mers1.info());
console.log(mers1.travelTime(1200));
console.log('' + mers1);