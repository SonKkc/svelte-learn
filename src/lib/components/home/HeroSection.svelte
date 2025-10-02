<script>
	import CTAButtons from '$lib/components/shared/CTAButtons.svelte';

	export let title = 'Build AI-Powered Apps';
	export let description = 'A brand-new course that shows you how to bring AI into your applications with modern tools and real projects.';
	export let videoSrc = 'https://cdn.codewithmosh.com/video/upload/v1755631699/promo-videos/build-ai-powered-apps.mp4';
	export let videoPoster = 'https://res.cloudinary.com/codewithmosh/image/upload/f_auto,q_auto/v1/covers/build-ai-powered-apps-teaser-cover';
	export let ctaText = 'Learn More';
	export let ctaHref = '/p/build-ai-powered-apps';
	export let showIcon = true;
</script>

<section class="flex flex-col lg:my-5 lg:mb-10">
	<header class="p-5 text-center lg:mb-6">
		<h1
			class="text-5xl leading-[1.12] font-bold text-white md:font-extrabold lg:text-[3.9rem] lg:leading-[1.15]"
		>
			{title}
		</h1>
	</header>
	<div class="container">
		<div class="flex flex-col items-center">
			<p class="mb-10 max-w-[50ch] text-center text-xl font-medium md:leading-9 lg:text-2xl">
				{description}
			</p>
			<div class="mb-5 max-w-4xl">
				<video
					controls
					src={videoSrc}
					poster={videoPoster}
				>
					<track kind="captions" srclang="en" label="English" src="data:text/vtt,WEBVTT" default />
				</video>
			</div>
			<CTAButtons 
				primaryText={ctaText}
				primaryHref={ctaHref}
				secondaryText=""
				showIcon={showIcon}
			/>
		</div>
	</div>
</section>