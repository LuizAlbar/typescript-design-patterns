import type { DeviceImplementation } from "../device/device-implementation.ts";

export class RemoteControl {
	protected device: DeviceImplementation;

	constructor(device: DeviceImplementation) {
		this.device = device;
	}

	togglePower(): void {
		this.device.setPower(!this.device.getPower());
		console.log(
			`${this.device.getName()} power status: ${this.device.getPower()}`,
		);
	}
}
