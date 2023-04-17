
class Game {
    
    level: ILevel;
    levelIndex: number = 0;
    
    hero: Hero;
    board: Board;
    background: Sprite;

    constructor(sprite: Sprite) {
        this.level = levels[this.levelIndex];
        this.background = sprites.create(image.create(160, 120));
        this.board = new Board();
        this.hero = new Hero();

        this.paint();
    }

    paint() {
        this.board.cells.map(i => i.map(ii => ii.clean()));
        this.background.setImage(this.level.background);
        this.level.cells.map(i => {
            let cell = this.board.getCell(i);
            cell.cellType = i;
            cell.drawCellType();
        })
        this.level.keys.map(i => new Key().move(this.board.getCell(i)));  
        this.level.swords.map(i => new Sword().move(this.board.getCell(i)));
        this.level.enemies.map(i => new Enemy().move(this.board.getCell(i)))
        this.level.oxygens.map(i => new Oxygen().move(this.board.getCell(i)))
        this.level.obstacles.map(i => new Obstacle().move(this.board.getCell(i)))
        this.hero.init(this.board.getCell(this.level.start));
        // this.hero.init(this.level.startDirection, this.board.getCell(this.level.start));
    }

    nextLevel() {
        music.playMelody("G A B C5 - - A C5 C5 C5 C5 ", 450)
        this.levelIndex++;
        if (this.levelIndex >= levels.length) {
            this.end();
        }
        else {
            this.level = levels[this.levelIndex];
            this.paint();
        }
    }

    end() {
        music.playMelody("G A B C5 - - A C5 C5 C5 C5 ", 450)
        let confetti = sprites.create(image.create(120, 2));
        confetti.setPosition(80, -2);
        confetti.startEffect(effects.confetti);
        basic.pause(100);
    }
    
}

let GAME: Game;
let hero: Sprite;

// hero.id = 100;
// let GAME = ;


// const GAME = new Game(hero);
