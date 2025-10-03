<script lang="ts">
	export let authorName: string;
	export let authorImage: string = "";
	export let testimonialText: string;
	export let starRating: string;
	export let className: string = "";

	$: initials = authorName
		.split(' ')
		.map(name => name.charAt(0).toUpperCase())
		.join('')
		.slice(0, 1); 

	const bgColors = [
		'bg-violet-500',
		'bg-blue-500',
		'bg-green-500',
		'bg-yellow-500',
		'bg-red-500',
		'bg-pink-500',
		'bg-indigo-500',
		'bg-purple-500',
		'bg-teal-500',
		'bg-orange-500'
	];

	$: randomBgColor = bgColors[authorName.charCodeAt(0) % bgColors.length];
</script>
<div class="relative overflow-hidden rounded-lg border border-slate-800 transition-colors duration-200 ease-in-out {className}">
	<figure class="h-full rounded-2xl p-5">
		<figcaption class="mb-5 flex items-center gap-x-4">
			{#if authorImage}
				<img
					alt={authorName}
					loading="lazy"
					width="40"
					height="40"
					decoding="async"
					data-nimg="1"
					class="h-10 w-10 rounded-full bg-gray-50"
					src={authorImage}
					style="color: transparent;"
				/>
			{:else}
				<div class="h-10 w-10 rounded-full {randomBgColor} flex items-center justify-center text-white font-semibold text-sm">
					{initials}
				</div>
			{/if}
			<div>
				<div class="font-semibold text-white">{authorName}</div>
				<img
					alt="Stars"
					data-testid="trust-stars"
					fetchpriority="high"
					width="90"
					height="30"
					decoding="async"
					data-nimg="1"
					class="inline"
					src={starRating}
					style="color: transparent;"
				/>
			</div>
		</figcaption>
		<blockquote>
			<p>
				{testimonialText}
			</p>
		</blockquote>
	</figure>
</div>