<script lang="ts">
	import TestimonialCard from './TestimonialCard.svelte';
	import Star45 from '$lib/assets/images/star45.svg';
	import Star5 from '$lib/assets/images/star5.svg';

	export let badge: string = 'Real Results, Real Stories';
	export let title: string = 'Why Members Love Learning Here';
	export let rating: string = '4.7';
	export let reviewCount: string = '6556';
	export let description: string =
		"Don't just take my word for it—see how members are leveling up their skills and landing dream jobs with full access to every course.";

	const testimonials = [
		{
			id: 1,
			authorName: 'Fred Lackey',
			authorImage: '',
			starRating: Star5,
			testimonialText:
				"Been recommending Mosh for years... probably a decade by now. I've lost count of how many developers and business people I have shared one of his videos with. Not much to say other than he's one of the best instructors out there. Great personality for teaching and a solid mastery of the subject matter. He's always going to be my first stop for learning something new."
		},
		{
			id: 2,
			authorName: 'Sarah Chen',
			authorImage: '',
			starRating: Star5,
			testimonialText:
				"I was completely new to programming and Mosh's courses made everything click. The way he explains complex concepts in simple terms is incredible. I landed my first developer job just 6 months after starting with his JavaScript course. Best investment I've ever made in my career!"
		},
		{
			id: 3,
			authorName: 'Michael Rodriguez',
			authorImage: '',
			starRating: Star45,
			testimonialText:
				"As a senior developer, I was skeptical about online courses. But Mosh's React course taught me modern patterns I wasn't using. The projects are realistic and the explanations are spot-on. Now I recommend his courses to my entire team."
		},
		{
			id: 4,
			authorName: 'Emily Johnson',
			authorImage: '',
			starRating: Star5,
			testimonialText:
				"I've tried many coding instructors but nobody comes close to Mosh's teaching style. He goes at the perfect pace and his real-world examples make everything practical. I've completed 5 of his courses and each one has directly helped me in my job."
		},
		{
			id: 5,
			authorName: 'David Kim',
			authorImage: '',
			starRating: Star5,
			testimonialText:
				"Switched careers from marketing to web development thanks to Mosh's courses. His Python course gave me the foundation I needed, and the Node.js course helped me become full-stack. The lifetime access means I can always go back and review concepts."
		},
		{
			id: 6,
			authorName: 'Alex Thompson',
			authorImage: '',
			starRating: Star45,
			testimonialText:
				"Clean code, clear explanations, and practical projects. Mosh doesn't just teach syntax - he teaches you how to think like a developer. The C# course helped me get promoted at work. Worth every penny!"
		},
		{
			id: 7,
			authorName: 'Alex Thompson',
			authorImage: '',
			starRating: Star45,
			testimonialText:
				"Clean code, clear explanations, and practical projects. Mosh doesn't just teach syntax - he teaches you how to think like a developer. The C# course helped me get promoted at work. Worth every penny!"
		}
	];

	let visibleCount = 3;
	$: visibleTestimonials = testimonials.slice(0, visibleCount);
	$: hasMore = visibleCount < testimonials.length;

	function showMore() {
		visibleCount = Math.min(visibleCount + 3, testimonials.length);
	}
</script>

<div class="flex max-w-prose flex-col items-center text-center">
	<section class="flex flex-col lg:my-5 lg:mb-10">
		<header class="my-12 mb-6 text-center">
			<p
				class="text-md from-violet-70 to-pink-650 my-4 inline-block bg-gradient-to-r bg-clip-text font-semibold tracking-wide text-transparent"
			>
				{badge}
			</p>
			<h2 class="text-4xl leading-[1.2]">{title}</h2>
		</header>
		<div class="mb-10 flex flex-col items-center gap-2 md:flex-row md:justify-center">
			<div class="flex">
				<span class="mr-1 text-lg font-bold !text-gray-100">Excellent</span><span
					class="mx-2 flex items-center"
					><img
						alt="Stars"
						data-testid="trust-stars"
						fetchpriority="high"
						width="90"
						height="30"
						decoding="async"
						data-nimg="1"
						class="inline"
						src={Star45}
						style="color: transparent;"
					/>
				</span>
			</div>
			<div class="text-[#686868]">
				<span class="mr-1 font-bold">{rating}</span>out of 5 based on
				<a target="_blank" href="https://www.trustpilot.com/review/codewithmosh.com">
					<span class="font-bold">{reviewCount}</span> reviews
				</a>
			</div>
		</div>
		<p class="max-w-[50ch] text-center text-lg font-medium md:text-2xl md:leading-9">
			{description}
		</p>
		<div class="mt-10 text-left">
			<ul class="flex flex-col gap-4">
				{#each visibleTestimonials as testimonial (testimonial.id)}
					<li>
						<TestimonialCard
							authorName={testimonial.authorName}
							authorImage={testimonial.authorImage}
							starRating={testimonial.starRating}
							testimonialText={testimonial.testimonialText}
						/>
					</li>
				{/each}
			</ul>
			{#if hasMore}
				<button
					class="group bg-gray-450 mt-4 inline-block rounded-full px-3 py-1 text-center text-sm font-medium text-white no-underline transition-all duration-200 ease-out hover:bg-gray-500 hover:text-white hover:no-underline md:font-semibold"
					on:click={showMore}
				>
					Show More
				</button>
			{/if}
		</div>
	</section>
</div>
