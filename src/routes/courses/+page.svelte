<script>
	import { scale } from 'svelte/transition';
	import CourseCard from '$lib/components/CourseCard.svelte';
	
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
		console.log('Selected category:', option.value);
	}

	// Close dropdown when clicking outside
	function handleClickOutside(event) {
		if (!event.target.closest('.dropdown-container')) {
			isDropdownOpen = false;
		}
	}

	// Sample course data
	const courses = Array(9).fill({
		href: "/blog/xa-ut0-is-gold-without-borders-q-and-a-with-usdt-0-co-founder-lorenzo-r",
		imageSrc: "https://cms.firebits.top/assets/24ccfc7a-c4c9-4fc0-af5a-148d26c85aa5",
		imageAlt: "XAUt0 is gold without borders: Q&A with USDT0 co-founder Lorenzo R",
		title: "XAUt0 is gold without borders: Q&A with USDT0 co-founder Lorenzo R",
		description: "As digital assets evolve, we're starting to see more real-world value being brought on-chain, quite literally."
	});
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
				class="text-muted-foreground placeholder:text-muted-foreground border-gray-850 flex h-10 w-full rounded-md border bg-transparent px-3 py-5 transition-colors duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium hover:border-gray-600 focus:border-white focus:ring-0 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
				style="box-shadow: none !important; outline: none !important;"
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
			{#each courses as course, index}
				<CourseCard
					href={course.href}
					imageSrc={course.imageSrc}
					imageAlt={course.imageAlt}
					title={course.title}
					description={course.description}
				/>
			{/each}
		</div>
	</div>
</div>
