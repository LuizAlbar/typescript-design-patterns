import { RemoteControl } from "./remote-control.ts";

export class RemoteControlWithVolume extends RemoteControl {
	volumeUp(): void {
		const oldVolume = this.device.getVolume();
		this.device.setVolume(oldVolume + 10);
		console.log(
			`${this.device.getName()} volume: ${oldVolume} -> ${this.device.getVolume()}`,
		);
	}

	volumeDown(): void {
		const oldVolume = this.device.getVolume();
		this.device.setVolume(oldVolume - 10);
		console.log(
			`${this.device.getName()} volume: ${oldVolume} -> ${this.device.getVolume()}`,
		);
	}
}
