import Seat from "./seat";


class Cinema {
    rows;
    columns;
    seats;
    constructor(rows:number, columns:number) {
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

    reserve(row:number, column:number) {
        if (row >= 0 && row < this.rows && column >= 0 && column < this.columns) {
            if (this.seats[row][column].reserve()) {
                alert(`Seat reserved successfully.`);
                return true;
            } else {
                alert(`Seat is already reserved.`);
            }
        } else {
            alert("Invalid seat location.");
        }
        return false;
    }

    showCinema() {
        let charCode = 65;
        let row = [];
        for (let i = 0; i < this.rows; i++) {
          let column = [];
          for (let j = 0; j < this.columns; j++) {
            column.push(<img src={this.seats[i][j].showImageReserve()} alt="seat" />)
          }
          row.push(<div key={String.fromCharCode(charCode) + i}>{column}</div>)
          charCode++;
        }
        return row;
    }
}

export default Cinema;