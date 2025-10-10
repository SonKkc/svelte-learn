<script>
    import { scale } from 'svelte/transition';
    import CourseCard from '$lib/components/CourseCard.svelte';
    
    export let data;
    
    $: allCourses = data?.courses || [];
    $: error = data?.error || null;
    
    // Client-side filtering state
    let isDropdownOpen = false;
    let selectedOption = 'All courses';
    let selectedCategory = 'all';
    let searchTerm = '';
    
    // Filtered courses (reactive)
    $: filteredCourses = (() => {
        let result = allCourses;
        
        if (selectedCategory !== 'all') {
            result = result.filter(course => course.category === selectedCategory);
        }

        if (searchTerm.trim()) {
            const searchLower = searchTerm.toLowerCase();
            result = result.filter(course =>
                course.title.toLowerCase().includes(searchLower) ||
                course.description.toLowerCase().includes(searchLower)
            );
        }
        
        return result;
    })();

    // Course categories
    const courseCategories = [
        { value: 'all', label: 'All courses' },
        { value: 'frontend', label: 'Frontend development' },
        { value: 'backend', label: 'Backend development' },
        { value: 'se', label: 'Software Engineering Essentials' }
    ];

    // Dropdown functions
    function toggleDropdown() {
        isDropdownOpen = !isDropdownOpen;
    }

    function selectOption(option) {
        selectedOption = option.label;
        selectedCategory = option.value;
        isDropdownOpen = false;
    }

    function handleClickOutside(event) {
        if (!event.target.closest('.dropdown-container')) {
            isDropdownOpen = false;
        }
    }

    // Search functionality (instant filtering)
    function handleSearch(event) {
        searchTerm = event.target.value;
    }

    // Clear filters
    function clearFilters() {
        selectedCategory = 'all';
        selectedOption = 'All courses';
        searchTerm = '';
    }

    $: hasActiveFilters = selectedCategory !== 'all' || searchTerm.trim() !== '';
</script>

<svelte:window on:click={handleClickOutside} />

<svelte:head>
    <title>Courses | Code with Mosh</title>
    <meta name="description" content="Master software development with structured courses designed to make you job-ready." />
</svelte:head>

<div class="py-8">
    <div
        class="container mx-auto mb-6 flex w-full flex-col items-center justify-center text-center md:my-6 lg:my-10"
    >
        <h1 class="mb-8 text-4xl leading-[1.2] lg:text-5xl">Build Real-World Skills</h1>
        <p class="max-w-prose text-lg !leading-[1.6] lg:text-2xl">
            Master software development with structured courses designed to make you job-ready.
        </p>
    </div>
</div>

<div class="container mx-auto">
    <div class="mb-5 flex flex-wrap md:flex-nowrap">
        <div class="mb-5 w-full md:mr-5 lg:w-[33rem]">
            <input
                class="text-muted-foreground placeholder:text-muted-foreground border-gray-850 flex h-10 w-full rounded-md border bg-transparent px-3 py-5 transition-colors duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium hover:border-gray-600 focus:border-white focus:ring-0 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                style="box-shadow: none !important; outline: none !important;"
                placeholder="Search courses..."
                name="search"
                type="text"
                on:input={handleSearch}
                bind:value={searchTerm}
            />
        </div>
        <div class="dropdown-container relative w-auto">
            <button
                class="border-input text-accent border-gray-850 flex w-full items-center justify-between gap-5 rounded-md border px-3 py-2"
                on:click={toggleDropdown}
                type="button"
            >
                {selectedOption}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide-icon lucide lucide-chevron-down size-4 opacity-50"
                    class:rotate-180={isDropdownOpen}
                >
                    <path d="m6 9 6 6 6-6"></path>
                </svg>
            </button>

            {#if isDropdownOpen}
                <div
                    class="bg-black border-gray-850 absolute top-12 left-0 z-50 mt-1 w-full min-w-[290px] overflow-hidden rounded border shadow-md transform transition-all duration-200 ease-out"
                    style="transform-origin: top center;"
                    in:scale={{ duration: 200, start: 0.95, opacity: 0 }}
                    out:scale={{ duration: 150, start: 0.95, opacity: 0 }}
                >
                    <div class="py-1">
                        {#each courseCategories as category}
                            <button
                                class="relative flex w-full text-accent cursor-default items-center py-2 pr-8 pl-3 outline-none select-none hover:bg-violet-500"
                                on:click={() => selectOption(category)}
                            >
                                {category.label}
                                {#if selectedOption === category.label}
                                    <span class="absolute right-2 flex size-3.5 items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="lucide-icon lucide lucide-check size-6 text-violet-500"
                                        >
                                            <path d="M20 6 9 17l-5-5"></path>
                                        </svg>
                                    </span>
                                {/if}
                            </button>
                        {/each}
                    </div>
                </div>
            {/if}

            <input
                name="category"
                aria-hidden="true"
                tabindex="-1"
                style="position: absolute; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px; transform: translateX(-100%);"
            />
        </div>
    </div>
    
    <!-- Filter indicator and clear button -->
    {#if hasActiveFilters}
        <div class="mb-4 flex items-center justify-between rounded-lg bg-gray-800 p-3">
            <div class="flex items-center space-x-2 text-sm">
                <span class="text-gray-400">Active filters:</span>
                {#if selectedCategory !== 'all'}
                    <span class="rounded bg-violet-500 px-2 py-1 text-white">
                        {courseCategories.find(cat => cat.value === selectedCategory)?.label}
                    </span>
                {/if}
                {#if searchTerm.trim()}
                    <span class="rounded bg-blue-500 px-2 py-1 text-white">
                        "{searchTerm}"
                    </span>
                {/if}
            </div>
            <button
                class="text-sm text-violet-400 hover:text-violet-300"
                on:click={clearFilters}
            >
                Clear all
            </button>
        </div>
    {/if}
    
    <div class="flex flex-col items-center">
        {#if error}
            <!-- Error state -->
            <div class="mt-10 flex flex-col items-center">
                <div class="text-red-500 text-lg mb-4">Error: {error}</div>
                <button 
                    class="px-4 py-2 bg-violet-500 text-white rounded hover:bg-violet-600"
                    on:click={() => window.location.reload()}
                >
                    Try Again
                </button>
            </div>
        {:else if filteredCourses.length === 0 && allCourses.length > 0}
            <!-- No results state -->
            <div class="mt-10 flex flex-col items-center">
                <div class="text-gray-400 text-lg mb-4">No courses found</div>
                <p class="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
                <button
                    class="px-4 py-2 bg-violet-500 text-white rounded hover:bg-violet-600"
                    on:click={clearFilters}
                >
                    Show all courses
                </button>
            </div>
        {:else if allCourses.length === 0}
            <!-- Loading or no data state -->
            <div class="mt-10 flex flex-col items-center">
                <div class="text-gray-400 text-lg mb-4">No courses available</div>
                <button 
                    class="px-4 py-2 bg-violet-500 text-white rounded hover:bg-violet-600"
                    on:click={() => window.location.reload()}
                >
                    Reload
                </button>
            </div>
        {:else}
            <!-- Courses grid -->
            <div class="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {#each filteredCourses as course, index}
                    <CourseCard
                        href={course.href}
                        imageSrc={course.imageSrc}
                        imageAlt={course.imageAlt}
                        title={course.title}
                        description={course.description}
                    />
                {/each}
            </div>
            
            <!-- Results info -->
            <div class="mt-8 text-center text-gray-400">
                Showing {filteredCourses.length} of {allCourses.length} course{allCourses.length === 1 ? '' : 's'}
                {#if hasActiveFilters}
                    <span class="text-violet-400">(filtered)</span>
                {/if}
            </div>
        {/if}
    </div>
</div>
