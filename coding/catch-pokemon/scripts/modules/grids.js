export function getGrid(level){
    let grid;
    switch(level){
        case 0:
            grid = [
                [1, 1, 0, 0, 1, 1],
                [1, 0, 0, 0, 0, 1],
                [0, 0, 2, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [1, 0, 3, 0, 0, 1],
                [1, 1, 0, 0, 1, 1]
            ];
            break;
        case 1:
            grid = [
                [1, 1, 1, 1, 1, 1],
                [1, 0, 0, 0, 0, 1],
                [1, 1, 0, 2, 1, 1],
                [1, 1, 3, 0, 1, 1],
                [1, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1]
            ];
            break;
        case 2:
            grid = [
                [0, 0, 1, 1, 1, 1],
                [0, 0, 1, 1, 1, 1],
                [0, 0, 1, 5, 1, 1],
                [0, 0, 1, 0, 1, 1],
                [0, 0, 1, 0, 2, 1],
                [0, 0, 1, 1, 1, 1]
            ];
                break;
            
    }
    return grid;
}