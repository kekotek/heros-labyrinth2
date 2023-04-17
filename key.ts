
class Key {

    cell: Cell;
    sprite: Sprite;

    constructor() {
        this.sprite = sprites.create(key, SpriteKind.Food);
    }

    move(cell: Cell) {
        this.cell = cell;
        this.sprite.setPosition(cell.posx, cell.posy)
        this.cell.keys.push(this);
    }
}