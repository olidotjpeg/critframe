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
		border-bottom: 1px solid #fff;
	}

	.title {
		margin: 0;
	}

	.weaponList {
		display: flex;
		margin-bottom: 0;
	}

	.button {
		border-right: 1px solid #fff;
	}

	.button:first-child {
		border-top-left-radius: 8px;
	}

	.button:last-child {
		border-right: none;
		border-top-right-radius: 8px;
	}

	.active {
		background: green;
	}
</style>
