
class Cell {

    position: IPosition;
    // row: number;
    // column: number;
    width: number;
    height: number;
    posx: number;
    posy: number;

    // image: Image;
    sprite: Sprite;

    edgeColor: number = 0;
    // edgeColor: number = 8;
    
    cellType: ICellType = {};
    // lineWidth: number 1;
    lineColor: number = 14;

    keys: Key[] = [];
    swords: Sword[] = [];
    oxygens: Oxygen[] = [];
    enemies: Enemy[] = [];
    obstacles: Obstacle[] = [];
        
    constructor(position: IPosition, width: number, height: number, posx: number, posy: number) {
        this.position = position;
        // this.row = row;
        // this.column = column;
        this.width = width;
        this.height = height;
        this.posx = posx; 
        this.posy = posy;
        // this.image = ;
        // this.image.drawRect(0, 0, this.width, this.height, this.edgeColor);
        this.sprite = sprites.create(image.create(this.width, this.height));
        this.sprite.setPosition(this.posx, this.posy);
        // this.cellType = { up: false, down: false, false, false };
        // this.drawCellType();
        this.paint();
    }

    isValid(): boolean {
        if (this.obstacles.length > 0) {
            game.splash("Obstáculo en el camino !!!");
            return false;
        }
        return true;
    }

    clean() {
        this.keys.map(i => i.sprite.destroy());
        this.swords.map(i => i.sprite.destroy());
        this.oxygens.map(i => i.sprite.destroy());
        this.enemies.map(i => i.sprite.destroy());
        this.obstacles.map(i => i.sprite.destroy());

        this.keys = [];
        this.swords = [];
        this.oxygens = [];
        this.enemies = [];
        this.obstacles = [];
        
        this.cellType = {};
        this.paint();
    }

    paint() {
        this.sprite.setImage(image.create(this.width, this.height));
        this.sprite.image.drawRect(0, 0, this.width, this.height, this.edgeColor);
    }

    drawCellType(): void {
        if (this.cellType.left || this.cellType.right || this.cellType.up || this.cellType.down) 
            this.sprite.image.drawRect(this.width / 2 - 1, this.height / 2 - 1, 3, 3, 7);
        if (this.cellType.left) 
            this.sprite.image.drawLine(0, this.height / 2, this.width / 2, this.height / 2, this.lineColor);
        if (this.cellType.right)
            this.sprite.image.drawLine(this.width / 2, this.height / 2, this.width, this.height / 2, this.lineColor);
        if (this.cellType.up)
            this.sprite.image.drawLine(this.width / 2, 0, this.width / 2, this.height / 2, this.lineColor);
        if (this.cellType.down)
            this.sprite.image.drawLine(this.width / 2, this.height / 2, this.width / 2, this.height, this.lineColor);
    }
}