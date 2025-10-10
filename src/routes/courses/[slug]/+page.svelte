<script>
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import CourseCard from '$lib/components/CourseCard.svelte';
    
    // Get data from load function
    export let data;
    
    $: ({ course, relatedCourses } = data);
    
    let expandedModules = new Set();
    
    const courseModules = [
        {
            id: 1,
            title: 'Getting Started',
            lessons: [
                { id: 1, title: 'Introduction', duration: '5:30', completed: false },
                { id: 2, title: 'Setting Up Development Environment', duration: '12:45', completed: false },
                { id: 3, title: 'Your First Project', duration: '18:20', completed: false }
            ]
        },
        {
            id: 2,
            title: 'Core Concepts',
            lessons: [
                { id: 4, title: 'Understanding the Fundamentals', duration: '25:15', completed: false },
                { id: 5, title: 'Working with Components', duration: '22:30', completed: false },
                { id: 6, title: 'State Management', duration: '19:45', completed: false }
            ]
        },
        {
            id: 3,
            title: 'Advanced Topics',
            lessons: [
                { id: 7, title: 'Advanced Patterns', duration: '28:10', completed: false },
                { id: 8, title: 'Performance Optimization', duration: '24:35', completed: false },
                { id: 9, title: 'Deployment', duration: '16:50', completed: false }
            ]
        }
    ];
    
    function enrollInCourse() {
        alert(`Enrolling in: ${course.title}`);
    }
    
    function addToWishlist() {
        alert(`Added "${course.title}" to wishlist`);
    }
    
    // Toggle module expansion
    function toggleModule(moduleId) {
        if (expandedModules.has(moduleId)) {
            expandedModules.delete(moduleId);
        } else {
            expandedModules.add(moduleId);
        }
        expandedModules = expandedModules; // Trigger reactivity
    }
</script>

<svelte:head>
    <title>{course.title} | Code with Mosh</title>
    <meta name="description" content={course.description} />
</svelte:head>

<!-- Course detail content -->
<div class="min-h-screen py-8">
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-violet-900/20 to-pink-900/20 py-16">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
                <!-- Course Info -->
                <div>
                    <!-- Breadcrumb -->
                    <nav class="mb-4 text-sm">
                        <a href="/courses" class="text-violet-400 hover:text-violet-300">Courses</a>
                        <span class="mx-2 text-gray-400">›</span>
                        <span class="text-gray-300">{course.category}</span>
                        <span class="mx-2 text-gray-400">›</span>
                        <span class="text-gray-400">{course.title}</span>
                    </nav>

                    <h1 class="mb-4 text-4xl leading-tight font-bold lg:text-5xl">{course.title}</h1>
                    <p class="mb-6 text-xl text-gray-300">{course.description}</p>

                    <!-- Course Meta -->
                    <div class="mb-6 flex flex-wrap gap-4">
                        <div class="flex items-center space-x-2">
                            <svg class="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                            </svg>
                            <span class="font-semibold">{course.rating}</span>
                            <span class="text-gray-400">({course.studentsCount} students)</span>
                        </div>
                        <div class="text-gray-400">
                            {course.duration} • {course.lessonsCount}
                        </div>
                        <div class="text-gray-400">
                            {course.level}
                        </div>
                    </div>

                    <!-- Instructor -->
                    <div class="mb-6 flex items-center space-x-3">
                        <img
                            src={course.instructorAvatar}
                            alt={course.instructor}
                            class="h-12 w-12 rounded-full"
                        />
                        <div>
                            <p class="font-semibold">Created by</p>
                            <p class="text-violet-400">{course.instructor}</p>
                        </div>
                    </div>

                    <!-- Price and CTA -->
                    <div class="mb-6 flex items-center space-x-4">
                        <span class="text-3xl font-bold text-green-400">{course.price}</span>
                        <span class="text-lg text-gray-400 line-through">{course.originalPrice}</span>
                        <span class="rounded bg-green-600 px-2 py-1 text-sm text-white">31% off</span>
                    </div>

                    <div class="flex flex-col gap-3 sm:flex-row">
                        <button
                            class="rounded-full bg-violet-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-violet-600"
                            on:click={enrollInCourse}
                        >
                            Enroll Now
                        </button>
                        <button
                            class="rounded-full border border-gray-600 px-8 py-3 font-semibold text-white transition-colors hover:border-gray-500"
                            on:click={addToWishlist}
                        >
                            Add to Wishlist
                        </button>
                    </div>
                </div>

                <!-- Course Image -->
                <div class="lg:order-last">
                    <img src={course.imageSrc} alt={course.imageAlt} class="w-full rounded-lg shadow-2xl" />
                </div>
            </div>
        </div>
    </div>

    <!-- Course Content -->
    <div class="container mx-auto px-4 py-16">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <!-- Main Content -->
            <div class="lg:col-span-2">
                <!-- What you'll learn -->
                <section class="mb-12">
                    <h2 class="mb-6 text-2xl font-bold">What you'll learn</h2>
                    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {#each course.skills as skill}
                            <div class="flex items-start space-x-3">
                                <svg
                                    class="mt-0.5 h-5 w-5 text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                                <span>{skill}</span>
                            </div>
                        {/each}
                    </div>
                </section>

                <!-- Course Description -->
                <section class="mb-12">
                    <h2 class="mb-6 text-2xl font-bold">Course Description</h2>
                    <div class="prose max-w-none prose-invert">
                        <p class="leading-relaxed text-gray-300">{course.fullDescription}</p>
                    </div>
                </section>

                <!-- Course Content -->
                <section class="mb-12">
                    <h2 class="mb-6 text-2xl font-bold">Course Content</h2>
                    <div class="space-y-4">
                        {#each courseModules as module, moduleIndex}
                            <div class="rounded-lg border border-gray-700">
                                <button
                                    class="hover:bg-gray-750 w-full rounded-t-lg bg-gray-800 px-6 py-4 text-left transition-colors"
                                    on:click={() => toggleModule(module.id)}
                                >
                                    <div class="flex items-center justify-between">
                                        <h3 class="font-semibold">Module {moduleIndex + 1}: {module.title}</h3>
                                        <div class="flex items-center space-x-4">
                                            <span class="text-sm text-gray-400">{module.lessons.length} lessons</span>
                                            <svg
                                                class="h-5 w-5 transform transition-transform {expandedModules.has(
                                                    module.id
                                                )
                                                    ? 'rotate-180'
                                                    : ''}"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </button>
                                {#if expandedModules.has(module.id)}
                                    <div class="px-6 pb-4">
                                        {#each module.lessons as lesson}
                                            <div
                                                class="flex items-center justify-between border-b border-gray-700 py-2 last:border-b-0"
                                            >
                                                <div class="flex items-center space-x-3">
                                                    <svg
                                                        class="h-4 w-4 text-gray-400"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                            clip-rule="evenodd"
                                                        />
                                                    </svg>
                                                    <span class="text-sm">{lesson.title}</span>
                                                </div>
                                                <span class="text-sm text-gray-400">{lesson.duration}</span>
                                            </div>
                                        {/each}
                                    </div>
                                {/if}
                            </div>
                        {/each}
                    </div>
                </section>
            </div>

            <!-- Sidebar -->
            <div class="lg:col-span-1">
                <div class="sticky top-8">
                    <!-- Course Card -->
                    <div class="mb-8 rounded-lg bg-gray-800 p-6">
                        <img src={course.imageSrc} alt={course.imageAlt} class="mb-4 w-full rounded-lg" />
                        <div class="text-center">
                            <div class="mb-4 flex items-center justify-center space-x-2">
                                <span class="text-2xl font-bold text-green-400">{course.price}</span>
                                <span class="text-lg text-gray-400 line-through">{course.originalPrice}</span>
                            </div>
                            <button
                                class="mb-3 w-full rounded-full bg-violet-500 py-3 font-semibold text-white transition-colors hover:bg-violet-600"
                                on:click={enrollInCourse}
                            >
                                Enroll Now
                            </button>
                            <button
                                class="w-full rounded-full border border-gray-600 py-3 font-semibold text-white transition-colors hover:border-gray-500"
                                on:click={addToWishlist}
                            >
                                Add to Wishlist
                            </button>
                        </div>
                    </div>

                    <!-- Course Info -->
                    <div class="rounded-lg bg-gray-800 p-6">
                        <h3 class="mb-4 font-bold">Course Info</h3>
                        <div class="space-y-3 text-sm">
                            <div class="flex justify-between">
                                <span class="text-gray-400">Duration:</span>
                                <span>{course.duration}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-400">Lessons:</span>
                                <span>{course.lessonsCount}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-400">Level:</span>
                                <span>{course.level}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-400">Category:</span>
                                <span>{course.category}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-400">Last Updated:</span>
                                <span>{course.lastUpdated}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Related Courses -->
    {#if relatedCourses.length > 0}
        <div class="bg-background py-16">
            <div class="container mx-auto px-4">
                <h2 class="mb-8 text-center text-3xl font-bold">More Courses You Might Like</h2>
                <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {#each relatedCourses as relatedCourse}
                        <CourseCard
                            href={relatedCourse.href}
                            imageSrc={relatedCourse.imageSrc}
                            imageAlt={relatedCourse.imageAlt}
                            title={relatedCourse.title}
                            description={relatedCourse.description}
                        />
                    {/each}
                </div>
            </div>
        </div>
    {/if}
</div>
