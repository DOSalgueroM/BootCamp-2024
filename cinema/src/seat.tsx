class Seat {
    #isAvailable;
    constructor(isAvailable:boolean) {
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

    
    showImageReserve() {
        var img = document.createElement('img');
        //img.src = './assets/seat.png';
        return this.#isAvailable ?  img.src = 'src/assets/seat.png'  : img.src = 'src/assets/seatReserved.png';
    }
}
export default Seat