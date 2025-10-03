<script lang="ts">
	import PricingButton from '$lib/components/shared/PricingButton.svelte';
	
	export let title: string;
	export let description: string;
	export let price: string;
	export let taxInfo: string;
	export let features: string[];
	export let buttonHref: string;
	export let buttonText: string = "Unlock All Courses";
	export let showBestBadge: boolean = false;
	export let countryFlag: string = "🇻🇳";
</script>

<div class="relative w-full md:max-w-[450px]" role="enrollment-card">
	<div class="relative rounded-3xl bg-gradient-to-b from-slate-700 to-transparent p-[1px]">
		<div
			class="via-slate-850 overflow-hidden rounded-3xl bg-gradient-to-b from-slate-800 to-slate-900 p-6 shadow-lg md:p-8"
		>
			<h4 class="mb-2 w-40 text-2xl font-bold text-white md:w-auto">{title}</h4>
			<p class="text-gray-350 font-medium">{description}</p>
			<div class="my-6 h-30">
				<div data-testid="price-tag">
					<span class="text-5xl font-bold !text-white">${price}</span>
				</div>
				<div class="text-gray-350 my-2">
					<span>{countryFlag} {taxInfo}</span>
				</div>
			</div>
			<div class="flex flex-col items-center px-6 md:px-8 lg:px-12">
				{#if showBestBadge}
					<div class="absolute top-8 right-5 flex flex-col gap-1 md:top-9">
						<div
							class="inline rounded-md bg-pink-500 px-3 py-1 text-sm font-medium text-white md:font-bold"
						>
							best
						</div>
					</div>
				{/if}

				<PricingButton href={buttonHref} text={buttonText} />
				<p class="text-gray-350 my-2 text-sm font-semibold">No recurring fees — ever.</p>
			</div>
			<div class="mt-10 w-full">
				<div class="text-gray-350 mb-4 font-medium">What's included:</div>
				<ul class="list-none [&_li]:flex [&_li]:items-start [&_li]:gap-2 [&_li]:mb-2 [&_li]:before:content-['✓'] [&_li]:before:text-green-400 [&_li]:before:font-bold [&_li]:before:flex-shrink-0 prose prose-sm max-w-none text-white">
					{#each features as feature}
						<li>{feature}</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>