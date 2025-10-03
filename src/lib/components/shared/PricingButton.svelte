<script lang="ts">
    export let className = '';
    export let href = '#';
    export let text = 'Unlock All Courses';
</script>

<a
	class="{className} group text-md hover:bg-violet-650 inline-block w-full rounded-full bg-violet-500 px-6 py-3 text-center font-medium text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
	role="button"
	href="{href}"
>
	{text}
</a>
