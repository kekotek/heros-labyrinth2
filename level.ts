

interface ILevel {
    background: Image;
    start: IPosition;
    // startDirection: Direction;
    end: IPosition;
    needKey: boolean;
    keys: IPosition[];
    swords: IPosition[];
    oxygens: IPosition[];
    enemies: IPosition[];
    obstacles: IPosition[];
    cells: ICellTypePosition[];
}

const levels: ILevel[] = [
    {
        background: background1,
        start: { column: 0, row: 0 },
        // startDirection: Direction.Down,
        end: { column: 8, row: 5 },
        needKey: true,
        keys: [
            { column: 5, row: 5 }
        ],
        swords: [
        ],
        oxygens: [
            { column: 1, row: 0 }
        ],
        enemies: [
        ],
        obstacles: [
            { column: 2, row: 3 },
            { column: 5, row: 2 },
            { column: 7, row: 4 }
        ],
        cells: [
            { column: 0, row: 0, down: true },
            { column: 0, row: 1, down: true, up: true, right: true },
            { column: 0, row: 2, down: true, up: true },
            { column: 0, row: 3, down: true, up: true, right: true },
            { column: 0, row: 4, down: true, up: true },
            { column: 0, row: 5, down: true, up: true },
            { column: 0, row: 6, up: true },
            { column: 1, row: 0, down: true },
            { column: 1, row: 1, left: true, down: true, up: true },
            { column: 1, row: 2, up: true, right: true },
            { column: 1, row: 3, right: true, left: true },
            { column: 2, row: 2, left: true, right: true, down: true },
            { column: 2, row: 3, left: true, down: true, up: true },
            { column: 2, row: 4, up: true, down: true, right: true },
            { column: 2, row: 5, up: true, down: true },
            { column: 2, row: 6, up: true, right: true },
            { column: 3, row: 0, down: true },
            { column: 3, row: 1, down: true, up: true, right: true },
            { column: 3, row: 2, down: true, up: true, left: true, right: true },
            { column: 3, row: 3, down: true, up: true, right: true },
            { column: 3, row: 4, down: true, up: true, left: true },
            { column: 3, row: 5, down: true, up: true, right: true },
            { column: 3, row: 6, up: true, left: true },
            { column: 4, row: 1, left: true, right: true },
            { column: 4, row: 2, left: true, right: true },
            { column: 4, row: 3, left: true },
            { column: 4, row: 4, down: true },
            { column: 4, row: 5, up: true, down: true, left: true },
            { column: 4, row: 6, up: true, right: true },
            { column: 5, row: 0, down: true },
            { column: 5, row: 1, up: true, left: true },
            { column: 5, row: 2, right: true, left: true, down: true },
            { column: 5, row: 3, up: true, down: true },
            { column: 5, row: 4, up: true, down: true, right: true },
            { column: 5, row: 5, right: true, up: true },
            { column: 5, row: 6, left: true, right: true },
            { column: 6, row: 0, down: true, right: true },
            { column: 6, row: 1, down: true, up: true },
            { column: 6, row: 2, up: true, down: true, left: true },
            { column: 6, row: 3, up: true, down: true },
            { column: 6, row: 4, up: true, left: true, right: true },
            { column: 6, row: 5, down: true, left: true, right: true },
            { column: 6, row: 6, up: true, left: true, right: true },
            { column: 7, row: 0, right: true, left: true },
            { column: 7, row: 3, right: true },
            { column: 7, row: 4, left: true },
            { column: 7, row: 5, down: true, left: true },
            { column: 7, row: 6, up: true, left: true, right: true },
            { column: 8, row: 0, down: true, left: true },
            { column: 8, row: 1, up: true, down: true },
            { column: 8, row: 2, up: true, down: true },
            { column: 8, row: 3, up: true, down: true, left: true },
            { column: 8, row: 4, up: true, down: true },
            { column: 8, row: 5, up: true, right: true },
            { column: 8, row: 6, left: true },
        ]
    },
    {
        background: background2,
        start: { column: 0, row: 5 },
        // startDirection: Direction.Down,
        end: { column: 5, row: 6 },
        needKey: true,
        keys: [
            { column: 8, row: 6 }
        ],
        swords: [
            { column: 7, row: 0 }
            
        ],
        oxygens: [
            
        ],
        enemies: [
            { column: 6, row: 6 },
        ],
        obstacles: [
            { column: 1, row: 1 },
            { column: 7, row: 1 },
            { column: 5, row: 2 },
            { column: 3, row: 5 },
            { column: 5, row: 5 },
        ],
        cells: [
            { column: 0, row: 0, right: true, down: true },
            { column: 0, row: 1, up: true, down: true },
            { column: 0, row: 2, up: true, down: true },
            { column: 0, row: 3, up: true, down: true },
            { column: 0, row: 4, up: true, down: true },
            { column: 0, row: 5, up: true, right: true },
            { column: 1, row: 0, right: true, left: true, down: true },
            { column: 1, row: 1, right: true, up: true, down: true },
            { column: 1, row: 2, up: true, down: true },
            { column: 1, row: 3, up: true, down: true },
            { column: 1, row: 4, up: true, right: true },
            { column: 1, row: 5, down: true, right: true, left: true },
            { column: 1, row: 6, up: true, right: true },
            { column: 2, row: 0, left: true, down: true },
            { column: 2, row: 1, up: true, left: true, right: true },
            { column: 2, row: 4, right: true, left: true },
            { column: 2, row: 5, right: true, left: true },
            { column: 2, row: 6, right: true, left: true },
            { column: 3, row: 1, right: true, left: true },
            { column: 3, row: 4, right: true, left: true },
            { column: 3, row: 5, left: true },
            { column: 3, row: 6, right: true, left: true },
            { column: 4, row: 0, right: true, down: true },
            { column: 4, row: 1, right: true, left: true, down: true, up: true },
            { column: 4, row: 2, up: true, right: true },
            { column: 4, row: 4, right: true, left: true },
            { column: 4, row: 6, left: true },
            { column: 5, row: 0, right: true, left: true },
            { column: 5, row: 1, right: true, left: true },
            { column: 5, row: 2, left: true, down: true },
            { column: 5, row: 3, up: true, right: true },
            { column: 5, row: 4, right: true, left: true },
            { column: 5, row: 5, right: true },
            { column: 5, row: 6, right: true, down: true },
            { column: 6, row: 0, right: true, left: true },
            { column: 6, row: 1, right: true, left: true },
            { column: 6, row: 3, left: true, down: true },
            { column: 6, row: 4, right: true, left: true, up: true, down: true },
            { column: 6, row: 5, left: true, up: true, down: true },
            { column: 6, row: 6, up: true, left: true },
            { column: 7, row: 0, right: true, left: true },
            { column: 7, row: 1, left: true, down: true },
            { column: 7, row: 2, up: true, down: true, right: true },
            { column: 7, row: 3, up: true, down: true },
            { column: 7, row: 4, left: true, right: true, up: true, down: true },
            { column: 7, row: 5, up: true, down: true },
            { column: 7, row: 6, up: true, right: true },
            { column: 8, row: 0, left: true, down: true },
            { column: 8, row: 1, up: true, down: true },
            { column: 8, row: 2, left: true, up: true },
            { column: 8, row: 4, left: true },
            { column: 8, row: 6, left: true, },
        ]
    },
    {
        background: background3,
        start: { column: 5, row: 0 },
        // startDirection: Direction.Down,
        end: { column: 0, row: 3 },
        needKey: true,
        keys: [
            { column: 1, row: 1 }
        ],
        swords: [

        ],
        oxygens: [
            
        ],
        enemies: [
            { column: 0, row: 5 },
            { column: 4, row: 4 },
        ],
        obstacles: [
            { column: 0, row: 1 },
            { column: 2, row: 1 },
            { column: 8, row: 3 },
        ],
        cells: [
            { column: 0, row: 1, right: true, down: true },
            { column: 0, row: 2, up: true, right: true },
            { column: 0, row: 3, right: true, left: true },
            { column: 0, row: 5, right: true, },
            { column: 0, row: 6, right: true, },
            { column: 1, row: 1, right: true, left: true, down: true },
            { column: 1, row: 2, up: true, down: true, left: true },
            { column: 1, row: 3, up: true, down: true, left: true },
            { column: 1, row: 4, up: true, right: true },
            { column: 1, row: 5, right: true, left: true },
            { column: 1, row: 6, right: true, left: true },
            { column: 1, row: 1, right: true, down: true },
            { column: 2, row: 1, right: true, left: true },
            { column: 2, row: 4, right: true, left: true },
            { column: 2, row: 5, right: true, left: true },
            { column: 2, row: 6, right: true, left: true },
            { column: 3, row: 1, right: true, left: true },
            { column: 3, row: 2, down: true },
            { column: 3, row: 3, up: true, right: true },
            { column: 3, row: 4, right: true, left: true },
            { column: 3, row: 5, right: true, left: true },
            { column: 3, row: 6, right: true, left: true },
            { column: 4, row: 1, right: true, left: true },
            { column: 4, row: 3, right: true, left: true },
            { column: 4, row: 4, right: true, left: true, down: true },
            { column: 4, row: 5, left: true, up: true },
            { column: 4, row: 6, right: true, left: true },
            { column: 5, row: 0, down: true },
            { column: 5, row: 1, down: true, up: true, left: true, right: true },
            { column: 5, row: 2, up: true, right: true },
            { column: 5, row: 3, down: true, left: true },
            { column: 5, row: 4, down: true, up: true, left: true },
            { column: 5, row: 5, down: true, up: true, right: true },
            { column: 5, row: 6, up: true, left: true, right: true },
            { column: 6, row: 1, left: true, right: true },
            { column: 6, row: 2, left: true, right: true },
            { column: 6, row: 5, left: true, right: true },
            { column: 6, row: 6, left: true, right: true },
            { column: 7, row: 1, left: true, right: true },
            { column: 7, row: 2, left: true, down: true },
            { column: 7, row: 3, up: true, down: true },
            { column: 7, row: 4, up: true, down: true },
            { column: 7, row: 5, up: true, left: true, right: true },
            { column: 7, row: 6, left: true, right: true },
            { column: 8, row: 1, down: true, left: true },
            { column: 8, row: 2, up: true, down: true },
            { column: 8, row: 3, up: true, down: true },
            { column: 8, row: 4, up: true, down: true },
            { column: 8, row: 5, up: true, down: true, left: true},
            { column: 8, row: 6, up: true, left: true},


        ]
    },
    {
        background: background4,
        start: { column: 8, row: 3 },
        // startDirection: Direction.Down,
        end: { column: 0, row: 1 },
        needKey: false,
        keys: [
        ],
        swords: [
            
        ],
        oxygens: [
            
        ],
        enemies: [
            
        ],
        obstacles: [

        ],
        cells: [
            { column: 0, row: 1, left: true, right: true, down: true },
            { column: 0, row: 2, up: true, down: true },
            { column: 0, row: 3, up: true, down: true },
            { column: 0, row: 4, up: true, down: true },
            { column: 0, row: 5, up: true, right: true },
            { column: 1, row: 0, down: true, right: true },
            { column: 1, row: 1, down: true, up: true, right: true, left: true },
            { column: 1, row: 2, down: true, up: true },
            { column: 1, row: 3, down: true, up: true },
            { column: 1, row: 4, up: true },
            { column: 1, row: 5, right: true, left: true },
            { column: 2, row: 0, left: true, right: true },
            { column: 2, row: 1, left: true, right: true },
            { column: 2, row: 5, left: true, down: true },
            { column: 2, row: 6, up: true, right: true },
            { column: 3, row: 0, left: true, right: true },
            { column: 3, row: 1, left: true, right: true },
            { column: 3, row: 3, down: true, right: true },
            { column: 3, row: 4, up: true, down: true },
            { column: 3, row: 5, up: true, right: true },
            { column: 3, row: 6, left: true },
            { column: 4, row: 0, left: true },
            { column: 4, row: 1, left: true, down: true },
            { column: 4, row: 2, up: true, down: true },
            { column: 4, row: 3, left: true, up: true },
            { column: 4, row: 5, left: true, right: true },
            { column: 5, row: 0, down: true, right: true },
            { column: 5, row: 1, down: true, up: true },
            { column: 5, row: 2, down: true, up: true },
            { column: 5, row: 3, up: true, },
            { column: 5, row: 5, left: true, down: true },
            { column: 5, row: 6, up: true, right: true },
            { column: 6, row: 0, left: true, right: true },
            { column: 6, row: 1, right: true, down: true },
            { column: 6, row: 2, up: true, down: true },
            { column: 6, row: 3, up: true, down: true },
            { column: 6, row: 4, up: true, down: true },
            { column: 6, row: 5, up: true, down: true },
            { column: 6, row: 6, up: true, left: true, right: true },
            { column: 7, row: 0, left: true, right: true },
            { column: 7, row: 1, left: true, right: true },
            { column: 7, row: 3, right: true, down: true },
            { column: 7, row: 4, up: true, right: true },
            { column: 7, row: 5, down: true, right: true },
            { column: 7, row: 6, up: true, left: true },
            { column: 8, row: 0, left: true, down: true },
            { column: 8, row: 1, up: true, left: true },
            { column: 8, row: 3, right: true, left: true },
            { column: 8, row: 4, down: true, left: true },
            { column: 8, row: 5, up: true, left: true },
            
            
        ]
    }
];