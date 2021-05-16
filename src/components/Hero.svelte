<script lang="ts">
    import JournalDay from "./JournalDay.svelte";
</script>

<main>
    <div class="py-24 container mx-auto h-screenh grid grid-cols-12 sm:grid-rows-2 md:grid-rows-1 gap-4 text-center md:text-right">
        <div class="col-span-12 md:col-span-6 my-auto sm:ml-4 2xl:ml-60">
            <h1 class="text-3xl md:text-6xl font-bold my-4">
                habits that stick
            </h1>
            <p class="text-lg md:text-3xl font-regular">
                track your goals and push yourself to form new habits.
            </p>
        </div>
        <div class="col-span-12 md:col-span-6 my-auto w-80 m-auto xl:ml-14">
            <JournalDay />
        </div>
    </div>
</main>
