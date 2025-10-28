<script lang="ts">
    import '../app.css';
    import '../lib/styles/globals.css';
    import favicon from '$lib/assets/favicon.svg';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import { page } from '$app/stores';
    
    export let data;
    
    // derive isAuthPage from the page store via a reactive statement
    $: isAuthPage = $page.url.pathname.startsWith('/auth/');

    
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<div class="bg-background relative z-10 flex min-h-svh flex-col">
    <!-- Header - only show on non-auth pages -->
    {#if !isAuthPage}
        <Header userData={data.user_data} />
    {/if}
    
    <!-- Main Content -->
    <main class="flex flex-1 flex-col">
        <slot />
    </main>
    
    <!-- Footer - only show on non-auth pages -->
    {#if !isAuthPage}
        <Footer/>
    {/if}
</div>
