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