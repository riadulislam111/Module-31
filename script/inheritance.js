class Vehical {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    move() {
        console.log("ami cholachol korte pari");
    }


}

class Bus extends Vehical {
    constructor(name, price, seat) {
        super(name, price);
        this.seat = seat;
    }
    route() {
        console.log("dhaka to cox's bazar")
    }
}

const greenLine = new Bus("Green Line", "12", 50);
console.log(greenLine);
greenLine.move();

class Truck extends Vehical {
    constructor(name, price, load) {
        super(name, price);
        this.load = load;
    }
};

