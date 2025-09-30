<script>
	import { page } from '$app/stores';
    import logoDark from '$lib/assets/logo-white.png';
    import logoWhite from '$lib/assets/logo-dark.png';
	
	// Navigation items
	const navItems = [
		{ href: '/Courses', label: 'Courses' },
		{ href: '/learning-path', label: 'Learning Paths' },
		{ href: '/all-access', label: 'Lifetime Access' },
		{ href: '/forum', label: 'Forum' },
        { href: '/contact', label: 'Contact' }
	];
	
	let mobileMenuOpen = $state(false);
	
	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
	
	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<header class="sticky top-0 z-50 w-full bg-black/80 font-heading text-foreground backdrop-blur-md">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16">
			<!-- Logo -->
			<div class="flex items-center">
				<a href="/" class="flex items-center space-x-2">
					<img 
						src={logoDark} 
						alt="SvelteKit Logo" 
						class="h-8 w-auto dark:hidden"
					>
					<img 
						src={logoDark}
						alt="SvelteKit Logo" 
						class="h-8 w-auto hidden dark:block"
					>
				</a>
			</div>

			<!-- Desktop Navigation -->
			<nav class="hidden md:flex items-center justify-between gap-2">
				{#each navItems as item}
					<a 
						href={item.href}
						class="relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-4xl font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer text-gray-500 hover:text-gray-300 dark:hover:text-white focus:text-white tracking-normal transition-colors duration-300 py-1 px-3
							{$page.url.pathname === item.href ? 'text-white' : ''}"
					>
						{item.label}
					</a>
				{/each}
			</nav>

			<!-- Desktop CTA Button -->
			<div class="hidden md:flex items-center space-x-4">
				<button class="bg-white rounded-full px-6 py-2 text-black font-medium shadow-sm">
					Members Area
				</button>
			</div>

			<!-- Mobile menu button -->
			<div class="md:hidden">
				<button
					onclick={toggleMobileMenu}
					class="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 p-2"
					aria-label="Toggle mobile menu"
				>
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						{#if mobileMenuOpen}
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
						{:else}
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
						{/if}
					</svg>
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile Navigation Menu -->
	{#if mobileMenuOpen}
		<div class="md:hidden bg-white border-t border-gray-200">
			<div class="px-2 pt-2 pb-3 space-y-1">
				{#each navItems as item}
					<a 
						href={item.href}
						onclick={closeMobileMenu}
						class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors
							{$page.url.pathname === item.href ? 'text-indigo-600 bg-indigo-50' : ''}"
					>
						{item.label}
					</a>
				{/each}
				<div class="pt-4">
					<button class="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
						Bắt đầu
					</button>
				</div>
			</div>
		</div>
	{/if}
</header>