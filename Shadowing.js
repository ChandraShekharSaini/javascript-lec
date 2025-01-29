class Animal {
    constructor(legs) {
        this.legs = legs;
    }

    walk() {
        console.log("I Walk with with", this.legs)
    }
}


class Dogs extends Animal {
    constructor(food, legs) {
        super(legs)

        this.food = food;
    }


    walk() {

        super.walk()

        console.log("I am Dog")
    }
}

let data = new Dogs("Cips", 7)
data.walk()