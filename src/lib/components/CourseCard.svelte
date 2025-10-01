<script>
	export let href = "/blog/xa-ut0-is-gold-without-borders-q-and-a-with-usdt-0-co-founder-lorenzo-r";
	export let imageSrc = "https://cms.firebits.top/assets/24ccfc7a-c4c9-4fc0-af5a-148d26c85aa5";
	export let imageAlt = "XAUt0 is gold without borders: Q&A with USDT0 co-founder Lorenzo R";
	export let title = "XAUt0 is gold without borders: Q&A with USDT0 co-founder Lorenzo R";
	export let description = "As digital assets evolve, we're starting to see more real-world value being brought on-chain, quite literally.";
</script>

<a
	class="relative max-w-[350px] overflow-hidden rounded-lg border border-slate-800 transition-colors duration-200 ease-in-out hover:dark:border-[#484354]"
	{href}
>
	<div class="relative h-64 w-full overflow-hidden">
		<img
			src={imageSrc}
			alt={imageAlt}
			class="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-110"
			sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
			loading="lazy"
			decoding="async"
			style="object-fit: cover; width: 100%; height: 100%;"
		/>
	</div>
	<div class="p-6">
		<h3 class="font-heading group-hover:text-accent text-xl transition-colors duration-300">
			{title}
		</h3>
		<p class="text-foreground mt-2 text-sm">
			{description}
		</p>
	</div>
</a>