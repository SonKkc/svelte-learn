
function createSlug(title) {
    return title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '') 
        .replace(/[\s_-]+/g, '-') 
        .replace(/^-+|-+$/g, '');
}

function getRandomCategory() {
    const categories = ['frontend', 'backend', 'se'];
    return categories[Math.floor(Math.random() * categories.length)];
}

export async function load({ fetch }) {
    // Default return object
    const defaultReturn = {
        courses: [],
        error: null
    };

    try {
        // Fetch data từ external API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        
        const posts = await response.json();
        
        // Transform data để match với CourseCard props
        const courses = posts.slice(0, 9).map(post => ({
            id: post.id,
            href: `/courses/${createSlug(post.title)}`,
            slug: createSlug(post.title),
            imageSrc: `https://picsum.photos/400/250?random=${post.id}`,
            imageAlt: post.title,
            title: post.title,
            description: post.body.substring(0, 150) + '...',
            category: getRandomCategory(),
            userId: post.userId
        }));
        
        return {
            courses,
            error: null
        };
        
    } catch (error) {
        console.error('Load Error:', error);
        
        return {
            ...defaultReturn,
            error: 'Failed to load courses'
        };
    }
}