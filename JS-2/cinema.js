class Seat {
    #isAvailable;
    constructor(isAvailable) {
        this.#isAvailable = isAvailable;
    }

    getAvailability() {
        return this.#isAvailable;
    }

    reserve() {
        if (this.#isAvailable) {
            this.#isAvailable = false;
            return true;
        }
        return false;
    }

    toString() {
        return this.#isAvailable ? "A" : "R";
    }
}

class Cinema {
    
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.seats = new Array(rows);
        this.createCinema();
    }

    createCinema() {
        for (let i = 0; i < this.rows; i++) {
            this.seats[i] = new Array(this.columns);
            for (let j = 0; j < this.columns; j++) {
                this.seats[i][j] = new Seat(true);
            }
        }
    }

    reserve(row, column) {
        if (row >= 0 && row < this.rows && column >= 0 && column < this.columns) {
            if (this.seats[row][column].reserve()) {
                console.log(`Seat reserved successfully.`);
                return true;
            } else {
                console.log(`Seat is already reserved.`);
            }
        } else {
            console.log("Invalid seat location.");
        }
        return false;
    }

    showCinema() {
        let charCode = 65;
        console.log("Cinema seating:");
        for (let i = 0; i < this.rows; i++) {
            let row = "";
            for (let j = 0; j < this.columns; j++) {
                row += String.fromCharCode(charCode) + ("(" + i + ", " + j + ")") + " " + this.seats[i][j].toString() + " || ";
            }
            charCode++;
            console.log(row);
        }
    }
}

let cinema = new Cinema(4, 7);
cinema.showCinema();
cinema.reserve(0, 2);
cinema.showCinema();
cinema.reserve(0, 2);  
cinema.showCinema();
cinema.reserve(1, 2);
cinema.showCinema();
cinema.reserve(1, 8);
cinema.showCinema();