<script>
    import JournalDaySmall from "../components/JournalDaySmall.svelte";
    import JournalNewDay from "../components/buttons/JournalNewDay.svelte";
    import Header from "../components/headers/Header.svelte";
    import HeaderTop from "../components/headers/HeaderTop.svelte";
    import { fade } from "svelte/transition";
    import DayEditOverlay from "../components/overlay/DayEditOverlay.svelte";

    function addDay() {
        dayId = dayId + 1;
        days.unshift({
            dayNumber: "",
            dayMessage: "- - -",
            wakeup: "00:00",
            sleep: "00:00",
            didTravel: false,
            id: dayId,
        });
        daysRender = days;
        console.log("Added day");
        console.log(days);
    }

    let days = [
        {
            dayNumber: "10239",
            dayMessage: "Started my minimalist journal",
            wakeup: "06:30",
            sleep: "11:00",
            didTravel: false,
            id: 0,
        },
        {
            dayNumber: "10240",
            dayMessage: "Lamen with friends",
            wakeup: "---",
            sleep: "00:00",
            didTravel: true,
            destination: "São Paulo",
            id: 1,
        },
        {
            dayNumber: "10241",
            dayMessage: "10k run",
            wakeup: "08:30",
            sleep: "11:00",
            didTravel: true,
            destination: "São Paulo",
            id: 2,
        },
        {
            dayNumber: "10242",
            dayMessage: "visited my parents",
            wakeup: "06:00",
            sleep: "11:00",
            didTravel: true,
            destination: "São Paulo",
            id: 3,
        },
        {
            dayNumber: "10243",
            dayMessage: "finished my thesis",
            wakeup: "06:00",
            sleep: "11:00",
            didTravel: true,
            destination: "São Paulo",
            id: 4,
        },
        {
            dayNumber: "10244",
            dayMessage: "Mcdonalds with Bob",
            wakeup: "06:00",
            sleep: "11:00",
            didTravel: false,
            id: 5,
        },
        {
            dayNumber: "10245",
            dayMessage: "Sunset by the beach",
            wakeup: "06:00",
            sleep: "11:00",
            didTravel: false,
            id: 6,
        },
    ];
    let daysRender = days.reverse();
    let showOverlay = false;
    let currentDay;
    let dayId = 6;

    function handleMessage() {
        showOverlay = false;
    }

    function handleDayEdit(n) {
        currentDay = daysRender.find((x) => x.id === n);
        console.log(n);
        console.log(currentDay);
        console.log(`editando dia ${currentDay.dayNumber}`);
        showOverlay = !showOverlay;
    }

    function handleDelete(event) {
        console.log(`deleting ${event.detail.dayId}`);
        daysRender.splice(daysRender.indexOf(currentDay), 1);
        daysRender = daysRender;
        showOverlay = !showOverlay;
    }
</script>

<Header />
<HeaderTop />
<div
    in:fade
    class="container mx-auto flex flex-wrap justify-items-around justify-start items-end pt-48"
>
    <div on:click={addDay} class="px-4 flex-none w-60 mb-11">
        <JournalNewDay />
    </div>

    {#each daysRender as day (day.id)}
        <div on:click={handleDayEdit(day.id)} class="px-4 flex-none w-60">
            <JournalDaySmall {...day} />
        </div>
    {/each}

    {#if showOverlay}
        <DayEditOverlay
            {currentDay}
            on:close={handleMessage}
            on:delete={handleDelete}
        />
    {/if}
</div>
