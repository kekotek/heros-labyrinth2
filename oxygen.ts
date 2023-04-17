
class Oxygen {

    sprite: Sprite;
    cell: Cell;

    constructor() {
        this.sprite = sprites.create(oxygen, SpriteKind.Food);
    }

    move(cell: Cell) {
        this.cell = cell;
        this.sprite.setPosition(cell.posx, cell.posy);
        this.cell.oxygens.push(this);
    }
}