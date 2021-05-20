<script>
    let isOpen = true;
    const toggle = () => (isOpen = !isOpen);

    export let title;
    export let date;
    export let html;
</script>

<article>
    <!-- link article to /posts/$permalink -->
        <h1
            on:click={toggle}
            aria-expanded={isOpen}
            class="text-3xl md:text-3xl font-bold mt-0 mb-4 cursor-pointer"
        >
            {title}<span class="font-normal"
                >&nbsp; / &nbsp; <span class="whitespace-nowrap">{date}</span></span
            >
        </h1>
        
    {#if isOpen}
        <div class="md:px-20 py-4 max-w-xs lg:w-4/6">
            {@html html}
        </div>
    {/if}
</article>
