<script>
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import CourseCard from '$lib/components/CourseCard.svelte';
    import { cart, addToCart, removeFromCart } from '$lib/stores/cart';
    
    // Get data from load function
    export let data;
    
    $: ({ course, relatedCourses } = data);
    $: isInCart = $cart.some(item => item.id === course.id);
    
    // Course modules data
    const courseModules = [
        {
            id: 1,
            title: 'Getting Started',
            lessons: [
                'Introduction to the Course',
                'Setting up Development Environment',
                'First Steps',
                'Course Resources'
            ]
        },
        {
            id: 2,
            title: 'Fundamentals',
            lessons: [
                'Core Concepts',
                'Basic Syntax',
                'Working with Variables',
                'Control Structures',
                'Functions and Methods'
            ]
        },
        {
            id: 3,
            title: 'Advanced Topics',
            lessons: [
                'Advanced Patterns',
                'Best Practices',
                'Performance Optimization',
                'Error Handling',
                'Testing Strategies'
            ]
        },
        {
            id: 4,
            title: 'Real-World Projects',
            lessons: [
                'Project Planning',
                'Building the Application',
                'Database Integration',
                'Deployment',
                'Maintenance and Updates'
            ]
        }
    ];
    
    let expandedModules = new Set();
    
    function toggleModule(moduleId) {
        expandedModules = new Set(expandedModules);
        if (expandedModules.has(moduleId)) {
            expandedModules.delete(moduleId);
        } else {
            expandedModules.add(moduleId);
        }
    }
    
    function enrollInCourse() {
        alert(`Enrolling in: ${course.title}`);
        // Implement enrollment logic here
    }
    
    function handleCartToggle() {
        if (isInCart) {
            removeFromCart(course.id);
        } else {
            addToCart(course);
        }
    }
    
    function goBackToCourses() {
        goto('/courses');
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
                    <nav class="mb-6 text-sm">
                        <div class="flex items-center space-x-2 text-gray-400">
                            <button 
                                on:click={goBackToCourses}
                                class="hover:text-violet-400 transition-colors"
                            >
                                Courses
                            </button>
                            <span>/</span>
                            <span class="text-gray-300">{course.category}</span>
                            <span>/</span>
                            <span class="text-white">{course.title}</span>
                        </div>
                    </nav>

                    <!-- Course Title -->
                    <h1 class="mb-4 text-4xl font-bold text-white lg:text-5xl">
                        {course.title}
                    </h1>

                    <!-- Course Meta -->
                    <div class="mb-6 flex flex-wrap items-center gap-4 text-sm text-gray-300">
                        <div class="flex items-center space-x-1">
                            <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span>{course.rating}</span>
                        </div>
                        <span>•</span>
                        <span>{course.students.toLocaleString()} students</span>
                        <span>•</span>
                        <span>{course.duration}</span>
                        <span>•</span>
                        <span>{course.level}</span>
                    </div>

                    <!-- Instructor -->
                    <div class="mb-6 flex items-center space-x-3">
                        <img 
                            src={`https://i.pravatar.cc/60?u=${course.instructor}`} 
                            alt={course.instructor}
                            class="h-12 w-12 rounded-full"
                        />
                        <div>
                            <p class="text-sm text-gray-400">Created by</p>
                            <p class="font-semibold text-white">{course.instructor}</p>
                        </div>
                    </div>

                    <!-- Pricing -->
                    <div class="mb-8 flex items-center space-x-4">
                        <span class="text-3xl font-bold text-green-400">{course.price}</span>
                        <span class="text-xl text-gray-400 line-through">{course.originalPrice}</span>
                        <span class="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold text-white">
                            50% OFF
                        </span>
                    </div>

                    <!-- CTA Buttons -->
                    <div class="flex flex-col gap-3 sm:flex-row">
                        <button
                            class="rounded-full bg-violet-500 px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-violet-600 hover:scale-105 active:scale-95"
                            on:click={enrollInCourse}
                        >
                            Enroll Now
                        </button>
                        
                        <!-- Simple Cart Button -->
                        <button
                            class="flex items-center justify-center space-x-2 rounded-full px-8 py-3 font-semibold {isInCart 
                                ? 'border-2 border-green-600 bg-green-600 text-white hover:bg-green-700' 
                                : 'border-2 border-gray-600 text-white hover:border-violet-500'}"
                            on:click={handleCartToggle}
                        >
                            <!-- Icon -->
                            {#if isInCart}
                                <svg 
                                    class="w-5 h-5" 
                                    fill="currentColor" 
                                    viewBox="0 0 20 20"
                                >
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                            {:else}
                                <svg 
                                    class="w-5 h-5" 
                                    fill="currentColor" 
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                            {/if}
                            
                            <!-- Text -->
                            <span>
                                {isInCart ? 'In Cart' : 'Add to Cart'}
                            </span>
                        </button>
                    </div>
                </div>

                <!-- Course Image -->
                <div class="order-first lg:order-last">
                    <img 
                        src={course.imageSrc} 
                        alt={course.imageAlt}
                        class="w-full rounded-lg shadow-2xl"
                    />
                </div>
            </div>
        </div>
    </div>

    <!-- Course Content -->
    <div class="container mx-auto px-4 py-16">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <!-- Main Content -->
            <div class="lg:col-span-2">
                <!-- Course Description -->
                <section class="mb-12">
                    <h2 class="mb-6 text-3xl font-bold text-white">About This Course</h2>
                    <div class="prose prose-lg prose-invert max-w-none">
                        <p class="text-gray-300 leading-relaxed">
                            {course.description}
                        </p>
                        <p class="text-gray-300 leading-relaxed">
                            This comprehensive course will take you from beginner to advanced level, covering all the essential concepts and practical applications. You'll build real-world projects and gain hands-on experience that will prepare you for your career.
                        </p>
                    </div>
                </section>

                <!-- Course Curriculum -->
                <section class="mb-12">
                    <h2 class="mb-6 text-3xl font-bold text-white">Course Curriculum</h2>
                    <div class="space-y-4">
                        {#each courseModules as module}
                            <div class="rounded-lg border border-gray-700 bg-gray-800">
                                <button
                                    class="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-750"
                                    on:click={() => toggleModule(module.id)}
                                >
                                    <div>
                                        <h3 class="text-lg font-semibold text-white">{module.title}</h3>
                                        <p class="text-sm text-gray-400">{module.lessons.length} lessons</p>
                                    </div>
                                    <svg 
                                        class="h-5 w-5 text-gray-400 transition-transform {expandedModules.has(module.id) ? 'rotate-180' : ''}" 
                                        fill="currentColor" 
                                        viewBox="0 0 20 20"
                                    >
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                                
                                {#if expandedModules.has(module.id)}
                                    <div 
                                        class="border-t border-gray-700 px-6 pb-6"
                                    >
                                        <ul class="mt-4 space-y-3">
                                            {#each module.lessons as lesson}
                                                <li class="flex items-center space-x-3">
                                                    <svg class="h-4 w-4 text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                                                    </svg>
                                                    <span class="text-gray-300">{lesson}</span>
                                                </li>
                                            {/each}
                                        </ul>
                                    </div>
                                {/if}
                            </div>
                        {/each}
                    </div>
                </section>

                <!-- What You'll Learn -->
                <section class="mb-12">
                    <h2 class="mb-6 text-3xl font-bold text-white">What You'll Learn</h2>
                    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {#each ['Master the fundamentals', 'Build real-world projects', 'Industry best practices', 'Advanced techniques', 'Problem-solving skills', 'Professional development'] as item}
                            <div class="flex items-start space-x-3">
                                <svg class="mt-1 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                <span class="text-gray-300">{item}</span>
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
                                class="mb-3 w-full rounded-full bg-violet-500 py-3 font-semibold text-white transition-all duration-300 hover:bg-violet-600 hover:scale-105 active:scale-95"
                                on:click={enrollInCourse}
                            >
                                Enroll Now
                            </button>
                            
                            <!-- Sidebar Cart Button (same animation as hero) -->
                            <button
                                class="group relative w-full overflow-hidden rounded-full py-3 font-semibold transition-all duration-500 ease-out {isInCart 
                                    ? 'bg-green-600 text-white border-2 border-green-600 hover:bg-green-700 hover:border-green-700' 
                                    : 'border-2 border-gray-600 text-white hover:border-violet-500 hover:bg-violet-500/10'} 
                                    active:scale-95"
                                on:click={handleCartToggle}
                            >
                                <!-- Background animation -->
                                <div class="absolute inset-0 rounded-full transition-all duration-500 {isInCart 
                                    ? 'bg-gradient-to-r from-green-600 to-green-500' 
                                    : 'bg-gradient-to-r from-transparent to-transparent group-hover:from-violet-500/20 group-hover:to-pink-500/20'}">
                                </div>
                                
                                <!-- Content wrapper -->
                                <div class="relative flex items-center justify-center space-x-2">
                                    <!-- Icon with smooth transition -->
                                    <div class="transition-transform duration-300">
                                        {#if isInCart}
                                            <svg 
                                                class="w-5 h-5" 
                                                fill="currentColor" 
                                                viewBox="0 0 20 20"
                                            >
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        {:else}
                                            <svg 
                                                class="w-5 h-5" 
                                                fill="currentColor" 
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                            </svg>
                                        {/if}
                                    </div>
                                    
                                    <!-- Text with smooth transition -->
                                    <span class="transition-all duration-300">
                                        {#if isInCart}
                                            <span>
                                                In Cart
                                            </span>
                                        {:else}
                                            <span>
                                                Add to Cart
                                            </span>
                                        {/if}
                                    </span>
                                </div>
                            </button>
                        </div>
                    </div>

                    <!-- Course Info -->
                    <div class="rounded-lg bg-gray-800 p-6">
                        <h3 class="mb-4 text-lg font-semibold text-white">Course Information</h3>
                        <div class="space-y-3">
                            <div class="flex justify-between">
                                <span class="text-gray-400">Duration:</span>
                                <span class="text-white">{course.duration}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-400">Level:</span>
                                <span class="text-white">{course.level}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-400">Language:</span>
                                <span class="text-white">{course.language}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-400">Last Updated:</span>
                                <span class="text-white">{course.lastUpdated}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-400">Students:</span>
                                <span class="text-white">{course.students.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Related Courses -->
    {#if relatedCourses && relatedCourses.length > 0}
        <div class="bg-background py-16">
            <div class="container mx-auto px-4">
                <h2 class="mb-12 text-center text-3xl font-bold text-white">Related Courses</h2>
                <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {#each relatedCourses as relatedCourse}
                        <CourseCard
                            id={relatedCourse.id}
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
