<script>
	import { enhance } from '$app/forms';
	let { form } = $props();
</script>

<svelte:head>
	<title>Forgot Password | Code with Mosh</title>
	<meta name="description" content="" />
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
			<h1 class="mb-2 text-3xl font-bold text-white">Forgot Password</h1>
			<p class="text-gray-400">Don't worries we'll reset your password</p>
		</div>

		<!-- Forgot Form -->
		<div class="rounded-2xl border border-gray-700 bg-gray-800/50 p-8 shadow-2xl backdrop-blur-sm">
			<!-- Email Form -->
			<form class="space-y-5" action="?/forgot" method="POST" use:enhance>
				{#if form?.message}
					<p class="mb-1 text-sm !text-red-500">{form.message}</p>
				{/if}
                {#if form?.success}
                    <p class="mb-1 text-sm !text-green-500">Your email should receive a password reset email shortly</p>
                {/if}

				<!-- Email Field -->
				<div class="space-y-2">
					<label for="email" class="block text-sm font-medium text-gray-300"> Email Address </label>
					<div class="relative">
						<input
							name="email"
							type="email"
							id="email"
							placeholder="Enter your email"
							class="w-full rounded-xl border border-gray-600 bg-gray-700/50 px-4 py-3 text-white placeholder-gray-400 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-violet-500 focus:outline-none"
						/>
						<div class="absolute inset-y-0 right-0 flex items-center pr-3">
							<svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
								<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
								<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
							</svg>
						</div>
					</div>
				</div>

				<div class="flex items-center justify-between">
					<a href="/login" class="text-sm text-violet-400 transition-colors hover:text-violet-300">
						Return to Login
					</a>
				</div>

				<!-- Submit Button -->
				<button
					type="submit"
					aria-label="send to email"
					class="w-full rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 px-4 py-3 font-semibold text-white transition-all duration-200 hover:scale-105 hover:from-violet-600 hover:to-purple-700 active:scale-95"
				>
					<span>Send to Email</span>
				</button>
			</form>
		</div>
	</div>
</div>
