<script lang="ts">
    import JournalDay from "./JournalDay.svelte";
</script>

<main>
    <div class="container mx-auto h-screenh grid grid-cols-12 grid-rows-1 gap-4">
        <div class="col-span-6 my-auto ml-64">
            <h1 class="text-right text-6xl font-bold my-4">
                habits that stick
            </h1>
            <p class="text-right text-3xl font-regular">
                track your goals and push yourself to form new habits.
            </p>
        </div>
        <div class="col-span-6 my-auto mr-96 ml-10">
            <JournalDay />
        </div>
    </div>
</main>
