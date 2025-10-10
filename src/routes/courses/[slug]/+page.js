import { error } from '@sveltejs/kit';

// Helper function to create slug from title
function createSlug(title) {
    return title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '') 
        .replace(/[\s_-]+/g, '-') 
        .replace(/^-+|-+$/g, ''); 
}

// Helper function to find course by slug
function findCourseBySlug(courses, targetSlug) {
    return courses.find((course) => {
        const courseSlug = createSlug(course.title);
        return courseSlug === targetSlug;
    });
}

function getRandomCategory() {
    const categories = [
        'Frontend Development',
        'Backend Development',
        'Full Stack',
        'Mobile Development'
    ];
    return categories[Math.floor(Math.random() * categories.length)];
}

export async function load({ params, fetch }) {
    const { slug } = params;
    
    try {
        // Fetch all courses from external API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
            throw error(500, 'Failed to fetch courses');
        }
        
        const posts = await response.json();
        
        // Transform all posts to courses with slugs
        const allCourses = posts.map((post) => ({
            id: post.id,
            title: post.title,
            slug: createSlug(post.title),
            description: post.body,
            fullDescription: `${post.body} This comprehensive course will take you from beginner to advanced level. You'll learn industry best practices, work on real-world projects, and gain the skills needed to succeed in your development career.`,
            imageSrc: `https://picsum.photos/800/400?random=${post.id}`,
            imageAlt: post.title,
            instructor: 'Mosh Hamedani',
            instructorAvatar: 'https://picsum.photos/64/64?random=instructor',
            duration: '8.5 hours',
            lessonsCount: '42 lessons',
            level: 'Beginner to Advanced',
            lastUpdated: 'December 2024',
            rating: 4.8,
            studentsCount: '12,543',
            price: '$89',
            originalPrice: '$129',
            category: getRandomCategory(),
            skills: [
                'Core fundamentals',
                'Best practices',
                'Real-world projects',
                'Industry standards',
                'Problem solving'
            ]
        }));
        
        // Find course by slug
        const course = findCourseBySlug(allCourses, slug);
        
        if (!course) {
            throw error(404, 'Course not found');
        }
        
        // Get related courses (excluding current course)
        const relatedCourses = allCourses
            .filter((c) => c.id !== course.id)
            .slice(0, 3)
            .map((c) => ({
                id: c.id,
                href: `/courses/${c.slug}`,
                imageSrc: `https://picsum.photos/300/200?random=${c.id}`,
                imageAlt: c.title,
                title: c.title,
                description: c.description.substring(0, 100) + '...'
            }));
        
        return {
            course,
            relatedCourses
        };
        
    } catch (err) {
        throw error(500, 'Failed to load course details');
    }
}