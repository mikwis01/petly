export const nameRegex = (value: string) => {
	return /^([A-Z][a-z]{0,9}$)/g.test(value)
}

export const weightRegex = (value: string) => {
	return /^(([0-9]*[.])?[0-9]+$)/g.test(value)
}
