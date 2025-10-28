<script lang="ts">
	import CTAButtons from '$lib/components/shared/CTAButtons.svelte';
	import HeroSection from '$lib/components/home/HeroSection.svelte';
    import IntroSection from '$lib/components/home/IntroSection.svelte';
    import FeaturesSection from '$lib/components/home/FeaturesSection.svelte';
	import TestimonialsSection from '$lib/components/home/TestimonialsSection.svelte';
</script>

<HeroSection />

<div class="container">
	<IntroSection />
</div>

<FeaturesSection />

<TestimonialsSection />
