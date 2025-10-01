<script>
	import Icon from './Icon.svelte';
	import SvgSprites from './SvgSprites.svelte';

	const policyLinks = [
		{ href: '/terms', label: 'Terms of Use' },
		{ href: '/privacy', label: 'Privacy Policy' }
	];

	const socialLinks = [
		{ name: 'github', href: 'https://github.com/codewithmosh', label: 'GitHub' },
		{ name: 'linkedin', href: 'https://www.linkedin.com/in/codewithmosh', label: 'LinkedIn' },
		{ name: 'youtube', href: 'https://www.youtube.com/c/programmingwithmosh', label: 'YouTube' },
		{ name: 'discord', href: 'https://discord.gg/codewithmosh', label: 'Discord' },
		{ name: 'x', href: 'https://x.com/moshhamedani', label: 'X (Twitter)' }
	];
</script>

<footer class="relative mt-20 overflow-hidden border-t-1 border-t-slate-900 bg-black">
	<!-- SVG Sprites -->
	<SvgSprites />
	
	<div class="text-foreground mx-auto max-w-7xl px-3 py-10 lg:px-6">
		<div class="flex flex-col items-center justify-between space-y-5 md:flex-row md:space-y-0">
			<!-- Left Section -->
			<div class="flex items-center font-medium text-gray-500 hover:text-white">
				<span>© Code with Mosh</span>
			</div>

			<!-- Center Section: Social Icons -->
			<div class="flex flex-row space-x-5 transition-colors duration-150">
				{#each socialLinks as social}
					<a
						class="inline-block text-xl text-gray-500 hover:text-white transition-colors duration-200"
						href={social.href}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={social.label}
					>
						<Icon name={social.name} size="24" />
					</a>
				{/each}
			</div>

			<!-- Right Section -->
			<div class="flex items-center space-x-6">
				{#each policyLinks as link}
					<a href={link.href} class="font-medium text-gray-500 hover:text-white">{link.label}</a>
				{/each}
			</div>
		</div>
	</div>
</footer>
