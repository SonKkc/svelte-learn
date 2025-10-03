<script lang="ts">
    export let title: string;
    export let description: string;
    export let imageSrc: string;
    export let imageAlt: string;
</script>

<div class="flex flex-col items-center text-center">
    <h2>{title}</h2>
    <p class="mt-4 mb-8 max-w-xl text-lg md:text-xl">
        {description}
    </p>
    <img
        alt={imageAlt}
        data-testid="guarantee"
        loading="lazy"
        width="130"
        height="129"
        decoding="async"
        data-nimg="1"
        src={imageSrc}
        style="color: transparent;"
    />
</div>