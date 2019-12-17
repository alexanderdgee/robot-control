import 'jasmine';
import Coordinate = require('../../src/coordinate');
import Mk2 = require('../../src/robots/mk2');

describe('Basic navigation', function() {
    it('stays where it started', function() {
        let robot = new Mk2();
        let start: Coordinate = { x: 4, y: 7 };
        let commandSequence: string = '';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(start.x);
        expect(endPosition.y).toEqual(start.y);
        expect(robot.facing.x).toEqual(0);
        expect(robot.facing.y).toEqual(1);
    });

    it('stays where it started when rotating left', function() {
        let robot = new Mk2();
        let start: Coordinate = { x: 4, y: 7 };
        let commandSequence: string = 'L';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(4);
        expect(endPosition.y).toEqual(7);
        expect(robot.facing.x).toEqual(-1);
        expect(robot.facing.y).toEqual(0);
    });

    it('stays where it started when rotating right', function() {
        let robot = new Mk2();
        let start: Coordinate = { x: 4, y: 7 };
        let commandSequence: string = 'R';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(4);
        expect(endPosition.y).toEqual(7);
        expect(robot.facing.x).toEqual(1);
        expect(robot.facing.y).toEqual(0);
    });

    it('initially moves north', function() {
        let robot = new Mk2();
        let start: Coordinate = { x: 1, y: 1 };
        let commandSequence: string = 'F';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(1);
        expect(endPosition.y).toEqual(2);
        expect(robot.facing.x).toEqual(0);
        expect(robot.facing.y).toEqual(1);
    });

    it('moves west after rotating left', function() {
        let robot = new Mk2();
        let start: Coordinate = { x: 1, y: 1 };
        let commandSequence: string = 'LF';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(0);
        expect(endPosition.y).toEqual(1);
        expect(robot.facing.x).toEqual(-1);
        expect(robot.facing.y).toEqual(0);
    });

    it('moves east after rotating right', function() {
        let robot = new Mk2();
        let start: Coordinate = { x: 1, y: 1 };
        let commandSequence: string = 'RF';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(2);
        expect(endPosition.y).toEqual(1);
        expect(robot.facing.x).toEqual(1);
        expect(robot.facing.y).toEqual(0);
    });

    it('moves south when going backward', function() {
        let robot = new Mk2();
        let start: Coordinate = { x: 1, y: 1 };
        let commandSequence: string = 'B';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(1);
        expect(endPosition.y).toEqual(0);
        // TODO: do we expect it to return to its original orientation?
        expect(robot.facing.x).toEqual(0);
        expect(robot.facing.y).toEqual(1);
    });
});

describe('Edge cases', function() {
    it('cannot go south below 0', function() {
        let robot = new Mk2();
        let start: Coordinate = { x: 1, y: 1 };
        let commandSequence: string = 'LLFF';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(1);
        expect(endPosition.y).toEqual(0);
    });

    it('cannot go backwards below 0', function() {
        let robot = new Mk2();
        let start: Coordinate = { x: 1, y: 1 };
        let commandSequence: string = 'BB';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(1);
        expect(endPosition.y).toEqual(0);
    });

    it('cannot go west below 0', function() {
        let robot = new Mk2();
        let start: Coordinate = { x: 1, y: 1 };
        let commandSequence: string = 'LFF';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(0);
        expect(endPosition.y).toEqual(1);
    });
});
