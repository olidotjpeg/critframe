<script lang="ts">
	import type { ConditionState, Mod } from '../data/sample';

	export let filteredMods: Mod[];
	export let buffs: Mod[];
	export let selectMod: (m: Mod) => void;
	export let handleCondition: (c: ConditionState) => void;
	export let selectBuff: (b: Mod) => void;
</script>

<h4>Pick your mods</h4>
{#key filteredMods}
	{#each filteredMods as mod}
		<button on:click={() => selectMod(mod)} class:active={mod.state.selected}
			>{mod.name}</button
		>
		{#each mod.state.condition as condition}
			{#if condition.description && mod.state.selected}
				<label>
					{condition.description}
					<input
						type="checkbox"
						bind:checked={condition.state}
						on:click={() => handleCondition(condition)}
					/>
				</label>
			{/if}
		{/each}
	{/each}

	<hr />

	{#each buffs as buff}
		<button on:click={() => selectBuff(buff)} class:active={buff.state.selected}
			>{buff.name}</button
		>
	{/each}
{/key}

<style>
	.active {
		background: green;
	}
</style>
