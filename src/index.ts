import Coordinate = require('./coordinate');
import robot = require('./robots/robot');
import Mk1 = require('./robots/mk1');
import Mk2 = require('./robots/mk2');

let robots: robot[] = [new Mk1(), new Mk2()];

function runTest(start: Coordinate, commandSequence: string): void {
    for (let robot of robots) {
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        console.log(`Robot: ${robot.mark()}; start position: (${start.x}, ${start.y});`
                + ` command sequence: ${commandSequence};`
                + ` end position: (${endPosition.x}, ${endPosition.y})`);
    }
}

runTest({ x: 0, y: 0 },'FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF');
runTest({ x: 3, y: 6 },'FFFFFFFFRRRRRRRFFFFLLLBBRRRRRLLLLLLLLLRFFF');
runTest({ x: 0, y: 7 },'RRRRRRRRFFFFFFFFFFFLLLBBBBBRRRLLLLLFFLR');
