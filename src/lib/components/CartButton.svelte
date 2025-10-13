<script>
    import { cart } from '$lib/stores/cart';
    import Cart from '$lib/components/Cart.svelte';
    
    let showCart = false;
    
    $: cartCount = $cart.length;
    
    function toggleCart() {
        showCart = !showCart;
    }
</script>

<!-- Cart Button -->
<button 
    class="relative p-2 text-gray-300 hover:text-white transition-colors"
    on:click={toggleCart}
    title="Shopping Cart"
>
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </svg>
    {#if cartCount > 0}
        <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
            {cartCount}
        </span>
    {/if}
</button>

<!-- Cart Modal -->
<Cart bind:isOpen={showCart} />