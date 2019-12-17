import 'jasmine';
import Coordinate = require('../../src/coordinate');
import Mk2 = require('../../src/robots/mk2');

describe('Basic navigation', function() {
    it('stays where it started', function() {
        let robot: Mk2 = new Mk2();
        let start: Coordinate = { x: 4, y: 7 };
        let commandSequence: string = '';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(start.x);
        expect(endPosition.y).toEqual(start.y);
        expect(robot.facing.x).toEqual(0);
        expect(robot.facing.y).toEqual(1);
    });

    it('stays where it started when rotating left', function() {
        let robot: Mk2 = new Mk2();
        let start: Coordinate = { x: 4, y: 7 };
        let commandSequence: string = 'L';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(4);
        expect(endPosition.y).toEqual(7);
        expect(robot.facing.x).toEqual(-1);
        expect(robot.facing.y).toEqual(0);
    });

    it('stays where it started when rotating right', function() {
        let robot: Mk2 = new Mk2();
        let start: Coordinate = { x: 4, y: 7 };
        let commandSequence: string = 'R';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(4);
        expect(endPosition.y).toEqual(7);
        expect(robot.facing.x).toEqual(1);
        expect(robot.facing.y).toEqual(0);
    });

    it('reorients for each new navigation', function() {
        let robot: Mk2 = new Mk2();
        let start: Coordinate = { x: 1, y: 1 };
        let commandSequence: string = 'R';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        commandSequence = 'F';
        endPosition = robot.navigate(endPosition.x, endPosition.y, commandSequence);
        expect(endPosition.x).toEqual(1);
        expect(endPosition.y).toEqual(2);
        expect(robot.facing.x).toEqual(0);
        expect(robot.facing.y).toEqual(1);
    });

    it('initially moves north', function() {
        let robot: Mk2 = new Mk2();
        let start: Coordinate = { x: 1, y: 1 };
        let commandSequence: string = 'F';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(1);
        expect(endPosition.y).toEqual(2);
        expect(robot.facing.x).toEqual(0);
        expect(robot.facing.y).toEqual(1);
    });

    it('moves west after rotating left', function() {
        let robot: Mk2 = new Mk2();
        let start: Coordinate = { x: 1, y: 1 };
        let commandSequence: string = 'LF';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(0);
        expect(endPosition.y).toEqual(1);
        expect(robot.facing.x).toEqual(-1);
        expect(robot.facing.y).toEqual(0);
    });

    it('moves south after rotating left twice', function() {
        let robot: Mk2 = new Mk2();
        let start: Coordinate = { x: 1, y: 1 };
        let commandSequence: string = 'LLF';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(1);
        expect(endPosition.y).toEqual(0);
        expect(robot.facing.x).toEqual(0);
        expect(robot.facing.y).toEqual(-1);
    });

    it('moves east after rotating left three times', function() {
        let robot: Mk2 = new Mk2();
        let start: Coordinate = { x: 1, y: 1 };
        let commandSequence: string = 'LLLF';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(2);
        expect(endPosition.y).toEqual(1);
        expect(robot.facing.x).toEqual(1);
        expect(robot.facing.y).toEqual(0);
    });

    it('moves north after rotating left four times', function() {
        let robot: Mk2 = new Mk2();
        let start: Coordinate = { x: 1, y: 1 };
        let commandSequence: string = 'LLLLF';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(1);
        expect(endPosition.y).toEqual(2);
        expect(robot.facing.x).toEqual(0);
        expect(robot.facing.y).toEqual(1);
    });

    it('moves east after rotating right', function() {
        let robot: Mk2 = new Mk2();
        let start: Coordinate = { x: 1, y: 1 };
        let commandSequence: string = 'RF';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(2);
        expect(endPosition.y).toEqual(1);
        expect(robot.facing.x).toEqual(1);
        expect(robot.facing.y).toEqual(0);
    });

    it('moves south after rotating right twice', function() {
        let robot: Mk2 = new Mk2();
        let start: Coordinate = { x: 1, y: 1 };
        let commandSequence: string = 'RRF';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(1);
        expect(endPosition.y).toEqual(0);
        expect(robot.facing.x).toEqual(0);
        expect(robot.facing.y).toEqual(-1);
    });

    it('moves west after rotating right three times', function() {
        let robot: Mk2 = new Mk2();
        let start: Coordinate = { x: 1, y: 1 };
        let commandSequence: string = 'RRRF';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(0);
        expect(endPosition.y).toEqual(1);
        expect(robot.facing.x).toEqual(-1);
        expect(robot.facing.y).toEqual(0);
    });

    it('moves north after rotating right four times', function() {
        let robot: Mk2 = new Mk2();
        let start: Coordinate = { x: 1, y: 1 };
        let commandSequence: string = 'RRRRF';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(1);
        expect(endPosition.y).toEqual(2);
        expect(robot.facing.x).toEqual(0);
        expect(robot.facing.y).toEqual(1);
    });

    it('moves south when going backward', function() {
        let robot: Mk2 = new Mk2();
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
        let robot: Mk2 = new Mk2();
        let start: Coordinate = { x: 1, y: 1 };
        let commandSequence: string = 'LLFF';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(1);
        expect(endPosition.y).toEqual(0);
    });

    it('cannot go backwards below 0', function() {
        let robot: Mk2 = new Mk2();
        let start: Coordinate = { x: 1, y: 1 };
        let commandSequence: string = 'BB';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(1);
        expect(endPosition.y).toEqual(0);
    });

    it('cannot go west below 0', function() {
        let robot: Mk2 = new Mk2();
        let start: Coordinate = { x: 1, y: 1 };
        let commandSequence: string = 'LFF';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(0);
        expect(endPosition.y).toEqual(1);
    });
});
