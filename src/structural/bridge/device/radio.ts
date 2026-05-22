import type { DeviceImplementation } from "./device-implementation.ts";

export class Radio implements DeviceImplementation {
    private volume: number = 10;
    private power: boolean = false;
    private name: string = "Radio";

    getName(): string {
        return this.name;
    }
    setPower(powerStatus: boolean): void {
        this.power = powerStatus;
    }
    getPower(): boolean {
        return this.power;
    }
    setVolume(volume: number): void {
        if (this.volume < 0 || this.volume > 100) return;
        this.volume = volume;
    }
    getVolume(): number {
        return this.volume;
    }
}
