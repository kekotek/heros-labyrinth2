
class Hero {

    direction: Direction = Direction.Down;
    // sprite: Sprite;
    cell: Cell;

    key: boolean = false;
    sword: boolean = false;
    oxygen: boolean = false;

    image: { [key: number]: Image } = {
        [Direction.Up]: heroUp,
        [Direction.Right]: heroRight,
        [Direction.Down]: heroDown,
        [Direction.Left]: heroLeft,
    }

    constructor() {
        // this.sprite = sprites.create(image.create(17, 17), SpriteKind.Player);
        hero.setImage(this.image[this.direction]);
    }
    
    // init(direction: Direction, cell: Cell) {
    //     this.cell = cell;
    //     this.direction = direction;
    //     this.sprite.setImage(this.image[direction]);
    //     this.sprite.setPosition(cell.posx, cell.posy)
    //     // this.sprite = sprites.create(this.image[direction], SpriteKind.Player);
    // }

    init(cell: Cell) {
        this.cell = cell;
        // this.direction = direction;
        // this.sprite.setImage(this.image[direction]);
        hero.setPosition(cell.posx, cell.posy)
        // this.sprite = sprites.create(this.image[direction], SpriteKind.Player);
    }

    hit() {
        if (!this.sword) 
        {
            game.splash("No tengo espada !!!");
            return;
        }
        
        switch (this.direction) {
            case Direction.Up:
                {
                    if (this.cell.position.row == 0) return;
                    let cell = GAME.board.getCell({ column: this.cell.position.column, row: this.cell.position.row - 1 });
                    cell.enemies.map(i => i.sprite.destroy());
                    cell.enemies = [];
                    break;
                }
            case Direction.Right:
                {
                    if (this.cell.position.column == GAME.board.columns - 1) return;
                    let cell = GAME.board.getCell({ column: this.cell.position.column + 1, row: this.cell.position.row });
                    cell.enemies.map(i => i.sprite.destroy());
                    cell.enemies = [];
                    break;
                }
            case Direction.Down:
                {
                    if (this.cell.position.row == GAME.board.rows - 1) return;
                    let cell = GAME.board.getCell({ column: this.cell.position.column, row: this.cell.position.row + 1 });// , );
                    cell.enemies.map(i => i.sprite.destroy());
                    cell.enemies = [];
                    break;
                }
            case Direction.Left:
                {
                    if (this.cell.position.column == 0) return;
                    let cell = GAME.board.getCell({ column: this.cell.position.column - 1, row: this.cell.position.row });
                    cell.enemies.map(i => i.sprite.destroy());
                    cell.enemies = [];
                    break;
                }
        }
    }

    rotateRight() {
        switch (this.direction) {
            case Direction.Up:
                this.direction = Direction.Right;
                break;
            case Direction.Right:
                this.direction = Direction.Down;
                break;
            case Direction.Down:
                this.direction = Direction.Left;
                break;
            case Direction.Left:
                this.direction = Direction.Up;
                break;
        }
        hero.setImage(this.image[this.direction]);
    }

    rotateLeft() {
        switch (this.direction) {
            case Direction.Up:
                this.direction = Direction.Left;
                break;
            case Direction.Right:
                this.direction = Direction.Up;
                break;
            case Direction.Down:
                this.direction = Direction.Right;
                break;
            case Direction.Left:
                this.direction = Direction.Down;
                break;
        }
        hero.setImage(this.image[this.direction]);
    }

    moveForward() {
        switch (this.direction) {
            case Direction.Up:
            {
                if (this.cell.position.row == 0) return;
                let cell = GAME.board.getCell({ column: this.cell.position.column, row: this.cell.position.row - 1 });
                if (!cell.isValid()) return;
                if (!cell.cellType.down) { game.splash("Camino no valido !!!"); return; }
                this.cell = cell;
                break;
            }
            case Direction.Down:
            {
                if (this.cell.position.row == GAME.board.rows - 1) return;
                let cell = GAME.board.getCell({ column: this.cell.position.column, row: this.cell.position.row + 1 });// , );
                if (!cell.isValid()) return;
                if (!cell.cellType.up) { game.splash("Camino no valido !!!"); return; }
                this.cell = cell;
                
                break;
            }
            case Direction.Left:
            {
                if (this.cell.position.column == 0) return;
                let cell = GAME.board.getCell({ column: this.cell.position.column - 1, row: this.cell.position.row });
                if (!cell.isValid()) return;
                if (!cell.cellType.right) { game.splash("Camino no valido !!!"); return; }
                this.cell = cell;
                break;
            }
            case Direction.Right:
            {
                if (this.cell.position.column == GAME.board.columns - 1) return;
                let cell = GAME.board.getCell({ column: this.cell.position.column + 1, row: this.cell.position.row });
                if (!cell.isValid()) return;
                if (!cell.cellType.left) { game.splash("Camino no valido !!!"); return; }
                this.cell = cell;
                break;
            }
        }
        
        for (let i = 0; i < 16; i++) {
            switch (this.direction) {
                case Direction.Up:
                    hero.setPosition(hero.x, hero.y - 1);
                    break;
                case Direction.Left:
                    hero.setPosition(hero.x - 1, hero.y);
                    break;
                case Direction.Down:
                    hero.setPosition(hero.x, hero.y + 1);
                    break;
                case Direction.Right:
                    hero.setPosition(hero.x + 1, hero.y);
                    break;
            }
            basic.pause(50);
        }

        if (GAME.levelIndex == 0 && !this.oxygen && this.cell.position.row > 1) {
            game.splash("Glup glup glup !!!");
            GAME.paint();
        }

        if (this.cell.swords.length > 0) {
            this.sword = true;
            this.cell.swords.map(i => i.sprite.destroy());
            this.cell.swords = [];
        }

        if (this.cell.oxygens.length > 0) {
            this.oxygen = true;
            this.cell.oxygens.map(i => i.sprite.destroy());
            this.cell.oxygens = [];
        }

        if (this.cell.keys.length > 0) {
            this.key = true;
            this.cell.keys.map(i => i.sprite.destroy());
            this.cell.keys = [];
        }

        if (this.cell.enemies.length > 0) {
            game.splash("Derrotado !!!");
            GAME.paint();
        }

        if (this.cell.position.column == GAME.level.end.column && this.cell.position.row == GAME.level.end.row) {
            if (GAME.level.needKey) {
                if (this.key) {
                    this.key = false;
                    GAME.nextLevel();
                }
                else {
                    game.splash("Necesito una llave !!!");
                }                    
            }
            else {
                GAME.nextLevel();
            }
        }
            
    }

    
}