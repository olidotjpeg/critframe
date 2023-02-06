<script lang="ts">
	export let isZephyr = false;
	export let handleZephyr: () => void;
</script>

<label>
	<input type="checkbox" bind:checked={isZephyr} on:click={handleZephyr} />
	Include Zephyr Crit Bonus
</label>
