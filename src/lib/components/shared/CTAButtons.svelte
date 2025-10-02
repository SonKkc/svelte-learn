<script>
	export let primaryText = 'Browse Courses';
	export let primaryHref = '/courses';
	export let secondaryText = 'Join for Free';
	export let secondaryHref = 'https://sso.teachable.com/secure/146684/identity/sign_up';
	export let showIcon = false;
</script>

<div class="flex flex-col gap-5 md:flex-row">
	<a
		class="group text-md hover:bg-violet-650 undefined inline-block rounded-full bg-violet-500 px-6 py-3 text-center font-medium text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
		role="button"
		href={primaryHref}
	>
		{primaryText}
		{#if showIcon}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				aria-hidden="true"
				class="inline-block h-4 w-6 transition-all duration-200 ease-out group-hover:ml-3"
			>
				<path
					fill-rule="evenodd"
					d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
					clip-rule="evenodd"
				></path>
			</svg>
		{/if}
	</a>

	{#if secondaryText}
		<a
			class="group text-md undefined inline-block rounded-full bg-pink-700 px-6 py-3 text-center font-medium text-white no-underline transition-all duration-200 ease-out hover:bg-pink-600 hover:text-white hover:no-underline md:font-semibold"
			role="button"
			href={secondaryHref}
		>
			{secondaryText}
		</a>
	{/if}
</div>