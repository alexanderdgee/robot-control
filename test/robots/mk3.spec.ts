import 'jasmine';
import Coordinate = require('../../src/coordinate');
import Mk3 = require('../../src/robots/mk3');

describe('Basic navigation', function() {
    it('stays still with a multiple of 0', function() {
        let robot: Mk3 = new Mk3();
        let start: Coordinate = { x: 1, y: 1 };
        let commandSequence: string = '0F';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        // should this be an error, or is silence acceptable here?
        // more likely to be a command error?
        expect(endPosition.x).toEqual(1);
        expect(endPosition.y).toEqual(1);
        expect(robot.facing.x).toEqual(0);
        expect(robot.facing.y).toEqual(1);
    });

    it('moves once with a multiple of 1', function() {
        let robot: Mk3 = new Mk3();
        let start: Coordinate = { x: 1, y: 1 };
        let commandSequence: string = '1F';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(1);
        expect(endPosition.y).toEqual(2);
        expect(robot.facing.x).toEqual(0);
        expect(robot.facing.y).toEqual(1);
    });

    it('moves twice with a multiple of 2', function() {
        let robot: Mk3 = new Mk3();
        let start: Coordinate = { x: 1, y: 1 };
        let commandSequence: string = '2F';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(1);
        expect(endPosition.y).toEqual(3);
        expect(robot.facing.x).toEqual(0);
        expect(robot.facing.y).toEqual(1);
    });

    it('moves three times with a multiple of 3', function() {
        let robot: Mk3 = new Mk3();
        let start: Coordinate = { x: 1, y: 1 };
        let commandSequence: string = '3F';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(1);
        expect(endPosition.y).toEqual(4);
        expect(robot.facing.x).toEqual(0);
        expect(robot.facing.y).toEqual(1);
    });

    it('moves four times with a multiple of 4', function() {
        let robot: Mk3 = new Mk3();
        let start: Coordinate = { x: 1, y: 1 };
        let commandSequence: string = '4F';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(1);
        expect(endPosition.y).toEqual(5);
        expect(robot.facing.x).toEqual(0);
        expect(robot.facing.y).toEqual(1);
    });

    it('moves five times with a multiple of 5', function() {
        let robot: Mk3 = new Mk3();
        let start: Coordinate = { x: 1, y: 1 };
        let commandSequence: string = '5F';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(1);
        expect(endPosition.y).toEqual(6);
        expect(robot.facing.x).toEqual(0);
        expect(robot.facing.y).toEqual(1);
    });

    it('throws on multiple of 6', function() {
        let robot: Mk3 = new Mk3();
        let start: Coordinate = { x: 1, y: 1 };
        let commandSequence: string = '6F';
        expect(function() {
            robot.navigate(start.x, start.y, commandSequence);
        }).toThrow();
    });

    it('throws on multiple with multiple digits', function() {
        let robot: Mk3 = new Mk3();
        let start: Coordinate = { x: 1, y: 1 };
        let commandSequence: string = '11F';
        expect(function() {
            robot.navigate(start.x, start.y, commandSequence);
        }).toThrow();
    });

    it('stops once it is out of fuel', function() {
        let robot: Mk3 = new Mk3();
        let start: Coordinate = { x: 1, y: 1 };
        let commandSequence: string = '5F5F5F5F5F5F5F5F';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(1);
        expect(endPosition.y).toEqual(31);
        expect(robot.facing.x).toEqual(0);
        expect(robot.facing.y).toEqual(1);
    });
});

describe('Edge cases', function() {
    it('can go south below 0', function() {
        let robot: Mk3 = new Mk3();
        let start: Coordinate = { x: 1, y: 1 };
        let commandSequence: string = 'LLFF';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(1);
        expect(endPosition.y).toEqual(-1);
    });

    it('can go backwards below 0', function() {
        let robot: Mk3 = new Mk3();
        let start: Coordinate = { x: 1, y: 1 };
        let commandSequence: string = 'BB';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(1);
        expect(endPosition.y).toEqual(-1);
    });

    it('can go west below 0', function() {
        let robot: Mk3 = new Mk3();
        let start: Coordinate = { x: 1, y: 1 };
        let commandSequence: string = 'LFF';
        let endPosition: Coordinate = robot.navigate(start.x, start.y, commandSequence);
        expect(endPosition.x).toEqual(-1);
        expect(endPosition.y).toEqual(1);
    });
});
