
class Obstacle {

    sprite: Sprite;
    cell: Cell;

    constructor() {
        this.sprite = sprites.create(obstacle, SpriteKind.Enemy);
    }

    move(cell: Cell) {
        this.cell = cell;
        this.sprite.setPosition(cell.posx, cell.posy)
        this.cell.obstacles.push(this);
    }
}