import Coordinate = require('../coordinate');
import robot = require('./robot');

class BaseRobot implements robot {
    x: number;
    y: number;

    mark(): string {
        throw new Error("Not an actual robot.");
    }

    navigate(x: number, y: number, commandSequence: string): Coordinate {
        this.x = x;
        this.y = y;
        for (let command of commandSequence) {
            this.handleCommand(command);
        }
        return {
            x: this.x,
            y: this.y
        }
    }

    handleCommand(command: string): void {
        switch (command) {
            case 'F':
                this.goForward();
                break;
            case 'B':
                this.goBackward();
                break;
            case 'L':
                this.goLeft();
                break;
            case 'R':
                this.goRight();
                break;
        }
    }

    goForward(): void {
        throw new Error("Method not implemented.");
    }

    goBackward(): void {
        throw new Error("Method not implemented.");
    }

    goLeft(): void {
        throw new Error("Method not implemented.");
    }

    goRight(): void {
        throw new Error("Method not implemented.");
    }
}
export = BaseRobot;
