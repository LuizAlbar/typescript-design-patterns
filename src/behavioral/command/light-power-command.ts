import type { SmartHouseCommand } from "./smart-house-command.ts";
import type { SmartHouseLight } from "./smart-house-light.ts";

export class LightPowerCommand implements SmartHouseCommand {
	private readonly light: SmartHouseLight;
	constructor(light: SmartHouseLight) {
		this.light = light;
	}
	execute(): void {
		this.light.on();
	}
	undo(): void {
		this.light.off();
	}
}
