import Coordinate = require('./coordinate');
import Mk1 = require('./robots/mk1');

function runTest(start: Coordinate, commandSequence: string): void {
    let robot = new Mk1();
    let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
    console.log(`Start position: (${start.x}, ${start.y}); command sequence: ${commandSequence};`
            + ` end position: (${endPosition.x}, ${endPosition.y})`);
}

runTest({ x: 0, y: 0 },'FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF');
runTest({ x: 3, y: 6 },'FFFFFFFFRRRRRRRFFFFLLLBBRRRRRLLLLLLLLLRFFF');
runTest({ x: 0, y: 7 },'RRRRRRRRFFFFFFFFFFFLLLBBBBBRRRLLLLLFFLR');
