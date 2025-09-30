<script lang="ts">
	import '../app.css';
    import '../lib/styles/globals.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="bg-black relative z-10 flex min-h-svh flex-col">
	<!-- Header -->
	<Header />
	
	<!-- Main Content -->
	<main class="flex flex-1 flex-col">
		{@render children?.()}
	</main>
	
	<!-- Footer -->
	<Footer />
</div>
