import Mk2 = require('./mk2');

const numericRegex: RegExp = /^\d+/;
const HEAT_THRESHOLD: number = 5;

class Mk3 extends Mk2 {
    fuel: number = 30;
    multiple: number|undefined;

    mark(): string {
        return 'mk3';
    }

    handleCommand(command: string): void {
        if (numericRegex.test(command)) {
            let commandMultiple: number = parseInt(command);
            if (typeof this.multiple != 'undefined'
                    || commandMultiple > HEAT_THRESHOLD) {
                throw new Error('Multiple higher than capacity encountered: aborting.')
            }
            // TODO: this doesn't handle multiples before L / R / B commands correctly yet.
            this.multiple = commandMultiple;
        } else {
            super.handleCommand(command);
        }
    }

    goForward(): void {
        if (typeof this.multiple == 'undefined') {
            this.multiple = 1;
        }
        if (this.fuel < this.multiple) {
            this.multiple = this.fuel;
        }
        this.x += this.multiple * this.facing.x;
        this.y += this.multiple * this.facing.y;
        this.fuel -= this.multiple;
        this.multiple = undefined;
    }
}
export = Mk3;
