<script>
	/**
	 * Icon component using SVG sprites
	 * @param {string} name - Icon name (e.g., 'github', 'linkedin')
	 * @param {string} size - Icon size (default: '24')
	 * @param {string} className - Additional CSS classes
	 */
	export let name;
	export let size = '24';
	export let className = '';
</script>

<svg 
	class="fill-current {className}" 
	width={size} 
	height={size} 
	viewBox="0 0 24 24"
	aria-hidden="true"
>
	<use href="#icon-{name}"></use>
</svg>