<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	console.log(data.sections); // [{ slug: 'profile', title: 'Profile' }, ...]
</script>

<h2>this is profile</h2>
