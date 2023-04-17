
class Board {
    
    widthCell: number = 17;
    heightCell: number = 17;

    rows: number = 7;
    columns: number = 9;
    cells: Cell[][] = [];

    // level: ILevel;

    constructor() {

        // console.log("aca");
        let initx = (160 - (this.columns * (this.widthCell - 1)) + 1) / 2 + this.widthCell / 2;
        let inity = (120 - (this.rows * (this.heightCell - 1) + 1)) / 2 + this.heightCell / 2;
        
        let x = initx;
        for (let c = 0; c < this.columns; c++) {
            let y = inity;
            this.cells[c] = [];
            for (let r = 0; r < this.rows; r++) {
                this.cells[c][r] = new Cell({ column: c, row: r }, this.widthCell, this.heightCell, x, y);
                // console.log(this.cells[c][r].edgeColor)
                y += (this.heightCell - 1);
            }
            x += (this.widthCell - 1);
        }
    }

    getCell(position: IPosition): Cell {
        return this.cells[position.column][position.row];
    }

    // setLevel(level: ILevel) {
    //     // this.
    // }
}