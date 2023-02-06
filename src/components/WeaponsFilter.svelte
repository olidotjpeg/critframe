<script lang="ts">
	import type { WeaponType } from '../data/sample';

	export let weaponTypes: WeaponType[] = [];
	export let selectWeaponType: (w: string) => void;
	export let selectedWeapon: string;
</script>

<div class="header">
	<h4 class="title">Select Weapon Type</h4>
	<ul class="weaponList">
		{#each weaponTypes as weapon}
			<button
				on:click={() => selectWeaponType(weapon)}
				class="button"
				class:active={weapon === selectedWeapon}>{weapon}</button
			>
		{/each}
	</ul>
</div>

<style>
	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.title {
		margin: 0;
	}

	.weaponList {
		display: flex;
	}

	.button {
		margin: 0 4px;
	}

	.button:first-child {
		margin: 0;
		margin-right: 4px;
	}

	.button:last-child {
		margin: 0;
		margin-left: 4px;
	}

	.active {
		background: green;
	}
</style>
