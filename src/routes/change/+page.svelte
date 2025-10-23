<script>
    import { enhance } from "$app/forms";
    import { page } from "$app/state";

    let {form} = $props()
</script>

<svelte:head>
	<title>Login | Code with Mosh</title>
	<meta
		name="description"
		content="Sign in to your account to access premium courses and track your learning progress."
	/>
</svelte:head>

<div
	class="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-violet-900/20 to-gray-900 px-4 py-12"
>
	<div class="w-full max-w-md">
		<!-- Logo/Brand -->
		<div class="mb-8 text-center">
			<div class="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500">
				<svg class="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
					<path
						fill-rule="evenodd"
						d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
			<h1 class="mb-2 text-3xl font-bold text-white">Reset Password</h1>
			<p class="text-gray-400"></p>
		</div>

		<!-- Login Form -->
		<div class="rounded-2xl border border-gray-700 bg-gray-800/50 p-8 shadow-2xl backdrop-blur-sm">

			<!-- Email/Password Form -->
			<form class="space-y-5" action="?/change" method="POST" use:enhance>
                <input type="hidden" name="guid_id" value={page.url.searchParams.get('GUID')} />
				{#if form?.message}
					<p class="mb-1 text-sm !text-red-500">{form.message}</p>
				{/if}

				<div class="space-y-2">
					<label for="password" class="block text-sm font-medium text-gray-300"> Password </label>
					<div class="relative">
						<input
							name="password"
							type="password"
							id="password"
							placeholder="Enter your password"
							class="w-full rounded-xl border border-gray-600 bg-gray-700/50 px-4 py-3 text-white placeholder-gray-400 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-violet-500 focus:outline-none"
						/>
						<button
							type="button"
                            aria-label="show password"
							class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-300"
						>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
								<path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
								<path
									fill-rule="evenodd"
									d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
									clip-rule="evenodd"
								/>
							</svg>
						</button>
					</div>
				</div>

				<!-- Password Field -->
				<div class="space-y-2">
					<label for="password2" class="block text-sm font-medium text-gray-300"> Password </label>
					<div class="relative">
						<input
							name="password2"
							type="password"
							id="password"
							placeholder="Enter your password"
							class="w-full rounded-xl border border-gray-600 bg-gray-700/50 px-4 py-3 text-white placeholder-gray-400 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-violet-500 focus:outline-none"
						/>
						<button
							type="button"
                            aria-label="show password"
							class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-300"
						>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
								<path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
								<path
									fill-rule="evenodd"
									d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
									clip-rule="evenodd"
								/>
							</svg>
						</button>
					</div>
				</div>
				<!-- Submit Button -->
				<button
					type="submit"
					class="w-full rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 px-4 py-3 font-semibold text-white transition-all duration-200 hover:scale-105 hover:from-violet-600 hover:to-purple-700 active:scale-95"
				>
					<span>Submit</span>
				</button>
			</form>
		</div>
	</div>
</div>
