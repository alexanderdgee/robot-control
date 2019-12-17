import Coordinate = require('./coordinate');
import Robot = require('./robots/robot');
import Mk1 = require('./robots/mk1');
import Mk2 = require('./robots/mk2');
import Mk3 = require('./robots/mk3');

// TODO: type this correctly: Array<() => robot> giving errors
let robots: any[] = [Mk1, Mk2, Mk3];

function runTest(start: Coordinate, commandSequence: string): void {
    for (let robotConstructor of robots) {
        let robot: Robot = new robotConstructor();
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        console.log(`Robot: ${robot.mark()}; start position: (${start.x}, ${start.y});`
                + ` command sequence: ${commandSequence};`
                + ` end position: (${endPosition.x}, ${endPosition.y})`);
    }
}

runTest({ x: 0, y: 0 },'FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF');
runTest({ x: 3, y: 6 },'FFFFFFFFRRRRRRRFFFFLLLBBRRRRRLLLLLLLLLRFFF');
runTest({ x: 0, y: 7 },'RRRRRRRRFFFFFFFFFFFLLLBBBBBRRRLLLLLFFLR');

runTest({ x: 3, y: 3 }, 'FFF5FLFFRF2F');
runTest({ x: 0, y: 0 }, 'FFFFFF3FLFFFFFFR5FL');
runTest({ x: 4, y: 3 }, 'FFFFFFFF5FRFFFFFF3FRFFFFFFLFFFFF5FFF5FFFFFFFLFFFFF');
