<script lang="ts">
	export let name: string;
	export let size: string | number = '24';
	export let className = '';
</script>

<svg
	class="fill-current {className}"
	width={size}
	height={size}
	role="img"
	aria-label={name}
>
	<use href="#icon-{name}" />
</svg>