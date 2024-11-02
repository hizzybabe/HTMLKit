<script>
    export let prevHref;
    export let nextHref;
</script>

<div class="flex justify-between items-center mt-8 border-t pt-4">
    <a 
        href="/html"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
        Back to Chapters
    </a>

    <div class="flex gap-4">
        <a 
            href={prevHref}
            class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
            Previous Chapter
        </a>
        <a 
            href={nextHref}
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
            Next Chapter
        </a>
    </div>
</div>
