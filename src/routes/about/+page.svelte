<script lang="ts">
	import { onMount } from 'svelte';
	let number = 0;

	async function rng() {
		const response = await fetch('/api/rng', {
			method: 'GET',
			headers: {
				'content-type': 'application/json'
			}
		});

		number = await response.json();
	}
	onMount(async () => {
		rng();
	});
</script>

<h1>About {Math.round(number * 100)}</h1>
