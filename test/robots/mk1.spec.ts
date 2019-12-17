import 'jasmine';
import Coordinate = require('../../src/coordinate');
import Mk1 = require('../../src/robots/mk1');

describe('Basic navigation', function() {
    it('stays where it started', function() {
        let robot: Mk1 = new Mk1();
        let start: Coordinate = { x: 4, y: 7 };
        let commandSequence: string = '';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(start.x);
        expect(endPosition.y).toEqual(start.y);
    });

    it('goes left', function() {
        let robot: Mk1 = new Mk1();
        let start: Coordinate = { x: 1, y: 1 };
        let commandSequence: string = 'L';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(0);
        expect(endPosition.y).toEqual(1);
    });

    it('goes right', function() {
        let robot: Mk1 = new Mk1();
        let start: Coordinate = { x: 1, y: 1 };
        let commandSequence: string = 'R';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(2);
        expect(endPosition.y).toEqual(1);
    });

    it('goes forward', function() {
        let robot: Mk1 = new Mk1();
        let start: Coordinate = { x: 1, y: 1 };
        let commandSequence: string = 'F';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(1);
        expect(endPosition.y).toEqual(2);
    });

    it('goes backward', function() {
        let robot: Mk1 = new Mk1();
        let start: Coordinate = { x: 1, y: 1 };
        let commandSequence: string = 'B';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(1);
        expect(endPosition.y).toEqual(0);
    });
});

describe('Edge cases', function() {
    // Does the robot hit a wall and fail to move
    // or does it walk off the surface and throw an error?
    // TODO: resolve edge cases
    it('cannot go backward below 0', function() {
        let robot: Mk1 = new Mk1();
        let start: Coordinate = { x: 0, y: 1 };
        let commandSequence: string = 'BB';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(0);
        expect(endPosition.y).toEqual(0);
    });

    it('cannot go left below 0', function() {
        let robot: Mk1 = new Mk1();
        let start: Coordinate = { x: 1, y: 0 };
        let commandSequence: string = 'LL';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(0);
        expect(endPosition.y).toEqual(0);
    });
});
