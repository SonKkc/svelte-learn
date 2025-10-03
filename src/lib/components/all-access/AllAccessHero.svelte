<script lang="ts">
    export let badge: string;
    export let title: string;
    export let description: string;
</script>

<div class="relative">
    <div class="container mb-6 flex flex-col items-center text-center md:my-6 lg:my-10">
        <div
            class="text-base mb-3 inline-block bg-gradient-to-r from-[#7c3aed] to-[#e879f9] bg-clip-text font-medium text-transparent md:font-semibold"
        >
            {badge}
        </div>
        <h1 class="mb-8 text-4xl leading-[1.2] lg:text-5xl">{title}</h1>
        <p class="max-w-prose text-lg !leading-[1.6] lg:text-2xl">
            {description}
        </p>
    </div>
</div>