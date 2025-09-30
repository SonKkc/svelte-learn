<script>
	import { scale } from 'svelte/transition';
	
	// Dropdown state
	let isDropdownOpen = false;
	let selectedOption = 'All courses';

	// Course categories
	const courseCategories = [
		{ value: 'all', label: 'All courses' },
		{ value: 'frontend', label: 'Frontend development' },
		{ value: 'backend', label: 'Backend development' },
		{ value: 'se', label: 'Software Engineering Essentials' }
	];

	// Toggle dropdown
	function toggleDropdown() {
		isDropdownOpen = !isDropdownOpen;
	}

	// Select option
	function selectOption(option) {
		selectedOption = option.label;
		isDropdownOpen = false;
		// You can add filter logic here
		console.log('Selected category:', option.value);
	}

	// Close dropdown when clicking outside
	function handleClickOutside(event) {
		if (!event.target.closest('.dropdown-container')) {
			isDropdownOpen = false;
		}
	}
</script>

<svelte:window on:click={handleClickOutside} />

<div class="py-8">
	<div
		class="container mx-auto mb-6 flex w-full flex-col items-center justify-center text-center md:my-6 lg:my-10"
	>
		<h1 class="mb-8 text-4xl leading-[1.2] lg:text-5xl">Build Real-World Skills</h1>
		<p class="max-w-prose text-lg !leading-[1.6] lg:text-2xl">
			Master software development with structured courses designed to make you job-ready.
		</p>
	</div>
</div>
<div class="container mx-auto">
	<div class="mb-5 flex flex-wrap md:flex-nowrap">
		<div class="mb-5 w-full md:mr-5 lg:w-[33rem]">
			<input
				class="placeholder:text-muted-foreground border-gray-850 flex h-10 w-full rounded-md border bg-transparent px-3 py-5 transition-colors duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium hover:border-gray-600 focus:border-white focus:ring-0 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
				placeholder="Search"
				name="search"
				type="text"
			/>
		</div>
		<div class="dropdown-container relative w-auto">
			<button
				class="border-input text-accent border-gray-850 flex w-full items-center justify-between gap-5 rounded-md border px-3 py-2"
				on:click={toggleDropdown}
				type="button"
			>
				{selectedOption}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide-icon lucide lucide-chevron-down size-4 opacity-50"
					class:rotate-180={isDropdownOpen}
				>
					<path d="m6 9 6 6 6-6"></path>
				</svg>
			</button>

			{#if isDropdownOpen}
				<div
					class="bg-black border-gray-850 absolute top-12 left-0 z-50 mt-1 w-full min-w-[290px] overflow-hidden rounded border shadow-md transform transition-all duration-200 ease-out"
					style="transform-origin: top center;"
					in:scale={{ duration: 200, start: 0.95, opacity: 0 }}
					out:scale={{ duration: 150, start: 0.95, opacity: 0 }}
				>
					<div class="py-1">
						{#each courseCategories as category}
							<button
								class="relative flex w-full text-accent cursor-default items-center py-2 pr-8 pl-3 outline-none select-none hover:bg-violet-500"
								on:click={() => selectOption(category)}
							>
								{category.label}
								{#if selectedOption === category.label}
									<span class="absolute right-2 flex size-3.5 items-center justify-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="lucide-icon lucide lucide-check size-6 text-violet-500"
										>
											<path d="M20 6 9 17l-5-5"></path>
										</svg>
									</span>
								{/if}
							</button>
						{/each}
					</div>
				</div>
			{/if}

			<input
				name="category"
				aria-hidden="true"
				tabindex="-1"
				style="position: absolute; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px; transform: translateX(-100%);"
			/>
		</div>
	</div>
	<div class="flex flex-col items-center">
		<div class="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			<a
				class="relative max-w-[350px] overflow-hidden rounded-lg border border-slate-800 transition-colors duration-200 ease-in-out hover:dark:border-[#484354]"
				href="/blog/xa-ut0-is-gold-without-borders-q-and-a-with-usdt-0-co-founder-lorenzo-r"
			>
				<div class="relative h-64 w-full overflow-hidden">
					<img
						src="https://cms.firebits.top/assets/24ccfc7a-c4c9-4fc0-af5a-148d26c85aa5"
						alt="XAUt0 is gold without borders: Q&amp;A with USDT0 co-founder Lorenzo R"
						class="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-110"
						sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
						loading="lazy"
						decoding="async"
						fill="true"
						style="object-fit: cover; width: 100%; height: 100%;"
					/>
				</div>
				<div class="p-6">
					<h3 class="font-heading group-hover:text-accent text-xl transition-colors duration-300">
						XAUt0 is gold without borders: Q&amp;A with USDT0 co-founder Lorenzo R
					</h3>
					<p class="text-foreground mt-2 text-sm">
						As digital assets evolve, we’re starting to see more real-world value being brought
						on-chain, quite literally.
					</p>
				</div>
			</a>
			<a
				class="relative max-w-[350px] overflow-hidden rounded-lg border border-slate-800 transition-colors duration-200 ease-in-out hover:dark:border-[#484354]"
				href="/blog/doge-coin-faces-key-resistance-will-bulls-establish-a-higher-low-before-the-next-leg-up"
			>
				<div class="relative h-64 w-full overflow-hidden">
					<img
						src="https://cms.firebits.top/assets/8e4ae129-d66e-46fe-8a56-c2edea6ac672"
						alt="DOGE coin faces key resistance: will bulls establish a Higher Low before the next leg up?"
						class="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-110"
						sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
						loading="lazy"
						decoding="async"
						fill="true"
						style="object-fit: cover; width: 100%; height: 100%;"
					/>
				</div>
				<div class="p-6">
					<h3 class="font-heading group-hover:text-accent text-xl transition-colors duration-300">
						DOGE coin faces key resistance: will bulls establish a Higher Low before the next leg
						up?
					</h3>
					<p class="text-foreground mt-2 text-sm">
						Dogecoin has maintained a short-term uptrend, but it now faces a critical technical
						resistance zone that could trigger a corrective move. While this may pause the current
						rally, a healthy pullback could establish a bullish higher low, reinforcing trend
						continuation.
					</p>
				</div>
			</a>
			<a
				class="relative max-w-[350px] overflow-hidden rounded-lg border border-slate-800 transition-colors duration-200 ease-in-out hover:dark:border-[#484354]"
				href="/blog/bitcoin-skeptical-vanguard-holds-20m-shares-in-strategy-amid-index-inflows"
			>
				<div class="relative h-64 w-full overflow-hidden">
					<img
						src="https://cms.firebits.top/assets/1cbb1523-fa1f-481e-b8f6-43e4e92e0b6b"
						alt="Bitcoin-skeptical Vanguard holds 20m+ shares in Strategy amid index inflows"
						class="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-110"
						sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
						loading="lazy"
						decoding="async"
						fill="true"
						style="object-fit: cover; width: 100%; height: 100%;"
					/>
				</div>
				<div class="p-6">
					<h3 class="font-heading group-hover:text-accent text-xl transition-colors duration-300">
						Bitcoin-skeptical Vanguard holds 20m+ shares in Strategy amid index inflows
					</h3>
					<p class="text-foreground mt-2 text-sm">
						The crypto-skeptical Wall Street giant has significant indirect exposure to Bitcoin,
						thanks to Strategy and other stocks.
					</p>
				</div>
			</a>
			<a
				class="relative max-w-[350px] overflow-hidden rounded-lg border border-slate-800 transition-colors duration-200 ease-in-out hover:dark:border-[#484354]"
				href="/blog/why-steampunk-rabbits-are-the-future-of-work"
			>
				<div class="relative h-64 w-full overflow-hidden">
					<img
						src="https://cms.firebits.top/assets/3eff7dc2-445a-47c5-9503-3f600ecdb5c6"
						alt="Why Steampunk Rabbits Are The Future of Work"
						class="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-110"
						sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
						loading="lazy"
						decoding="async"
						fill="true"
						style="object-fit: cover; width: 100%; height: 100%;"
					/>
				</div>
				<div class="p-6">
					<h3 class="font-heading group-hover:text-accent text-xl transition-colors duration-300">
						Why Steampunk Rabbits Are The Future of Work
					</h3>
					<p class="text-foreground mt-2 text-sm">
						This post discusses how steampunk rabbits could be the future of work, highlighting
						their efficiency, multi-talented nature, and ability to bring charm to the workplace.
					</p>
				</div>
			</a>
			<a
				class="relative max-w-[350px] overflow-hidden rounded-lg border border-slate-800 transition-colors duration-200 ease-in-out hover:dark:border-[#484354]"
				href="/blog/the-perks-of-going-headless-why-you-should-consider-a-headless-cms"
			>
				<div class="relative h-64 w-full overflow-hidden">
					<img
						src="https://cms.firebits.top/assets/fd6440c2-dd48-4792-9d08-3124cd99b40f"
						alt="The Perks of Going Headless: Why You Should Consider a Headless CMS"
						class="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-110"
						sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
						loading="lazy"
						decoding="async"
						fill="true"
						style="object-fit: cover; width: 100%; height: 100%;"
					/>
				</div>
				<div class="p-6">
					<h3 class="font-heading group-hover:text-accent text-xl transition-colors duration-300">
						The Perks of Going Headless: Why You Should Consider a Headless CMS
					</h3>
					<p class="text-foreground mt-2 text-sm">
						Discover why a headless CMS might be the right choice for your business.
					</p>
				</div>
			</a>
			<a
				class="relative max-w-[350px] overflow-hidden rounded-lg border border-slate-800 transition-colors duration-200 ease-in-out hover:dark:border-[#484354]"
				href="/blog/testing-one-two-three"
			>
				<div class="relative h-64 w-full overflow-hidden">
					<img
						src="https://cms.firebits.top/assets/7775c53a-6c2c-453d-8c22-8b5445121d10"
						alt="How To Become A Very Productive Rabbit"
						class="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-110"
						sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
						loading="lazy"
						decoding="async"
						fill="true"
						style="object-fit: cover; width: 100%; height: 100%;"
					/>
				</div>
				<div class="p-6">
					<h3 class="font-heading group-hover:text-accent text-xl transition-colors duration-300">
						How To Become A Very Productive Rabbit
					</h3>
					<p class="text-foreground mt-2 text-sm">
						In this blog post, we will look at some simple tips and tricks that you can adopt to
						become a very productive rabbit.
					</p>
				</div>
			</a>
			<a
				class="relative max-w-[350px] overflow-hidden rounded-lg border border-slate-800 transition-colors duration-200 ease-in-out hover:dark:border-[#484354]"
				href="/blog/rabbit-facts-that-will-melt-your-mind"
			>
				<div class="relative h-64 w-full overflow-hidden">
					<img
						src="https://cms.firebits.top/assets/8f748634-d77b-4985-b27e-7e1f3559881a"
						alt="Rabbit Facts That Will Blow Your Mind me"
						class="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-110"
						sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
						loading="lazy"
						decoding="async"
						fill="true"
						style="object-fit: cover; width: 100%; height: 100%;"
					/>
				</div>
				<div class="p-6">
					<h3 class="font-heading group-hover:text-accent text-xl transition-colors duration-300">
						Rabbit Facts That Will Blow Your Mind me
					</h3>
					<p class="text-foreground mt-2 text-sm">
						These interesting facts about rabbits make them fascinating creatures that are worth
						learning more about.
					</p>
				</div>
			</a>
			<a
				class="relative max-w-[350px] overflow-hidden rounded-lg border border-slate-800 transition-colors duration-200 ease-in-out hover:dark:border-[#484354]"
				href="/blog/essential-tips-for-keeping-your-bunny-looking-and-feeling-their-best"
				><div class="relative h-64 w-full overflow-hidden">
					<img
						src="https://cms.firebits.top/assets/d4fd6edc-4cc5-48c1-8bc7-e646924bbdca"
						alt="Essential Tips for Keeping Your Bunny Looking and Feeling Their Best"
						class="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-110"
						sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
						loading="lazy"
						decoding="async"
						fill="true"
						style="object-fit: cover; width: 100%; height: 100%;"
					/>
				</div>
				<div class="p-6">
					<h3 class="font-heading group-hover:text-accent text-xl transition-colors duration-300">
						Essential Tips for Keeping Your Bunny Looking and Feeling Their Best
					</h3>
					<p class="text-foreground mt-2 text-sm">
						Rabbit grooming, encompassing brushing, nail trimming, ear cleaning, dental care, and
						spot cleaning, is vital for your bunny's health, appearance, and well-being.
					</p>
				</div></a
			><a
				class="relative max-w-[350px] overflow-hidden rounded-lg border border-slate-800 transition-colors duration-200 ease-in-out hover:dark:border-[#484354]"
				href="/blog/pirates-guide-to-productivity-web-developers-favorite-tools-on-macs"
				><div class="relative h-64 w-full overflow-hidden">
					<img
						src="https://cms.firebits.top/assets/9a52e835-e131-4290-81bb-5a512599f93e"
						alt="A Pirate's Guide to Productivity: Web Developers' Favorite Tools on Macs"
						class="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-110"
						sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
						loading="lazy"
						decoding="async"
						fill="true"
						style="object-fit: cover; width: 100%; height: 100%;"
					/>
				</div>
				<div class="p-6">
					<h3 class="font-heading group-hover:text-accent text-xl transition-colors duration-300">
						A Pirate's Guide to Productivity: Web Developers' Favorite Tools on Macs
					</h3>
					<p class="text-foreground mt-2 text-sm">
						Ahoy, matey! Discover the top productivity tools web developers be usein' on their
						trusty Macs. Set sail for smoother workflows and greater bounty!
					</p>
				</div></a
			>
		</div>
	</div>
</div>
