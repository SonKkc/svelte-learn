<!-- svelte-ignore bem-class-names -->
<script lang="ts">
	export let greeting = 'Hello,';
	export let name = "I'm Mosh Hamedani.";
	export let description = "I've spent 20+ years in software engineering, and my goal isn't just to teach you to code — it's to help you think like a professional software engineer, master problem-solving, and build skills you'll use for life.";
	export let videoSrc = 'https://cdn.codewithmosh.com/video/upload/v1735930863/promo-videos/mosh-intro.mp4';
	export let videoPoster = 'https://res.cloudinary.com/codewithmosh/image/upload/f_auto,q_auto/v1/promo-videos/mosh-intro-poster';

	// Stats data
	export let stats = [
		{
			number: '10M+',
			label: 'Students taught',
			color: 'violet',
			gradientColor: 'via-violet-500'
		},
		{
			number: '4M',
			label: 'YouTube fans',
			color: 'green',
			gradientColor: 'via-green-600'
		},
		{
			number: '20+',
			label: 'Years of experience',
			color: 'pink',
			gradientColor: 'via-pink-500'
		},
		{
			number: '52',
			label: 'Coding courses',
			color: 'orange',
			gradientColor: '!via-orange-400'
		}
	];

	// Get color classes based on color name
	function getColorClasses(color: string): string {
		const colorMap: Record<string, string> = {
			violet: '!dark:text-violet-60 !text-violet-500',
			green: '!text-green-600',
			pink: 'dark:text-pink-540 !text-pink-500',
			orange: '!text-orange-400'
		};
		return colorMap[color] || '';
	}
</script>

<section class="flex flex-col lg:my-5 lg:mb-10">
	<header class="my-12 mb-6 text-center">
		<p
			class="text-md from-violet-70 to-pink-650 my-4 inline-block bg-gradient-to-r bg-clip-text font-semibold tracking-wide text-transparent"
		>
			{greeting}
		</p>
		<h2 class="text-4xl leading-[1.2]">{name}</h2>
	</header>
	<div class="flex flex-col items-center">
		<div style="opacity: 1; transform: none;">
			<p class="max-w-[50ch] text-center text-lg font-medium md:text-2xl md:leading-9">
				{description}
			</p>
		</div>
		<div class="mx-auto my-10 w-full max-w-[725px] px-3" style="opacity: 1; transform: none;">
			<video
				controls
				src={videoSrc}
				poster={videoPoster}
			>
				<track kind="captions" srclang="en" label="English" src="data:text/vtt,WEBVTT" default />
			</video>
		</div>
		<div class="mb-10">
			<div class="mx-auto grid grid-cols-2 justify-center gap-4 md:grid-cols-4">
				{#each stats as stat}
					<div style="opacity: 1; transform: none;">
						<div class="border-gray-850 relative rounded-xl border shadow-2xl">
							<div class="flex -translate-y-[1px] justify-center">
								<div class="w-3/4">
									<div
										class="h-[1px] w-full bg-gradient-to-r from-transparent {stat.gradientColor} to-transparent"
									></div>
								</div>
							</div>
							<div class="flex flex-col items-center justify-center p-8 text-center">
								<p
									class="mb-2 text-2xl font-bold {getColorClasses(stat.color)} md:text-3xl lg:text-4xl"
								>
									{stat.number}
								</p>
								<p class="mb-0 leading-5">{stat.label}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>