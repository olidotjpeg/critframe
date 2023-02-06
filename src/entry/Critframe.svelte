<script lang="ts">
	import { onMount } from 'svelte';
	import { calculateCrit } from '../utils/calculateCrit';

	import BaseCritInput from '../components/BaseCritInput.svelte';
	import ModsSelector from '../components/ModsSelector.svelte';
	import WeaponsFilter from '../components/WeaponsFilter.svelte';
	import ZephyrCheckbox from '../components/ZephyrCheckbox.svelte';

	import {
		mods,
		weaponTypes,
		buffs,
		type Mod,
		type ConditionState,
	} from '../data/sample';

	export let selectedWeapon = 'rifle';
	export let isZephyr = false;
	export let calculatedCrit = 0;
	export let baseCrit = 30;
	export let filteredMods: Mod[] = mods.filter(
		(x) => x.type === selectedWeapon
	);

	onMount(() => {
		calculatedCrit = calculateCrit(baseCrit, filteredMods, buffs, isZephyr);
	});

	function resetModsList() {
		mods.map((x) => {
			x.state.selected = false;
		});
		filteredMods = mods.filter((x) => x.type === selectedWeapon);
		calculatedCrit = calculateCrit(baseCrit, filteredMods, buffs, isZephyr);
	}

	function selectMod(mod: Mod): void {
		const currentIndex = filteredMods.findIndex(
			(x: Mod) => x.name === mod.name
		);
		checkGroupId(mod);
		filteredMods[currentIndex].state.selected = !mod.state.selected;

		calculatedCrit = calculateCrit(baseCrit, filteredMods, buffs, isZephyr);
	}

	function selectBuff(mod: Mod): void {
		const currentIndex = buffs.findIndex((x: Mod) => x.name === mod.name);
		buffs[currentIndex].state.selected = !mod.state.selected;

		calculatedCrit = calculateCrit(baseCrit, filteredMods, buffs, isZephyr);
	}

	function selectWeaponType(weaponType: string): void {
		selectedWeapon = weaponType;
		resetModsList();
	}

	function checkGroupId(mod: Mod): void {
		if (!mod.groupId) {
			return;
		}

		if (mod.state.selected) {
			return;
		}

		if (mod.groupId) {
			const ids = new Set([mod.groupId]);

			filteredMods.forEach((el) => {
				if (ids.has(el.groupId)) {
					if (el.state.selected) {
						el.state.selected = !el.state.selected;
					}
				}
			});
		}
	}

	function handleZephyr(): void {
		isZephyr = !isZephyr;
		calculatedCrit = calculateCrit(baseCrit, filteredMods, buffs, isZephyr);
	}

	function handleCondition(condition: ConditionState): void {
		condition.state = !condition.state;

		calculatedCrit = calculateCrit(baseCrit, filteredMods, buffs, isZephyr);
	}

	function handleOnBlur(newBaseCrit: number) {
		calculatedCrit = calculateCrit(newBaseCrit, filteredMods, buffs, isZephyr);
	}
</script>

<WeaponsFilter {weaponTypes} {selectedWeapon} {selectWeaponType} />

<ModsSelector
	{filteredMods}
	{buffs}
	{selectMod}
	{selectBuff}
	{handleCondition}
/>

<ZephyrCheckbox {isZephyr} {handleZephyr} />

<BaseCritInput {baseCrit} {handleOnBlur} />

<h4>Calculated Crit %</h4>
<p>{calculatedCrit}%</p>
