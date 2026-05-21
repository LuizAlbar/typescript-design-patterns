import { EmailValidatorClassAdapter } from "./validation/email-validator-class-adapter.ts";
import { emailValidatorFnAdapter } from "./validation/email-validator-function-adapter.ts";
import type {
	EmailValidatorFnProtocol,
	EmailValidatorProtocol,
} from "./validation/email-validator-protocol.ts";

function validateEmailClass(
	emailValidator: EmailValidatorProtocol,
	email: string,
): void {
	if (emailValidator.isEmail(email)) {
		console.log("Email is valid (CLASS)");
	} else {
		console.log("Email is invalid (CLASS)");
	}
}

function validateEmailFunction(
	emailValidator: EmailValidatorFnProtocol,
	email: string,
): void {
	if (emailValidator(email)) {
		console.log("Email is valid (FUNCTION)");
	} else {
		console.log("Email is invalid (FUNCTION)");
	}
}

validateEmailClass(new EmailValidatorClassAdapter(), "teste@email.com");
validateEmailFunction(emailValidatorFnAdapter, "teste@email.com");
