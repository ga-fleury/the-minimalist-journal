<script>
    export let dayNumber;
    export let dayMessage;
    export let wakeup;
    export let sleep;
    export let didTravel;
    export let destination;
</script>

<!-- left to right wrap -->
<div class="flex items-end transform duration-300 cursor-pointer">
    <p class="-translate-y-12 translate-x-2 transform -rotate-90 text-xl font-bold absolute -mx-10">
        {dayNumber}
    </p>
    <!-- mid-section wrap -->
    <div class="flex flex-col items-between w-full">
        <!-- travel section  -->
        {#if didTravel}
            <div class="flex items-center justify-end">
                <span class="material-icons md-24">north_east</span>
                <p class="inline text-lg font-bold pb-0">{destination}</p>
            </div>
        {/if}
        <!-- travel section end -->
        <!-- border -->
        <div class="border-2 border-black aspect-w-1 aspect-h-1 w-full">
            <!-- day text div -->
            <div class="my-auto flex items-center justify-center">
                <p class="font-medium text-2xl my-auto mx-8 text-center">
                    {dayMessage}
                </p>
            </div>
            <!-- day text div end -->
        </div>
        <!-- border end -->
        <div class="flex items-center justify-between">
            <p class="inline text-lg font-bold">{wakeup}</p>
            <p class="inline text-lg font-bold">{sleep}</p>
        </div>
    </div>
    <!-- mid-section wrap end -->
</div>

<!-- left to right wrap end  -->
<style>
</style>
