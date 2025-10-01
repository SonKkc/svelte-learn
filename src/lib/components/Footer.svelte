<script>
	const policyLinks = [
		{ href: '/terms', label: 'Terms of Use' },
		{ href: '/privacy', label: 'Privacy Policy' }
	];
</script>

<footer class="relative mt-20 overflow-hidden border-t-1 border-t-slate-900 bg-black">
	<div class="text-foreground mx-auto max-w-7xl px-3 py-10 lg:px-6">
		<div class="flex flex-col items-center justify-between space-y-5 md:flex-row md:space-y-0">
			<!-- Left Section -->
			<div class="flex items-center font-medium text-gray-500 hover:text-white">
				<span>© Code with Mosh</span>
			</div>

			<!-- Center Section: Social Icons -->
			<div class="flex flex-row space-x-5 transition-colors duration-150">
				<a
					class="inline-block text-xl text-gray-500 hover:text-white"
					href="https://github.com/directus/directus"
					target="_blank"
					rel="noopener noreferrer"
					aria-labelledby="github"
					><svg class="icon h-[24px] w-[24px]"><use href="#social__github"></use></svg>
				</a>
				<a
					class="inline-block text-xl text-gray-500 hover:text-white"
					href="https://www.linkedin.com/company/directus-io"
					target="_blank"
					rel="noopener noreferrer"
					aria-labelledby="linkedin"
					><svg class="icon h-[24px] w-[24px]"><use href="#social__linkedin"></use></svg>
				</a>
				<a
					class="inline-block text-xl text-gray-500 hover:text-white"
					href="https://www.youtube.com/c/DirectusVideos"
					target="_blank"
					rel="noopener noreferrer"
					aria-labelledby="youtube"
					><svg class="icon h-[24px] w-[24px]"><use href="#social__youtube"></use></svg>
				</a>
				<a
					class="inline-block text-xl text-gray-500 hover:text-white"
					href="https://directus.chat/"
					target="_blank"
					rel="noopener noreferrer"
					aria-labelledby="discord"
					><svg class="icon h-[24px] w-[24px]"><use href="#social__discord"></use></svg>
				</a>
				<a
					class="inline-block text-xl text-gray-500 hover:text-white"
					href="https://x.com/directus"
					target="_blank"
					rel="noopener noreferrer"
					aria-labelledby="x"
					><svg class="icon h-[24px] w-[24px]"><use href="#social__x"></use></svg>
				</a>
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
