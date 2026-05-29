import { SystemUserProxy } from "./system-user/system-user-proxy.ts";

async function clientCode(): Promise<void> {
	const user = new SystemUserProxy("Luiz", "lzgustavo");

	console.log("2 seconds");
	console.log(await user.getAddresses());
	console.log("Caching");

	for (let i = 0; i < 5; i++) {
		console.log(await user.getAddresses());
	}
}

clientCode();
