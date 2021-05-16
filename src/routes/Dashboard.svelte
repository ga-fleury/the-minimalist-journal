<script>
    import JournalDaySmall from "../components/JournalDaySmall.svelte";
    import JournalNewDay from "../components/buttons/JournalNewDay.svelte";

    function addDay() {
        days.push({
            dayNumber: "",
            dayMessage: "",
            wakeup: "",
            sleep: "",
            didTravel: false,
        });
        console.log("Added day");
    }

    let days = [
        {
            dayNumber: "10239",
            dayMessage: "Started my minimalist journal",
            wakeup: "06:30",
            sleep: "11:00",
            didTravel: false,
        },
        {
            dayNumber: "10240",
            dayMessage: "Lamen with friends",
            wakeup: "---",
            sleep: "00:00",
            didTravel: true,
            destination: "São Paulo",
        },
        {
            dayNumber: "10241",
            dayMessage: "10k run",
            wakeup: "08:30",
            sleep: "11:00",
            didTravel: true,
            destination: "São Paulo",
        },
        {
            dayNumber: "10242",
            dayMessage: "visited my parents",
            wakeup: "06:00",
            sleep: "11:00",
            didTravel: true,
            destination: "São Paulo",
        },
        {
            dayNumber: "10243",
            dayMessage: "finished my thesis",
            wakeup: "06:00",
            sleep: "11:00",
            didTravel: true,
            destination: "São Paulo",
        },
        {
            dayNumber: "10244",
            dayMessage: "Mcdonalds with Bob",
            wakeup: "06:00",
            sleep: "11:00",
            didTravel: false,
        },
        {
            dayNumber: "10245",
            dayMessage: "Sunset by the beach",
            wakeup: "06:00",
            sleep: "11:00",
            didTravel: false,
        },
    ];
</script>

<div class="p-20" />
<div
    class="container mx-auto flex flex-wrap justify-items-between justify-start items-end"
>
    <div class="px-4 flex-none w-60 mb-7">
        <JournalNewDay on:click={addDay} />
    </div>

    {#each days.reverse() as day}
        <div class="px-4 flex-none w-60">
            <JournalDaySmall {...day} />
        </div>
    {/each}
</div>
