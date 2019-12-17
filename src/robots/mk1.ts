import BaseRobot = require('./base-robot');

class Mk1 extends BaseRobot {
    mark(): string {
        return 'mk1';
    }

    goForward(): void {
        this.y += 1;
    }

    goBackward(): void {
        if (this.y > 0) {
            this.y -= 1;
        }
    }

    goLeft(): void {
        if (this.x > 0) {
            this.x -= 1;
        }
    }

    goRight(): void {
        this.x += 1;
    }
}
export = Mk1;
