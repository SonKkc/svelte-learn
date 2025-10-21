<svelte:head>
    <title>Register | Code with Mosh</title>
    <meta name="description" content="Create your account to start your coding journey with premium courses and expert guidance." />
</svelte:head>

<script>
    import { enhance } from '$app/forms';

    let {form} = $props()
</script>

<div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-violet-900/20 to-gray-900 px-4 py-12">
    <div class="w-full max-w-md">
        <!-- Logo/Brand -->
        <div class="text-center mb-8">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-violet-500 rounded-2xl mb-4">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                </svg>
            </div>
            <h1 class="text-3xl font-bold text-white mb-2">Join Code with Mosh</h1>
            <p class="text-gray-400">Create your account to start your coding journey</p>
        </div>

        <!-- Register Form -->
        <div class="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-2xl">
            <!-- Social Register Buttons -->
            <div class="space-y-3 mb-6">
                <button
                    type="button"
                    class="w-full flex items-center justify-center space-x-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold py-3 px-4 rounded-xl transition-all duration-200 hover:scale-105"
                >
                    <svg class="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span>Sign up with Google</span>
                </button>

                <button
                    type="button"
                    class="w-full flex items-center justify-center space-x-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-4 rounded-xl border border-gray-600 transition-all duration-200 hover:scale-105"
                >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd" />
                    </svg>
                    <span>Sign up with GitHub</span>
                </button>
            </div>

            <!-- Divider -->
            <div class="relative my-6">
                <div class="absolute inset-0 flex items-center">
                    <div class="w-full border-t border-gray-600"></div>
                </div>
                <div class="relative flex justify-center text-sm">
                    <span class="px-2 bg-gray-800 text-gray-400">Or sign up with email</span>
                </div>
            </div>

            <!-- Registration Form -->
            <form action="?/create" method="post" class="space-y-5" use:enhance>
                <!-- Email Field -->
                <div class="space-y-2">
                    <label for="email" class="block text-sm font-medium text-gray-300">
                        Email Address
                    </label>
                    {#if form?.message}
                        <p class="text-red-500 text-sm mb-1">{form.message}</p>
                    {/if}
                    <div class="relative">
                        <input
                            name="email"
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200"
                        />
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                            <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <!-- Password Field -->
                <div class="space-y-2">
                    <label for="password" class="block text-sm font-medium text-gray-300">
                        Password
                    </label>
                    <div class="relative">
                        <input
                            name="password"
                            type="password"
                            id="password"
                            placeholder="Create a strong password"
                            class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200"
                        />
                        <button
                            type="button"
                            class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-300"
                        >
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                        </button>
                    </div>
                </div>

                <!-- Confirm Password Field -->
                <div class="space-y-2">
                    <label for="password2" class="block text-sm font-medium text-gray-300">
                        Confirm Password
                    </label>
                    <div class="relative">
                        <input
                            name="password2"
                            type="password"
                            id="password2"
                            placeholder="Confirm your password"
                            class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200"
                        />
                        <button
                            type="button"
                            class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-300"
                        >
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                        </button>
                    </div>
                </div>

                <!-- Terms & Newsletter -->
                <div class="space-y-3">
                    <label class="flex items-start space-x-3 cursor-pointer">
                        <input
                            type="checkbox"
                            class="w-4 h-4 text-violet-500 bg-gray-700 border-gray-600 rounded focus:ring-violet-500 focus:ring-2 mt-0.5"
                        />
                        <span class="text-sm text-gray-300 leading-relaxed">
                            I agree to the 
                            <a href="/terms" class="text-violet-400 hover:text-violet-300 transition-colors">Terms of Service</a>
                            and 
                            <a href="/privacy" class="text-violet-400 hover:text-violet-300 transition-colors">Privacy Policy</a>
                        </span>
                    </label>
                    
                    <label class="flex items-start space-x-3 cursor-pointer">
                        <input
                            type="checkbox"
                            class="w-4 h-4 text-violet-500 bg-gray-700 border-gray-600 rounded focus:ring-violet-500 focus:ring-2 mt-0.5"
                        />
                        <span class="text-sm text-gray-300 leading-relaxed">
                            Send me updates about new courses and special offers
                        </span>
                    </label>
                </div>

                <!-- Submit Button -->
                <button
                    type="submit"
                    class="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
                >
                    <span>Create Account</span>
                </button>
            </form>

            <!-- Sign In Link -->
            <div class="mt-6 text-center">
                <p class="text-gray-400 text-sm">
                    Already have an account? 
                    <a 
                        href="/login" 
                        class="text-violet-400 hover:text-violet-300 font-semibold transition-colors"
                    >
                        Sign in here
                    </a>
                </p>
            </div>
        </div>

        <!-- Additional Info -->
        <div class="mt-8 text-center">
            <p class="text-gray-500 text-xs">
                By creating an account, you'll get access to premium courses, 
                progress tracking, and certificates of completion.
            </p>
        </div>
    </div>
</div>