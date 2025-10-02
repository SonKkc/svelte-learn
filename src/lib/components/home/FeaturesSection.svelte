<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	
	// Import feature images
	import featureImg1 from '$lib/assets/images/feature-01.webp';
	import featureImg2 from '$lib/assets/images/feature-02.webp';
	import featureImg3 from '$lib/assets/images/feature-03.webp';
	import featureImg4 from '$lib/assets/images/feature-04.webp';
	import featureImg5 from '$lib/assets/images/feature-05.webp';
	import featureImg6 from '$lib/assets/images/feature-06.webp';

	// Features data
	const features = [
		{
			id: 1,
			iconName: 'video-courses',
			iconSize: 21,
			subtitle: "A clear path to master coding",
			title: "Perfectly Structured Courses",
			description: "No more jumping between random YouTube tutorials. Follow a clear, logical path designed to build your skills step-by-step.",
			image: featureImg2,
			alt: "Perfectly Structured Courses",
			imageOrder: "right"
		},
		{
			id: 2,
			iconName: 'clock-time',
			iconSize: 25,
			subtitle: "Straightforward and to the point",
			title: "Clear and Bite-Sized Lessons",
			description: "Each lesson is focused and fluff-free, so you can make real progress—even with a busy schedule. Get exactly what you need without wasting a minute.",
			image: featureImg1,
			alt: "Clear and Bite-Sized Lessons",
			imageOrder: "left"
		},
		{
			id: 3,
			iconName: 'tools',
			iconSize: 25,
			subtitle: "Deep understanding, not just shortcuts",
			title: "More than Just Code",
			description: "I go beyond the \"what\" and show you the \"why\" and \"how\" behind every concept, so you can code with real understanding.",
			image: featureImg3,
			alt: "More than Just Code",
			imageOrder: "right"
		},
		{
			id: 4,
			iconName: 'globe-world',
			iconSize: 25,
			subtitle: "Get ready for real-world work",
			title: "Hands-on Projects You'll Love",
			description: "We'll build real-world projects together, giving you the confidence to tackle real challenges on the job.",
			image: featureImg4,
			alt: "Hands-on Projects You'll Love",
			imageOrder: "left"
		},
		{
			id: 5,
			iconName: 'users-group',
			iconSize: 25,
			subtitle: "Decades of coding, shared with you",
			title: "Built on 20+ Years of Experience",
			description: "With over two decades in the industry, I've seen it all. I'll share insights and lessons that you won't find in any textbook.",
			image: featureImg5,
			alt: "Built on 20+ Years of Experience",
			imageOrder: "right"
		},
		{
			id: 6,
			iconName: 'shield-check',
			iconSize: 25,
			subtitle: "Join a global community of learners",
			title: "Trusted by Millions",
			description: "#1 ranked tutorials on YouTube, trusted by millions for their clarity and depth.",
			image: featureImg6,
			alt: "Trusted by Millions",
			imageOrder: "left"
		}
	];
</script>

<!-- svelte-ignore bem-class-names -->
<div class="relative overflow-hidden border-t-[1px] border-t-slate-700">
	<section class="flex flex-col lg:my-5 lg:mb-10">
		<header class="my-12 mb-6 text-center">
			<p
				class="text-md from-violet-70 to-pink-650 my-4 inline-block bg-gradient-to-r bg-clip-text font-semibold tracking-wide text-transparent"
			>
				Why You'll Love Learning Here
			</p>
			<h2 class="text-4xl leading-[1.2]">Quality, Structure, and Real Results</h2>
		</header>
		<div class="container">
			{#each features as feature}
				<div class="my-10 grid grid-cols-1 gap-8 md:grid-cols-2">
					<div class="md:mx-4" style="opacity: 1; transform: none;">
						<div
							class="my-3 grid h-12 w-12 place-items-center rounded-full bg-violet-50 dark:bg-blue-800"
						>
							<div class="dark:text-violet-75 text-violet-500">
								<Icon 
									name={feature.iconName}
									size={feature.iconSize}
								/>
							</div>
						</div>
						<p
							class="text-md from-violet-70 to-pink-650 mb-3 inline-block bg-gradient-to-r bg-clip-text font-semibold text-transparent"
						>
							{feature.subtitle}
						</p>
						<h2 class="mb-4 text-3xl font-semibold lg:mb-8">{feature.title}</h2>
						<p class="text-lg leading-7 lg:text-2xl lg:leading-9">
							{feature.description}
						</p>
					</div>
					<div 
						class="flex justify-center {feature.imageOrder === 'left' ? 'md:order-first' : ''}" 
						style="opacity: 1; transform: none;"
					>
						<img
							alt={feature.alt}
							loading="lazy"
							decoding="async"
							data-nimg="1"
							class={feature.id === 1 ? "w-5/6 md:w-full md:pt-20 xl:w-4/5" :
								   feature.id === 2 ? "w-5/6 md:w-full lg:pt-4 xl:w-5/6" :
								   feature.id === 3 ? "w-3/5 md:w-4/6 md:pt-20 lg:pt-8 xl:w-3/5" :
								   feature.id === 4 ? "w-4/6 md:pt-20 lg:pt-10 xl:w-3/5" :
								   feature.id === 5 ? "md:w-full md:pt-28 lg:pt-16 xl:w-4/5" :
								   "w-5/6"}
							src={feature.image}
							style="color: transparent;"
						/>
					</div>
				</div>
			{/each}
		</div>
	</section>
</div>