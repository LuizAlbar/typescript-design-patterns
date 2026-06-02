import type { SmartHouseCommand } from "./smart-house-command.ts";
import type { SmartHouseLight } from "./smart-house-light.ts";

export class LightIntensityCommand implements SmartHouseCommand {
	private readonly light: SmartHouseLight;
	constructor(light: SmartHouseLight) {
		this.light = light;
	}
	execute(): void {
		const intensity = this.light.increaseIntensity();
		console.log(`${this.light.name} intensity: ${intensity}`);
	}
	undo(): void {
		const intensity = this.light.decreaseIntensity();
		console.log(`${this.light.name} intensity: ${intensity}`);
	}
}
