<script>
    import JournalDaySmall2 from "../components/JournalDaySmall.svelte";
    import Header from "../components/headers/Header.svelte";
    import HeaderTop from "../components/headers/HeaderTop.svelte";
    import { fade } from "svelte/transition";
    import DayEditOverlay from "../components/overlay/DayEditOverlay.svelte";

    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    let date = new Date();
    let d = date.getDate();
    console.log(`mumber of days: ${d}`);
    let m = date.getMonth();

    let currentMonth = monthNames[m];
    console.log(currentMonth);

    let days = Array.from(Array(d - 1).keys());

    for (let i = 0; i < days.length; i++) {
        days[i] = {
            id: i,
            dayNumber: `${10242 + i}`,
            dayMessage: "- - -",
            wakeup: "06:00",
            sleep: "22:00",
            didTravel: false,
            month: monthNames[m],
            day: `${i + 1}th`,
        };
    }

    days[0].day = "1st";
    days[1].day = "2nd";
    days[2].day = "3rd";

    console.log();

    let daysRender = days.reverse();
    let showOverlay = false;
    let currentDay;

    function handleClose() {
        document.body.style.overflow = 'auto';
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

    function handleSave(event) {
        console.log(event);

        // this actually makes absolutely no sense. but don't touch it.
        daysRender.dayMessage = event.detail.currentDay.dayMessage;
        console.log(daysRender);
    }
</script>

<Header />
<HeaderTop />
<h1 class="container mx-auto pt-40 font-bold text-6xl pl-10 2xl:pl-4 mb-4">
    {currentMonth}
</h1>
<div
    in:fade
    class="container mx-auto flex flex-wrap justify-items-around justify-start items-end pl-8 2xl:pl-0"
>
    {#each daysRender as day (day.id)}
        <div on:click={handleDayEdit(day.id)} class="px-4 flex-none w-60">
            <JournalDaySmall2 {...day} />
        </div>
    {/each}

    {#if showOverlay}
        <DayEditOverlay
            {currentDay}
            on:close={handleClose}
            on:delete={handleDelete}
            on:save={handleSave}
        />
    {/if}
</div>
