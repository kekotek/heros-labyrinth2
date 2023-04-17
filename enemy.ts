
class Enemy {

    sprite: Sprite;
    cell: Cell;

    constructor() {
        this.sprite = sprites.create(enemy, SpriteKind.Enemy);
    }

    move(cell: Cell) {
        this.cell = cell;
        this.sprite.setPosition(cell.posx, cell.posy)
        this.cell.enemies.push(this);
    }
}