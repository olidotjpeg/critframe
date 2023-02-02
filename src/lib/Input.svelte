<script lang="ts">
    import {mods, weaponTypes} from '../data/sample';

    export let filteredMods = mods;
    export let selectedWeapon = "rifle";
    export let isZephyr = false;
    export let calculatedCrit = 0;
    export let baseCrit = 30;

    function SelectMod(mod): void {
        const currentIndex = mods.findIndex(x => x.name == mod.name);
        mods[currentIndex].state.selected = !mod.state.selected;

        calculateCrit();
    }

    function SelectWeaponType(weaponType): void {
        selectedWeapon = weaponType;
        filteredMods = mods.filter((x) => x.state.selected || x.type === selectedWeapon);
    }

    function roundToHundreds(equation: number): number {
        return Math.round((equation + Number.EPSILON) * 100) / 100;
    }

    function calculateCrit(): void {
        calculatedCrit = 0;
        
        const baseCritAsPercentage = baseCrit / 100;
        const selectedMods = mods.filter(x => x.state.selected === true);
        const relativeMods = selectedMods.filter(x => x.mode === 'relative');
        const absoluteMods = selectedMods.filter(x => x.mode === 'absolute');
        const relativeBaseValue = 1;

        let relativeMultiplier = 0;
        let absoluteMultiplier = 0

        // Relative Bonus calculated
        relativeMods.map((rm) => {
            rm.state.condition.map((cond) => {
                // Calculate when there is conditions
                if (cond.description) {
                    if (cond.state) {
                        relativeMultiplier = relativeMultiplier + rm.multiplier;
                    }
                } else {
                    relativeMultiplier = relativeMultiplier + rm.multiplier;
                }
            })
            
        });

        // Absolute Bonus calculated
        absoluteMods.map((rm) => {
            absoluteMultiplier = absoluteMultiplier + rm.multiplier;
        });

        if (isZephyr) {
            relativeMultiplier = relativeMultiplier + 1.5;
        }

        // All Calculated
        const equation = (baseCritAsPercentage * (relativeBaseValue + relativeMultiplier) + absoluteMultiplier);
        calculatedCrit = roundToHundreds(equation) * 100;
    }

    function handleZephyr(): void {
        isZephyr = !isZephyr;
        calculateCrit();
    }
    
    function handleCondition(mod): void {
        mod.state = !mod.state;

        calculateCrit();
    }
</script>

<h4>Select Weapon Type</h4>
{#each weaponTypes as weapon}
    <button on:click={() => SelectWeaponType(weapon)} class:active={weapon === selectedWeapon}>{weapon}</button>
{/each}

<h4>Pick your mods</h4>
{#key filteredMods}
    {#each filteredMods as mod}
        <button on:click={() => SelectMod(mod)} class:active={mod.state.selected}>{mod.name}</button>
        {#each mod.state.condition as condition}
        <br />
        {#if condition.description && mod.state.selected}
            <label>
                {condition.description}
                <input type="checkbox" bind:checked={condition.state} on:click={() => handleCondition(condition)}>
            </label>
        {/if}
        {/each}
        <br />
    {/each}
{/key}

<label>
	<input type="checkbox" bind:checked={isZephyr} on:click={handleZephyr}>
	Include Zephyr Crit Bonus
</label>

<br />

<label>
	<input type="text" bind:value={baseCrit}>
	What is your Base line Crit?
</label>

<h4>Calculated Crit %</h4>
<p>{calculatedCrit}%</p>
<style>
    .active {
        background: green;
    }
</style>