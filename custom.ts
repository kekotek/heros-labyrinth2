namespace xxx {
    export function init(): void {
        GAME = new Game(hero)
        hero.id = 100;
    }
}

namespace movimientos {
    //% block
    export function avanzar(): void {
        GAME.hero.moveForward();
        // tank.move();
        // basic.pause(250);
    }

    //% block
    export function girarDerecha(): void {
        GAME.hero.rotateRight();
        // tank.rotateRight();
        // basic.pause(250);
    }

    //% block
    export function girarIzquierda(): void {
        GAME.hero.rotateLeft();
        // tank.rotateLeft();
        // basic.pause(250);
    }

    //% block
    export function atacar(): void {
        GAME.hero.hit();
        // tank.shoot();
        // basic.pause(250);
    }
}

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    GAME.hero.moveForward();
});

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    GAME.hero.hit();
});

controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    GAME.hero.rotateLeft();
});

controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    GAME.hero.rotateRight();
});

controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    movimientos.avanzar();
    movimientos.girarIzquierda();
    movimientos.avanzar();
    movimientos.girarIzquierda();
    movimientos.avanzar();
    movimientos.girarDerecha();
    movimientos.girarDerecha();
    movimientos.avanzar();
    movimientos.avanzar();
    movimientos.girarIzquierda();
    movimientos.avanzar();
    movimientos.avanzar();
    movimientos.girarDerecha();
    movimientos.avanzar();
    movimientos.avanzar();
    movimientos.avanzar();
    movimientos.girarIzquierda();
    movimientos.avanzar();
    movimientos.girarDerecha();
    movimientos.avanzar();
    movimientos.girarIzquierda();
    movimientos.avanzar();
    movimientos.avanzar();
    movimientos.girarIzquierda();
    movimientos.avanzar();
    movimientos.girarIzquierda();
    movimientos.avanzar();
    movimientos.girarDerecha();
    movimientos.avanzar();
    movimientos.girarDerecha();
    movimientos.avanzar();
    movimientos.girarIzquierda();
    movimientos.avanzar();
    movimientos.avanzar();
    movimientos.avanzar();
    movimientos.avanzar();
    movimientos.girarDerecha();
    movimientos.avanzar();
    movimientos.avanzar();
    movimientos.girarDerecha();
    movimientos.avanzar();
    movimientos.avanzar();
    movimientos.avanzar();
    movimientos.avanzar();
    movimientos.avanzar();
    
    movimientos.girarIzquierda();
    movimientos.girarIzquierda();
    movimientos.avanzar();
    movimientos.avanzar();
    movimientos.avanzar();
    movimientos.avanzar();
    movimientos.avanzar();
    movimientos.girarDerecha();
    movimientos.avanzar();
    movimientos.avanzar();
    movimientos.girarDerecha();
    movimientos.avanzar();
    movimientos.girarIzquierda();
    movimientos.avanzar();
    movimientos.avanzar();
    movimientos.girarIzquierda();
    movimientos.avanzar();
    movimientos.girarDerecha();
    movimientos.avanzar();
    movimientos.avanzar();
    movimientos.avanzar();
    movimientos.avanzar(); 
    movimientos.girarDerecha();
    movimientos.avanzar(); 
    movimientos.avanzar(); 
    movimientos.girarDerecha();
    movimientos.avanzar(); 
    movimientos.girarIzquierda();
    movimientos.avanzar(); 
    movimientos.avanzar(); 
    movimientos.avanzar(); 
    movimientos.avanzar(); 
    movimientos.girarIzquierda();
    movimientos.avanzar(); 
    movimientos.girarIzquierda();
    movimientos.girarIzquierda();
    movimientos.avanzar(); 
    movimientos.girarDerecha();
    movimientos.avanzar();
    movimientos.avanzar(); 
    movimientos.girarIzquierda();
    movimientos.avanzar(); 
    movimientos.girarIzquierda();
    movimientos.avanzar();
    movimientos.atacar();
    movimientos.avanzar(); 
    movimientos.girarDerecha();
    movimientos.avanzar();
    // movimientos.girarDerecha();
    // movimientos.avanzar();

    movimientos.girarIzquierda();
    movimientos.avanzar();
    movimientos.avanzar();
    movimientos.girarIzquierda();
    movimientos.avanzar();
    movimientos.avanzar();
    movimientos.girarDerecha();
    movimientos.avanzar();
    movimientos.avanzar();
    movimientos.avanzar();
    movimientos.girarDerecha();
    movimientos.avanzar();
    movimientos.avanzar();
    movimientos.girarDerecha();
    movimientos.avanzar();
    movimientos.girarIzquierda();
    movimientos.atacar();
    movimientos.avanzar(); 
    movimientos.avanzar();
    movimientos.avanzar();
    movimientos.avanzar();
    movimientos.girarDerecha();
    movimientos.avanzar();
    movimientos.avanzar();
    movimientos.avanzar();
    movimientos.girarIzquierda();
    movimientos.girarIzquierda();
    movimientos.avanzar();
    movimientos.avanzar();
    movimientos.girarDerecha();
    movimientos.avanzar();
    movimientos.avanzar();

    movimientos.girarIzquierda();
    movimientos.avanzar();
    movimientos.girarIzquierda();
    movimientos.avanzar(); 
    movimientos.girarDerecha();
    movimientos.avanzar();
    movimientos.girarDerecha();
    movimientos.avanzar();
    movimientos.girarIzquierda();
    movimientos.avanzar();
    movimientos.girarDerecha();
    movimientos.avanzar();
    movimientos.avanzar();
    movimientos.girarDerecha();
    movimientos.avanzar();
    movimientos.girarIzquierda();
    movimientos.avanzar();
    movimientos.avanzar();
    movimientos.girarDerecha();
    movimientos.avanzar();
    movimientos.avanzar();
    movimientos.girarDerecha();
    movimientos.avanzar();
    movimientos.girarIzquierda();
    movimientos.avanzar();
    movimientos.avanzar();
    movimientos.girarIzquierda();
    movimientos.avanzar();
    movimientos.avanzar();
    movimientos.avanzar();
    movimientos.avanzar();
    movimientos.avanzar();






    
    // GAME.levelIndex = GAME.levelIndex + 1;
    // GAME.level = levels[GAME.levelIndex];
    // GAME.paint();
});

