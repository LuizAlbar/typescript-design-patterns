import { Radio } from "./device/radio.ts";
import { Tv } from "./device/tv.ts";
import { RemoteControl } from "./remote-control/remote-control.ts";
import { RemoteControlWithVolume } from "./remote-control/remote-control-with-volume.ts";

function clientCode(
	abstraction: RemoteControl | RemoteControlWithVolume,
): void {
	abstraction.togglePower();

	// Type Guard
	if (!("volumeUp" in abstraction)) return;

	abstraction.volumeUp(); // 20
	abstraction.volumeUp(); // 30
	abstraction.volumeDown(); // 20
}

const tv = new Tv();
const radio = new Radio();
const radioRemoteControl = new RemoteControl(radio);

clientCode(radioRemoteControl);

const tvRemoteControl = new RemoteControlWithVolume(tv);
clientCode(tvRemoteControl);
