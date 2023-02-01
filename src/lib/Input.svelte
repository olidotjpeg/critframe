<script lang="ts">
    import {data} from '../data/sample';

    export let isZephyr = false;
    export let calculatedCrit = 0;
    export let baseCrit = 30;

    export function SelectMod(mod): void {
        const currentIndex = data.findIndex(x => x.name == mod.name);
        data[currentIndex].state = !mod.state;

        calculateCrit();
    }

    function roundToHundreds(equation: number): number {
        return Math.round((equation + Number.EPSILON) * 100) / 100;
    }

    function calculateCrit(): void {
        calculatedCrit = 0;
        
        const baseCritAsPercentage = baseCrit / 100;
        const selectedMods = data.filter(x => x.state === true);
        const relativeMods = selectedMods.filter(x => x.mode === 'relative');
        const absoluteMods = selectedMods.filter(x => x.mode === 'absolute');
        const relativeBaseValue = 1;
        console.log(isZephyr);
        let relativeMultiplier = 0;
        let absoluteMultiplier = 0

        // Relative Bonus calculated
        relativeMods.map((rm) => {
            relativeMultiplier = relativeMultiplier + rm.multiplier;
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

    function handleCheck() {
        isZephyr = !isZephyr;
        calculateCrit();
    }
    
</script>

<h4>Pick your mods</h4>
{#key data}
    {#each data as mod}
        <button on:click={() => SelectMod(mod)} class:active={mod.state}>{mod.name}</button>
    {/each}
{/key}

<label>
	<input type="checkbox" bind:checked={isZephyr} on:click={handleCheck}>
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