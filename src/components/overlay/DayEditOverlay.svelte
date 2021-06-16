<script>
    export let currentDay;
    import { createEventDispatcher } from "svelte";
    import InlineInput from "svelte-inline-edit";

    const dispatch = createEventDispatcher();

    function handleOverlayClose() {
        dispatch("close");
    }

    function handleDayDelete() {
        dispatch("delete", {
            dayId: currentDay.id,
        });
    }

    //TODO 55 character limit to input

    function save() {
        if (currentDay.dayMessage.length > 55) {
            alert("please use less than 55 characters");
            currentDay.dayMessage = "- - -";
            return;
        }
        dispatch("save", {
            currentDay: currentDay,
            dayId: currentDay.id,
        });
    }

    window.addEventListener("keydown", (e) => {
        if (e.key == "Escape") {
            dispatch("close");
        }
    });
    document.body.style.overflow = "hidden";
</script>

<div class="fixed flex justify-center items-center w-screen overlay">
    <div
        class="flex justify-around items-start w-2/5 overlay-inside flex-col z-10 py-10"
    >
        <h2 class="item-info ml-14">
            day {currentDay.dayNumber} /<span class="font-normal">
                {currentDay.month}
                {currentDay.day}
            </span>
        </h2>
        <div class="flex w-full mb-10">
            <div class="flex flex-col w-full px-14">
                <span class="font-bold">what did I do today:</span>
                <InlineInput
                    bind:value={currentDay.dayMessage}
                    on:save={save}
                    title="Click to edit"
                />
                <span class="font-bold">wake up time:</span>
                <InlineInput
                    bind:value={currentDay.wakeup}
                    on:save={save}
                    title="Click to edit"
                    class="timeinput"
                    type="time"
                />
                <span class="font-bold">sleep time:</span>
                <InlineInput
                    bind:value={currentDay.sleep}
                    on:save={save}
                    title="Click to edit"
                    class="timeinput"
                    type="time"
                />
            </div>
        </div>
        <div class="pl-12">
            <button class="close-button" on:click={handleOverlayClose}
                >close</button
            >
            <button class="close-button" on:click={handleDayDelete}
                >delete</button
            >
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
        overflow-y: hidden;
    }

    .overlay-inside {
        background-color: #fff;
    }

    .close-button {
        border: 2px solid black;
        margin: 4px;
        padding: 2px 10px;
    }
    .item-info {
        padding: 0;
    }
    .timeinput {
        width: 80px !important;
    }
</style>
