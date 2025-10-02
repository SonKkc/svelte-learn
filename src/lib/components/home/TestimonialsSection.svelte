<script lang="ts">
	import CTAButtons from '$lib/components/shared/CTAButtons.svelte';
	
	// Props for customization
	export let subtitle = "Recognized by Professionals";
	export let title = "Trusted by Employees at Leading Companies";
	export let highlightedCompanies = "Microsoft, Amazon, and Google,";
</script>

<!-- svelte-ignore bem-class-names -->
<div class="container">
	<section class="flex flex-col lg:my-5 lg:mb-10">
		<header class="my-12 mb-6 text-center">
			<p
				class="text-md from-violet-70 to-pink-650 my-4 inline-block bg-gradient-to-r bg-clip-text font-semibold tracking-wide text-transparent"
			>
				{subtitle}
			</p>
			<h2 class="text-4xl leading-[1.2]">{title}</h2>
		</header>
		<div class="flex flex-col items-center" style="opacity: 1; transform: none;">
			<p
				class="mb-10 max-w-[50ch] text-center text-lg lg:text-xl lg:leading-8"
				style="opacity: 1; transform: none;"
			>
				My courses are used by professionals from top companies like <span class="text-white"
					>{highlightedCompanies}</span
				> helping them sharpen their skills and stay ahead in their fields.
			</p>
			<div style="opacity: 1; transform: none;">
				<CTAButtons />
			</div>
		</div>
	</section>
</div>