import Coordinate = require('./coordinate');

function navigate(initialX: number, initialY: number, commandSequence: string): Coordinate {
    let x: number = initialX;
    let y: number = initialY;
    for (let command of commandSequence) {
        switch (command) {
            case 'F':
                y += 1;
                break;
            case 'B':
                if (y > 0) {
                    y -= 1;
                }
                break;
            case 'L':
                if (x > 0) {
                    x -= 1;
                }
                break;
            case 'R':
                x += 1;
                break;
        }
    }
    return {
        x: x,
        y: y
    }
}
export = navigate;
