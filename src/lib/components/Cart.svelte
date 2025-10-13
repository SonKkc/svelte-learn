<script>
	import { cart, removeFromCart, clearCart } from '$lib/stores/cart';
	import { fly } from 'svelte/transition';
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	export let isOpen = false;

	let cartElement;

	$: cartItems = $cart;
	$: totalValue = cartItems.reduce((sum, item) => {
		const price = parseFloat(item.price.replace('$', ''));
		return sum + price;
	}, 0);

	function handleRemove(courseId) {
		removeFromCart(courseId);
	}

	function handleClearAll() {
		if (confirm('Are you sure you want to clear your entire cart?')) {
			clearCart();
		}
	}

	function closeCart() {
		isOpen = false;
	}

	function handleClickOutside(event) {
		// Close cart if clicked outside
		if (cartElement && !cartElement.contains(event.target) && isOpen) {
			closeCart();
		}
	}

	function handleKeydown(event) {
		// Close cart when pressing Escape key
		if (event.key === 'Escape' && isOpen) {
			closeCart();
		}
	}

	// Add click outside listener when cart is open (browser only)
	$: if (browser && isOpen) {
		// Add small delay to prevent immediate closing when cart button is clicked
		setTimeout(() => {
			if (isOpen) {
				document.addEventListener('click', handleClickOutside);
			}
		}, 10);
	} else if (browser) {
		document.removeEventListener('click', handleClickOutside);
	}

	// Cleanup event listener on component destroy
	onDestroy(() => {
		if (browser) {
			document.removeEventListener('click', handleClickOutside);
		}
	});

	function handleCheckout() {
		alert(
			`Proceeding to checkout with ${cartItems.length} items (Total: $${totalValue.toFixed(2)})`
		);
	}
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
	<!-- Cart Modal - Direct Display -->
	<div
		class="absolute top-full right-0 z-50 mt-2 max-h-[85vh] w-full max-w-5xl overflow-hidden rounded-xl border border-gray-700 bg-gray-900 shadow-2xl"
		transition:fly={{ duration: 400, y: 30, opacity: 0 }}
		role="dialog"
		aria-modal="true"
		aria-labelledby="cart-title"
	>
		<!-- Header -->
		<div class="flex items-center justify-between border-b border-gray-700 bg-gray-800 px-6 py-4">
			<div class="flex items-center space-x-3">
				<div class="rounded-full bg-violet-500 p-2">
					<svg class="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
						<path
							d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
						/>
					</svg>
				</div>
				<div>
					<h2 id="cart-title" class="text-xl font-bold text-white">Shopping Cart</h2>
					<p class="text-sm text-gray-400">
						{cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart
					</p>
				</div>
			</div>
			<button
				class="rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
				on:click={closeCart}
				aria-label="Close cart"
			>
				<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
					<path
						fill-rule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
		</div>

		<!-- Content -->
		<div class="flex flex-1 overflow-hidden">
			{#if cartItems.length === 0}
				<!-- Empty State - Centered -->
				<div class="flex w-full flex-col items-center justify-center px-8 py-16 text-center">
					<div class="mb-6 rounded-full bg-gray-800 p-6">
						<svg class="h-16 w-16 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
							<path
								d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
							/>
						</svg>
					</div>
					<h3 class="mb-3 text-2xl font-bold text-white">Your cart is empty</h3>
					<p class="mb-8 max-w-md text-gray-400">
						Discover amazing courses and start your learning journey today!
					</p>
					<button
						class="rounded-full bg-violet-500 px-8 py-3 font-semibold text-white transition-all hover:scale-105 hover:bg-violet-600"
						on:click={closeCart}
					>
						Browse Courses
					</button>
				</div>
			{:else}
				<!-- Cart Items - Scrollable Content -->
				<div class="flex w-full flex-col">
					<!-- Items List -->
					<div class="flex-1 overflow-y-auto px-6 py-4">
						<div class="space-y-4">
							{#each cartItems as item (item.id)}
								<div
									class="group hover:bg-gray-750 rounded-lg border border-gray-700 bg-gray-800 p-4 transition-all hover:border-violet-500"
									transition:fly={{ duration: 300, x: -20 }}
								>
									<div class="flex flex-col gap-4 sm:flex-row">
										<!-- Course Image -->
										<div class="flex-shrink-0">
											<a href={item.href} class="block overflow-hidden rounded-lg">
												<img
													src={item.imageSrc}
													alt={item.imageAlt}
													class="h-24 w-full object-cover transition-transform group-hover:scale-105 sm:h-20 sm:w-32"
												/>
											</a>
										</div>

										<!-- Course Info -->
										<div class="min-w-0 flex-1">
											<a href={item.href} class="block">
												<h3
													class="mb-2 line-clamp-2 font-semibold text-white transition-colors group-hover:text-violet-400"
												>
													{item.title}
												</h3>
											</a>
											<p class="mb-2 text-sm text-gray-400">by {item.instructor}</p>
											<div class="flex flex-wrap items-center gap-2">
												<span
													class="bg-opacity-20 rounded-full bg-violet-500 px-3 py-1 text-xs font-medium text-violet-300"
												>
													{item.category}
												</span>
												<span class="text-xs text-gray-500">
													Added {new Date(item.addedAt).toLocaleDateString()}
												</span>
											</div>
										</div>

										<!-- Price & Actions -->
										<div
											class="flex flex-row items-center justify-between sm:flex-col sm:items-end"
										>
											<div class="text-right">
												<div class="text-xl font-bold text-green-400">{item.price}</div>
												{#if item.originalPrice}
													<div class="text-sm text-gray-500 line-through">{item.originalPrice}</div>
												{/if}
											</div>
											<div class="flex gap-2 sm:mt-3">
												<a
													href={item.href}
													class="rounded-lg bg-gray-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-500"
												>
													View
												</a>
												<button
													class="rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white transition-all hover:scale-105 hover:bg-red-700"
													on:click={() => handleRemove(item.id)}
													aria-label="Remove {item.title} from cart"
												>
													<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
														<path
															fill-rule="evenodd"
															d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
															clip-rule="evenodd"
														/>
													</svg>
												</button>
											</div>
										</div>
									</div>
								</div>
							{/each}
						</div>
					</div>

					<!-- Footer - Sticky -->
					<div class="border-t border-gray-700 bg-gray-800 px-6 py-4">
						<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
							<!-- Total -->
							<div class="text-center sm:text-left">
								<p class="text-2xl font-bold text-white">
									Total: <span class="text-green-400">${totalValue.toFixed(2)}</span>
								</p>
								<p class="text-sm text-gray-400">{cartItems.length} courses in cart</p>
							</div>

							<!-- Actions -->
							<div class="flex flex-col gap-3 sm:flex-row">
								<button
									class="rounded-lg border border-gray-600 px-6 py-3 font-semibold text-white transition-all hover:border-gray-500 hover:bg-gray-700"
									on:click={handleClearAll}
								>
									Clear Cart
								</button>
								<button
									class="rounded-lg bg-gradient-to-r from-green-600 to-green-500 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:from-green-700 hover:to-green-600"
									on:click={handleCheckout}
								>
									Checkout Now
								</button>
							</div>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
{/if}

<style>
	.line-clamp-2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
