<script>
    export let currentDay;
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function handleOverlayClose() {
        dispatch("close", {});
    }
    function handleDayDelete() {
        dispatch("delete", {
            dayId: currentDay.id
        });
    }
</script>

<div class="absolute flex justify-center items-center w-screen overlay">
    <div class="flex justify-center items-center w-2/5 overlay-inside flex-col z-10">
        <a href="">{currentDay.dayMessage}</a>
        <a href="">{currentDay.dayNumber}</a>
        <a href="">{currentDay.wakeup}</a>
        <a href="">{currentDay.sleep}</a>
        <a href="">{currentDay.id}</a>   
        <div>
            <button class="close-button" on:click={handleOverlayClose}>close</button>
            <button class="close-button" on:click={handleDayDelete}>delete</button>
        </div>
    </div>
</div>

<style global>
    .overlay {
        height: 100vh;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, 0.25);
    }

    .overlay-inside {
        height: 40vh;
        background-color: #fff;
    }

    .close-button {
        border: 2px solid black;
        margin: 4px;
        padding: 2px 10px;
    }
</style>
