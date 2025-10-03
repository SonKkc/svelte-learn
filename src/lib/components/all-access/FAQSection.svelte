<script lang="ts">
	export let badge: string = "Need More Details?";
	export let title: string = "Frequently-Asked Questions";
	export let questions: Array<{question: string, answer: string}> = [];
</script>

<div class="flex flex-col items-center text-center">
	<section class="flex flex-col lg:my-5 lg:mb-10">
		<header class="my-12 mb-6 text-center">
			<p
				class="text-md from-violet-70 to-pink-650 my-4 inline-block bg-gradient-to-r bg-clip-text font-semibold tracking-wide text-transparent"
			>
				{badge}
			</p>
			<h2 class="text-4xl leading-[1.2]">{title}</h2>
		</header>
		<ul class="mt-5 mb-8 max-w-prose text-left">
			{#each questions as {question, answer}}
				<li class="mb-10">
					<p class="mb-2 font-medium !text-white md:font-semibold">
						{question}
					</p>
					<p>
						{answer}
					</p>
				</li>
			{/each}
		</ul>
	</section>
</div>