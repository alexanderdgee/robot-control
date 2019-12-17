import Coordinate = require('../coordinate');

interface robot {
    mark(): string;
    navigate(x: number, y: number, commandSequence: string): Coordinate;
}
export = robot;
