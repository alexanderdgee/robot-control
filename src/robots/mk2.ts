import BaseRobot = require('./base-robot');
import Coordinate = require('../coordinate');

class Mk2 extends BaseRobot {
    facing: Coordinate = { x: 0, y: 1 };

    mark(): string {
        return 'mk2';
    }

    navigate(x: number, y: number, commandSequence: string): Coordinate {
        this.facing.x = 0;
        this.facing.y = 1;
        return super.navigate(x, y, commandSequence);
    }

    goForward(): void {
        if (!(this.x == 0 && this.facing.x == -1)) {
            this.x += this.facing.x;
        }
        if (!(this.y == 0 && this.facing.y == -1)) {
            this.y += this.facing.y;
        }
    }

    goBackward(): void {
        this.turnAround();
        this.goForward();
        this.turnAround();
    }

    goLeft(): void {
        if (this.facing.x > 0) { // rotating from east to north
            this.facing.x = 0;
            this.facing.y = 1;
        } else if (this.facing.x < 0) { // rotating from west to south
            this.facing.x = 0;
            this.facing.y = -1;
        } else if (this.facing.y > 0) { // rotating from north to west
            this.facing.x = -1;
            this.facing.y = 0;
        } else if (this.facing.y < 0) { // rotating from south to east
            this.facing.x = 1;
            this.facing.y = 0;
        }
    }

    goRight(): void {
        if (this.facing.x > 0) { // rotating from east to south
            this.facing.x = 0;
            this.facing.y = -1;
        } else if (this.facing.x < 0) { // rotating from west to north
            this.facing.x = 0;
            this.facing.y = 1;
        } else if (this.facing.y > 0) { // rotating from north to east
            this.facing.x = 1;
            this.facing.y = 0;
        } else if (this.facing.y < 0) { // rotating from south to west
            this.facing.x = -1;
            this.facing.y = 0;
        }
    }

    turnAround(turnRight?: boolean): void {
        if (turnRight) {
            this.goRight();
            this.goRight();
        } else {
            this.goLeft();
            this.goLeft();
        }
    }
}
export = Mk2;
