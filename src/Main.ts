import {Runner} from "./Runner";
import {Delegate} from "./Delegate";
import {Register} from "./Register";
import {toHex} from "./Utils";

class DelegateImpl implements Delegate {
    getRegister(register: Register): number {
        const value = 0;
        console.log("Checking value of " + Register[register] + " (" + toHex(value, 4) + ")");
        return value;
    }

    readMemory(address: number): number {
        const value = 0;
        console.log("Checking value of " + toHex(address, 4) + " (" + toHex(value, 2) + ")");
        return value;
    }

    run(tStateCount: number): Event[] {
        console.log("Running for " + tStateCount + " t-states");
        return [];
    }

    setRegister(register: Register, value: number): void {
        console.log("Setting register " + Register[register] + " to " + toHex(value, 4));
    }

    startNewTest(name: string): void {
        console.log("Running test \"" + name + "\"");
    }

    writeMemory(address: number, value: number): void {
        console.log("Writing " + toHex(value, 2) + " to " + toHex(address, 4));
    }

    getTStateCount(): number {
        return 0;
    }
}

const delegate = new DelegateImpl();
const runner = new Runner("tests", delegate);
runner.loadTests();
runner.runAll();
for (const error of runner.errors) {
    console.log(error);
}
console.log("Passed " + runner.successfulTests + " of " + runner.tests.size + " with " + runner.errors.length + " errors");