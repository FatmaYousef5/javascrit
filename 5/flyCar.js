import { Car } from "/car.js"
export class flyCar extends Car {
    constructor(brand = "Maserati", model = "MC20", year = "2020", color = "Bianco Audace", canFly = true) {
        super(brand, model, year, color);
        this.canFly = canFly;
    }
}
