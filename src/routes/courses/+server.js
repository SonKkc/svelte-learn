import { json } from '@sveltejs/kit';

export async function GET() {
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
            href: `/courses/${post.id}`,
            imageSrc: `https://picsum.photos/400/250?random=${post.id}`,
            imageAlt: post.title,
            title: post.title,
            description: post.body.substring(0, 150) + '...',
            category: getRandomCategory(), // Random category cho demo
            userId: post.userId
        }));
        
        return json({
            success: true,
            data: courses,
            count: courses.length
        });
        
    } catch (error) {
        console.error('API Error:', error);
        
        return json(
            {
                success: false,
                error: 'Failed to fetch courses',
                message: error.message
            },
            { status: 500 }
        );
    }
}

// Helper function để tạo random category
function getRandomCategory() {
    const categories = ['frontend', 'backend', 'se', 'all'];
    return categories[Math.floor(Math.random() * categories.length)];
}

// Optional: POST method để filter courses
export async function POST({ request }) {
    try {
        const { category, search } = await request.json();
        
        // Fetch all courses first
        const coursesResponse = await GET();
        const coursesData = await coursesResponse.json();
        
        if (!coursesData.success) {
            return coursesResponse;
        }
        
        let filteredCourses = coursesData.data;
        
        // Filter by category
        if (category && category !== 'all') {
            filteredCourses = filteredCourses.filter(course => 
                course.category === category
            );
        }
        
        // Filter by search term
        if (search && search.trim()) {
            const searchTerm = search.toLowerCase();
            filteredCourses = filteredCourses.filter(course =>
                course.title.toLowerCase().includes(searchTerm) ||
                course.description.toLowerCase().includes(searchTerm)
            );
        }
        
        return json({
            success: true,
            data: filteredCourses,
            count: filteredCourses.length,
            filters: { category, search }
        });
        
    } catch (error) {
        return json(
            {
                success: false,
                error: 'Failed to filter courses',
                message: error.message
            },
            { status: 500 }
        );
    }
}