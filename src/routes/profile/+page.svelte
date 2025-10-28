<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	// Mock data for courses - in production, this should come from the server
	const purchasedCourses = [
		{
			id: 1,
			title: 'Advanced SvelteKit Development',
			image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400',
			progress: 75,
			totalLessons: 24,
			completedLessons: 18
		},
		{
			id: 2,
			title: 'JavaScript Mastery Course',
			image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400',
			progress: 45,
			totalLessons: 32,
			completedLessons: 14
		},
		{
			id: 3,
			title: 'TypeScript Fundamentals',
			image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400',
			progress: 100,
			totalLessons: 20,
			completedLessons: 20
		}
	];

	const learningStats = {
		totalCourses: 3,
		completedCourses: 1,
		inProgressCourses: 2,
		totalHours: 42
	};
</script>

<svelte:head>
	<title>Profile - {data.user?.email || 'User'}</title>
</svelte:head>

<div class="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
	<div class="container mx-auto max-w-7xl">
		<!-- Profile Header -->
		<div class="bg-card rounded-2xl border border-gray-850 p-6 sm:p-8 mb-8">
			<div class="flex flex-col sm:flex-row items-start sm:items-center gap-6">
				<!-- Avatar -->
				<div class="relative">
					{#if data.user?.auth_type === 'google' && data.user?.picture}
						<img
							src={data.user.picture}
							alt="Profile"
							class="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-primary/20 object-cover"
						/>
					{:else}
						<div
							class="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-primary/20 bg-gradient-to-br from-primary to-violet-500 flex items-center justify-center"
						>
							<span class="text-4xl sm:text-5xl font-bold text-white">
								{data.user?.email?.charAt(0).toUpperCase() || 'U'}
							</span>
						</div>
					{/if}
					<div
						class="absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-full border-4 border-background"
					></div>
				</div>

				<!-- User Info -->
				<div class="flex-1">
					<h1 class="text-3xl sm:text-4xl font-bold text-white mb-2">
						{data.user?.name || data.user?.email?.split('@')[0] || 'User'}
					</h1>
					<p class="text-gray-400 text-lg mb-3">{data.user?.email}</p>
					<div class="flex flex-wrap gap-2">
						<span
							class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20"
						>
							{data.user?.auth_type === 'google' ? 'Google Account' : 'Traditional Account'}
						</span>
						<span
							class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20"
						>
							Active Member
						</span>
					</div>
				</div>

				<!-- Action Buttons -->
				<div class="flex flex-col gap-3 w-full sm:w-auto">
					<a
						href="/"
						class="px-6 py-2.5 bg-secondary hover:bg-secondary/80 text-white rounded-lg transition-colors text-center font-medium"
					>
						Back to Home
					</a>
					<a
						href="/logout"
						class="px-6 py-2.5 bg-red-600/10 hover:bg-red-600/20 text-red-400 border border-red-600/20 hover:border-red-600/40 rounded-lg transition-colors text-center font-medium"
					>
						Logout
					</a>
				</div>
			</div>
		</div>

		<!-- Learning Stats -->
		<div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
			<div class="bg-card rounded-xl border border-gray-850 p-6">
				<div class="text-3xl font-bold text-primary mb-1">
					{learningStats.totalCourses}
				</div>
				<div class="text-gray-400 text-sm">Total Courses</div>
			</div>
			<div class="bg-card rounded-xl border border-gray-850 p-6">
				<div class="text-3xl font-bold text-green-400 mb-1">
					{learningStats.completedCourses}
				</div>
				<div class="text-gray-400 text-sm">Completed</div>
			</div>
			<div class="bg-card rounded-xl border border-gray-850 p-6">
				<div class="text-3xl font-bold text-orange-400 mb-1">
					{learningStats.inProgressCourses}
				</div>
				<div class="text-gray-400 text-sm">In Progress</div>
			</div>
			<div class="bg-card rounded-xl border border-gray-850 p-6">
				<div class="text-3xl font-bold text-violet-400 mb-1">
					{learningStats.totalHours}h
				</div>
				<div class="text-gray-400 text-sm">Learning Time</div>
			</div>
		</div>

		<!-- My Courses Section -->
		<div class="bg-card rounded-2xl border border-gray-850 p-6 sm:p-8 mb-8">
			<div class="flex items-center justify-between mb-6">
				<h2 class="text-2xl font-bold text-white">My Courses</h2>
				<a
					href="/courses"
					class="text-primary hover:text-primary/80 transition-colors font-medium text-sm"
				>
					Browse All Courses →
				</a>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each purchasedCourses as course}
					<div
						class="group bg-secondary/50 rounded-xl border border-gray-850 hover:border-primary/30 transition-all duration-300 overflow-hidden"
					>
						<!-- Course Image -->
						<div class="relative h-48 overflow-hidden">
							<img
								src={course.image}
								alt={course.title}
								class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
							/>
							{#if course.progress === 100}
								<div
									class="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold"
								>
									✓ Completed
								</div>
							{:else}
								<div
									class="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold"
								>
									{course.progress}%
								</div>
							{/if}
						</div>

						<!-- Course Info -->
						<div class="p-5">
							<h3 class="text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors">
								{course.title}
							</h3>

							<!-- Progress Bar -->
							<div class="mb-4">
								<div class="flex justify-between text-sm text-gray-400 mb-2">
									<span>{course.completedLessons} / {course.totalLessons} lessons</span>
									<span>{course.progress}%</span>
								</div>
								<div class="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
									<div
										class="h-full rounded-full transition-all duration-300 {course.progress === 100
											? 'bg-green-500'
											: 'bg-primary'}"
										style="width: {course.progress}%"
									></div>
								</div>
							</div>

							<!-- Action Button -->
							<a
								href="/courses/{course.id}"
								class="block w-full text-center px-4 py-2.5 bg-primary/10 hover:bg-primary hover:text-white text-primary rounded-lg transition-all duration-300 font-medium"
							>
								{course.progress === 100 ? 'Review Course' : 'Continue Learning'}
							</a>
						</div>
					</div>
				{/each}
			</div>

			{#if purchasedCourses.length === 0}
				<div class="text-center py-12">
					<div class="text-gray-500 mb-4">
						<svg
							class="w-20 h-20 mx-auto mb-4"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
							/>
						</svg>
					</div>
					<h3 class="text-xl font-bold text-white mb-2">No courses yet</h3>
					<p class="text-gray-400 mb-6">Start your learning journey today!</p>
					<a
						href="/courses"
						class="inline-block px-6 py-3 bg-primary hover:bg-primary/80 text-white rounded-lg transition-colors font-medium"
					>
						Explore Courses
					</a>
				</div>
			{/if}
		</div>

		<!-- Recent Activity (Optional) -->
		<div class="bg-card rounded-2xl border border-gray-850 p-6 sm:p-8">
			<h2 class="text-2xl font-bold text-white mb-6">Recent Activity</h2>
			<div class="space-y-4">
				<div class="flex items-start gap-4 pb-4 border-b border-gray-850 last:border-0">
					<div class="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
						<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
						</svg>
					</div>
					<div class="flex-1">
						<p class="text-white font-medium">Completed TypeScript Fundamentals</p>
						<p class="text-gray-400 text-sm">2 days ago</p>
					</div>
				</div>
				<div class="flex items-start gap-4 pb-4 border-b border-gray-850 last:border-0">
					<div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
						<svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
						</svg>
					</div>
					<div class="flex-1">
						<p class="text-white font-medium">Started Advanced SvelteKit Development</p>
						<p class="text-gray-400 text-sm">5 days ago</p>
					</div>
				</div>
				<div class="flex items-start gap-4 pb-4 border-b border-gray-850 last:border-0">
					<div class="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
						<svg class="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
						</svg>
					</div>
					<div class="flex-1">
						<p class="text-white font-medium">Purchased JavaScript Mastery Course</p>
						<p class="text-gray-400 text-sm">1 week ago</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
