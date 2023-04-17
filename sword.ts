
class Sword {

    cell: Cell;
    sprite: Sprite;

    constructor() {
        this.sprite = sprites.create(sword, SpriteKind.Food);
    }

    move(cell: Cell) {
        this.cell = cell;
        this.sprite.setPosition(cell.posx, cell.posy)
        this.cell.swords.push(this);
    }
}