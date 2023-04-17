
interface ICellTypePosition extends ICellType, IPosition {
    // position: IPosition;
}

interface ICellType {

    up?: boolean;
    down?: boolean;
    left?: boolean;
    right?: boolean;

    // constructor(up: boolean, right: boolean, down: boolean, left: boolean)
    // {
    //     this.up = up;
    //     this.down = down;
    //     this.left = left;
    //     this.right = right;
    // }
}