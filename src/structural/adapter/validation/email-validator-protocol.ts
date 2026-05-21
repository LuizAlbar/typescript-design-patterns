/** biome-ignore-all lint/style/useShorthandFunctionType: <explanation> */
export interface EmailValidatorProtocol {
	isEmail: EmailValidatorFnProtocol;
}

export interface EmailValidatorFnProtocol {
	(value: string): boolean;
}
