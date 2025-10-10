<script>
	import { page } from '$app/state';
	import logoDark from '$lib/assets/logo-white.png';

	// Navigation items
	const navItems = [
		{ href: '/courses', label: 'Courses' },
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

	
	$effect(() => {
		if (typeof document !== 'undefined') {
			if (mobileMenuOpen) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = '';
			}
		}
	});
</script>

<header class="font-heading text-foreground sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md">
	<div class="mx-auto flex max-w-7xl items-center justify-between px-3 py-2 md:py-4 lg:px-6">
		<!-- Logo -->
		<div class="flex items-center">
			<a href="/" class="flex items-center space-x-2">
				<img src={logoDark} alt="SvelteKit Logo" class="h-8 w-auto dark:hidden" />
				<img src={logoDark} alt="SvelteKit Logo" class="hidden h-8 w-auto dark:block" />
			</a>
		</div>

		<!-- Desktop Navigation -->
		<nav class="hidden items-center justify-between gap-2 md:flex">
			{#each navItems as item}
				<a
					href={item.href}
					class="ring-offset-background relative inline-flex cursor-pointer items-center justify-center gap-2 rounded-4xl px-3 py-1 font-medium tracking-normal whitespace-nowrap text-gray-500 transition-colors duration-300 hover:text-gray-300 focus:text-white focus-visible:ring-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:text-white
							{page.url.pathname === item.href ? 'text-white' : ''}"
				>
					{item.label}
				</a>
			{/each}
		</nav>

		<!-- Desktop CTA Button -->
		<div
			class="block rounded-3xl bg-white px-3 py-1 no-underline outline-none hover:bg-gray-300 hover:no-underline"
		>
			<button class="text-base tracking-normal text-black transition-colors duration-300">
				Members Area
			</button>
		</div>

		<!-- Mobile menu button -->
		<div class="flex md:hidden">
			<button
				class="ring-offset-background focus-visible:ring-ring hover:text-accent hover:border-accent relative inline-flex cursor-pointer items-center justify-center gap-2 rounded-4xl border border-gray-500 p-2 font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
				onclick={toggleMobileMenu}
				aria-haspopup="menu"
				aria-expanded={mobileMenuOpen}
				aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
				type="button"
			>
				<svg
					width="18"
					height="18"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					class="text-white"
					stroke="currentColor"
					stroke-linecap="round"
					fill="none"
				>
					<line
						class="origin-center stroke-2 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
						class:translate-x-[-3px]={mobileMenuOpen}
						class:translate-y-[4px]={mobileMenuOpen}
						class:rotate-45={mobileMenuOpen}
						x1="3"
						y1="6"
						x2="21"
						y2="6"
					>
					</line>
					<line
						class="stroke-2 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
						class:opacity-0={mobileMenuOpen}
						x1="3"
						y1="12"
						x2="21"
						y2="12"
					>
					</line>
					<line
						class="origin-center stroke-2 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
						class:translate-x-[-3px]={mobileMenuOpen}
						class:-translate-y-[4px]={mobileMenuOpen}
						class:-rotate-45={mobileMenuOpen}
						x1="3"
						y1="18"
						x2="21"
						y2="18"
					>
					</line>
				</svg>
			</button>
		</div>
	</div>

	<!-- Mobile Navigation Menu -->
	{#if mobileMenuOpen}
		<div
			id="bits-16"
			data-bits-floating-content-wrapper=""
			dir="ltr"
			style="position: fixed; left: 0px; top: 0px; transform: translate(0px, 50px); will-change: transform; min-width: max-content; z-index: 50; --bits-floating-transform-origin: 50% 0px; --bits-floating-available-width: 342px; --bits-floating-available-height: 457px; --bits-floating-anchor-width: 34px; --bits-floating-anchor-height: 34px; pointer-events: auto;"
		>
			<div
				forcemount="false"
				class="bg-background rounded-0 top-full z-50 h-screen w-screen max-w-full overflow-hidden p-3 shadow-md"
				role="menu"
				aria-orientation="vertical"
				data-dropdown-menu-content=""
				data-state="open"
				data-side="bottom"
				data-align="center"
				tabindex="-1"
				style="pointer-events: auto; --bits-dropdown-menu-content-transform-origin: var(--bits-floating-transform-origin); --bits-dropdown-menu-content-available-width: var(--bits-floating-available-width); --bits-dropdown-menu-content-available-height: var(--bits-floating-available-height); --bits-dropdown-menu-anchor-width: var(--bits-floating-anchor-width); --bits-dropdown-menu-anchor-height: var(--bits-floating-anchor-height);"
			>
				{#each navItems as item}
					<div
						class="w-full !bg-transparent p-3"
						tabindex="-1"
						role="menuitem"
						aria-disabled="false"
						data-dropdown-menu-item=""
					>
						<a
							class="font-heading data-[active=true]:text-accent block w-full font-bold text-gray-400 hover:text-gray-100 focus:outline-0"
							href={item.href}
							onclick={closeMobileMenu}
							data-active={page.url.pathname === item.href ? 'true' : 'false'}
						>
							{item.label}
						</a>
					</div>
				{/each}

				<div class="w-full !bg-transparent p-3 pt-6">
					<button
						class="w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
						onclick={closeMobileMenu}
					>
						Members Area
					</button>
				</div>
			</div>
		</div>
	{/if}
</header>
