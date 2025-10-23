<script>
	import { enhance } from '$app/forms';
	let { form } = $props();
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
			<h1 class="mb-2 text-3xl font-bold text-white">Welcome Back</h1>
			<p class="text-gray-400">Sign in to continue your learning journey</p>
		</div>

		<!-- Login Form -->
		<div class="rounded-2xl border border-gray-700 bg-gray-800/50 p-8 shadow-2xl backdrop-blur-sm">
			<!-- Social Login Buttons -->
			<div class="mb-6 space-y-3">
				<button
					type="button"
					class="flex w-full items-center justify-center space-x-3 rounded-xl bg-white px-4 py-3 font-semibold text-gray-900 transition-all duration-200 hover:scale-105 hover:bg-gray-100"
				>
					<svg class="h-5 w-5" viewBox="0 0 24 24">
						<path
							fill="#4285F4"
							d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
						/>
						<path
							fill="#34A853"
							d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
						/>
						<path
							fill="#FBBC05"
							d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
						/>
						<path
							fill="#EA4335"
							d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
						/>
					</svg>
					<span>Continue with Google</span>
				</button>

				<button
					type="button"
					class="flex w-full items-center justify-center space-x-3 rounded-xl border border-gray-600 bg-gray-900 px-4 py-3 font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-gray-800"
				>
					<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
						<path
							fill-rule="evenodd"
							d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
							clip-rule="evenodd"
						/>
					</svg>
					<span>Continue with GitHub</span>
				</button>
			</div>

			<!-- Divider -->
			<div class="relative my-6">
				<div class="absolute inset-0 flex items-center">
					<div class="w-full border-t border-gray-600"></div>
				</div>
				<div class="relative flex justify-center text-sm">
					<span class="bg-gray-800 px-2 text-gray-400">Or continue with email</span>
				</div>
			</div>

			<!-- Email/Password Form -->
			<form class="space-y-5" action="?/login" method="POST" use:enhance>
				{#if form?.message}
					<p class="mb-1 text-sm !text-red-500">{form.message}</p>
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

				<!-- Password Field -->
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

				<!-- Remember Me & Forgot Password -->
				<div class="flex items-center justify-between">
					<label class="flex cursor-pointer items-center space-x-2">
						<input
							type="checkbox"
							class="h-4 w-4 rounded border-gray-600 bg-gray-700 text-violet-500 focus:ring-2 focus:ring-violet-500"
						/>
						<span class="text-sm text-gray-300">Remember me</span>
					</label>
					<a href="/forgot" class="text-sm text-violet-400 transition-colors hover:text-violet-300">
						Forgot password?
					</a>
				</div>

				<!-- Submit Button -->
				<button
					type="submit"
					class="w-full rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 px-4 py-3 font-semibold text-white transition-all duration-200 hover:scale-105 hover:from-violet-600 hover:to-purple-700 active:scale-95"
				>
					<span>Sign In</span>
				</button>
			</form>

			<!-- Sign Up Link -->
			<div class="mt-6 text-center">
				<p class="text-sm text-gray-400">
					Don't have an account?
					<a
						href="/register"
						class="font-semibold text-violet-400 transition-colors hover:text-violet-300"
					>
						Sign up here
					</a>
				</p>
			</div>
		</div>

		<!-- Additional Links -->
		<div class="mt-8 text-center">
			<p class="text-xs text-gray-500">
				By signing in, you agree to our
				<a href="/terms" class="text-violet-400 transition-colors hover:text-violet-300"
					>Terms of Service</a
				>
				and
				<a href="/privacy" class="text-violet-400 transition-colors hover:text-violet-300"
					>Privacy Policy</a
				>
			</p>
		</div>
	</div>
</div>
