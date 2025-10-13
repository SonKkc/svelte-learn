import { error } from '@sveltejs/kit';

// Helper function to create slug from title
function createSlug(title) {
    return title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
        .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

// Helper function để tạo random category
function getRandomCategory() {
    const categories = ['frontend', 'backend', 'se'];
    return categories[Math.floor(Math.random() * categories.length)];
}

// Helper function để tạo random instructor
function getRandomInstructor() {
    const instructors = ['Mosh Hamedani', 'John Smith', 'Sarah Johnson', 'Mike Chen', 'Emily Davis'];
    return instructors[Math.floor(Math.random() * instructors.length)];
}

// Helper function để tạo random price
function getRandomPrice() {
    const prices = ['$49.99', '$79.99', '$99.99', '$129.99', '$149.99'];
    const originalPrices = ['$99.99', '$149.99', '$199.99', '$249.99', '$299.99'];
    const index = Math.floor(Math.random() * prices.length);
    return {
        price: prices[index],
        originalPrice: originalPrices[index]
    };
}

export async function load({ params, fetch }) {
    try {
        // Fetch course data from API based on slug
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
            throw new Error('Failed to fetch course');
        }
        
        const posts = await response.json();
        
        // Find course by slug (simulate finding by slug)
        const coursePost = posts.find(post => createSlug(post.title) === params.slug) || posts[0];
        
        if (!coursePost) {
            throw new Error('Course not found');
        }
        
        const pricing = getRandomPrice();
        
        // Transform data to match course detail requirements
        const course = {
            id: coursePost.id,
            slug: params.slug,
            title: coursePost.title,
            description: coursePost.body,
            imageSrc: `https://picsum.photos/800/450?random=${coursePost.id}`,
            imageAlt: coursePost.title,
            category: getRandomCategory(),
            instructor: getRandomInstructor(),
            price: pricing.price,
            originalPrice: pricing.originalPrice,
            rating: (4.0 + Math.random()).toFixed(1),
            students: Math.floor(Math.random() * 50000) + 1000,
            duration: Math.floor(Math.random() * 40) + 5 + ' hours',
            level: ['Beginner', 'Intermediate', 'Advanced'][Math.floor(Math.random() * 3)],
            language: 'English',
            lastUpdated: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toLocaleDateString(),
            href: `/courses/${params.slug}`
        };
        
        // Get related courses
        const relatedCourses = posts.slice(1, 4).map(post => {
            const relatedPricing = getRandomPrice();
            return {
                id: post.id,
                href: `/courses/${createSlug(post.title)}`,
                slug: createSlug(post.title),
                imageSrc: `https://picsum.photos/400/250?random=${post.id}`,
                imageAlt: post.title,
                title: post.title,
                description: post.body.substring(0, 100) + '...',
                category: getRandomCategory(),
                instructor: getRandomInstructor(),
                price: relatedPricing.price,
                originalPrice: relatedPricing.originalPrice
            };
        });
        
        return {
            course,
            relatedCourses
        };
        
    } catch (error) {
        console.error('Load Error:', error);
        throw error;
    }
}