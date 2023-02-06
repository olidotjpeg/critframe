<script lang="ts">
	import type { ConditionState, Mod } from '../data/sample';

	export let filteredMods: Mod[];
	export let buffs: Mod[];
	export let selectMod: (m: Mod) => void;
	export let handleCondition: (c: ConditionState) => void;
	export let selectBuff: (b: Mod) => void;
</script>

<div class="mods">
	<h4 class="title">Pick your mods</h4>
	{#key filteredMods}
		<ul class="modsList">
			{#each filteredMods as mod}
				<div class="card">
					<span class="modName">{mod.name}</span>
					<button
						on:click={() => selectMod(mod)}
						class="cardButton"
						class:active={mod.state.selected}>Equip</button
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
				</div>
			{/each}
		</ul>

		<hr />

		{#each buffs as buff}
			<button
				on:click={() => selectBuff(buff)}
				class:active={buff.state.selected}>{buff.name}</button
			>
		{/each}
	{/key}
</div>

<style>
	.mods {
		max-width: 1280px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.title {
		align-self: flex-start;
	}

	.modsList {
		display: flex;
	}

	.card {
		padding: 12px;
		border-radius: 8px;
		background: #fafafa;
		border: 1px solid #000;
	}

	.modName {
		color: #000;
	}

	.active {
		background: green;
	}
</style>
