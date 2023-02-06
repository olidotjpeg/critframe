export function roundToHundreds(equation: number): number {
	return Math.round((equation + Number.EPSILON) * 100) / 100;
}
