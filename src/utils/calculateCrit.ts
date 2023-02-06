import type { Mod } from '../data/sample';
import { roundToHundreds } from './base';

export function calculateCrit(
	baseCrit: number,
	mods: Mod[],
	buffs: Mod[],
	isZephyr: boolean
): number {
	const baseCritAsPercentage = baseCrit / 100;
	const selectedMods = mods.filter((x) => x.state.selected);
	const selectedBuffs = buffs.filter((x) => x.state.selected);
	const relativeMods = selectedMods.filter((x) => x.mode === 'relative');
	const absoluteMods = selectedMods.filter((x) => x.mode === 'absolute');
	const relativeBaseValue = 1;

	let relativeMultiplier = 0;
	let absoluteMultiplier = 0;

	// Relative Bonus calculated
	relativeMods.map((rm) => {
		if (rm.state.condition.length > 0) {
			rm.state.condition.map((cond) => {
				// Calculate when there is conditions
				if (cond.description) {
					if (cond.state) {
						relativeMultiplier = relativeMultiplier + cond.multiplier;
					}
				}
			});
		} else {
			relativeMultiplier = relativeMultiplier + rm.multiplier;
		}
	});

	// Absolute Bonus calculated
	absoluteMods.map((rm) => {
		absoluteMultiplier = absoluteMultiplier + rm.multiplier;
	});

	if (selectedBuffs.length > 0) {
		selectedBuffs.map((b) => {
			relativeMultiplier = relativeMultiplier + b.multiplier;
		});
	}

	if (isZephyr) {
		relativeMultiplier = relativeMultiplier + 1.5;
	}

	// All Calculated
	const equation =
		baseCritAsPercentage * (relativeBaseValue + relativeMultiplier) +
		absoluteMultiplier;

	return roundToHundreds(equation) * 100;
}
