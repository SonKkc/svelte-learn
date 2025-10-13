import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Get initial cart from localStorage
function getInitialCart() {
    if (browser) {
        const stored = localStorage.getItem('cart');
        return stored ? JSON.parse(stored) : [];
    }
    return [];
}

// Create cart store
export const cart = writable(getInitialCart());

// Subscribe to store changes and save to localStorage
if (browser) {
    cart.subscribe(value => {
        localStorage.setItem('cart', JSON.stringify(value));
    });
}

// Helper functions
export function addToCart(course) {
    cart.update(items => {
        const exists = items.find(item => item.id === course.id);
        if (exists) {
            return items;
        }
        
        return [...items, {
            id: course.id,
            title: course.title,
            slug: course.slug,
            imageSrc: course.imageSrc,
            imageAlt: course.imageAlt,
            price: course.price,
            originalPrice: course.originalPrice,
            instructor: course.instructor,
            category: course.category,
            href: course.href || `/courses/${course.slug}`,
            addedAt: new Date().toISOString()
        }];
    });
}

export function removeFromCart(courseId) {
    cart.update(items => items.filter(item => item.id !== courseId));
}

export function clearCart() {
    cart.set([]);
}