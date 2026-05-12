import type { User } from "../interfaces/user.ts";

const users: User[] = [];

export const MyDatabaseFunction = (function () {
	return {
		add(user: User) {
			users.push(user);
		},

		remove(index: number): void {
			users.splice(index, 1);
		},

		show(): void {
			for (const user of users) {
				console.log(user);
			}
		},
	};
	// Auto Invoke Function
})();
