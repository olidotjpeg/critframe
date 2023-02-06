<script lang="ts">
	export let baseCrit: number;
	export let handleOnBlur: (bc: number) => void;
</script>

<label>
	<input
		type="text"
		bind:value={baseCrit}
		on:blur={() => handleOnBlur(baseCrit)}
	/>
	What is your Base line Crit?
</label>
