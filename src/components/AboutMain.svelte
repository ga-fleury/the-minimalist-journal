<script lang="ts">
    import lax from "lax.js";

    window.addEventListener(
        "scroll",
        function () {
            lax.init();

            // Add a driver that we use to control our animations
            lax.addDriver("scrollY", function () {
                return window.scrollY;
            });

            // Add animation bindings to elements
            lax.addElements("#squareborder", {
                scrollY: {
                    opacity: [
                        [0, 100, 600],
                        [1, 1, 0],
                    ],
                },
            });
            lax.addElements("#scrollWarning", {
                scrollY: {
                    opacity: [
                        [0, 2],
                        [1, 0],
                    ],
                },
            });
        },
        { once: true }
    );
</script>

<main>
    <div class="gigantic">
        <div
            class="container mx-auto h-full grid grid-cols-12 grid-rows-1 gap-4 sticky top-1/4"
        >
            <div class="col-span-6 my-auto ml-64 text-right">
                <div
                    class="flex items-center justify-end h-10 text-gray-400 duration-1000"
                    id="scrollWarning"
                >
                    <p class="inline pr-2">scroll down to see more</p>
                    <span class="material-icons md-18 animate-bounce"> arrow_downward </span>
                </div>
                <h1 class="text-right text-6xl font-bold my-4">how it works</h1>
                <p class="text-right text-3xl font-regular">
                    track your goals and push yourself to form new habits.
                </p>
            </div>
            <div class="col-span-6 my-auto mr-96 ml-10">
                <!-- journal day component dissected here for animation -->
                <main>
                    <!-- left to right wrap -->
                    <div
                        class="flex items-end transform hover:scale-105 duration-150 cursor-pointer"
                    >
                        <p
                            class="py-12 transform -rotate-90 text-2xl font-bold absolute -mx-14"
                            id="day-tag"
                        >
                            10860
                        </p>
                        <!-- mid-section wrap -->
                        <div class="flex flex-col items-between w-full">
                            <div
                                class="flex items-center justify-end"
                                id="travel-tag"
                            >
                                <span class="material-icons md-24"
                                    >north_east</span
                                >
                                <p class="inline text-2xl font-bold">
                                    São Paulo
                                </p>
                            </div>
                            <!-- border -->
                            <div
                                class="border-2 border-black aspect-w-1 aspect-h-1 w-full"
                                id="squareborder"
                            >
                                <!-- day text div -->
                                <div
                                    class="my-auto flex items-center justify-center"
                                >
                                    <p
                                        class="font-bold text-4xl my-auto mx-8 text-center"
                                        id="text-tag"
                                    >
                                        started my minimalist journal
                                    </p>
                                </div>
                                <!-- day text div end -->
                            </div>
                            <!-- border end -->
                            <div class="flex items-center justify-between">
                                <p
                                    class="inline text-2xl font-semibold"
                                    id="wake-tag"
                                >
                                    0630
                                </p>
                                <p
                                    class="inline text-2xl font-semibold"
                                    id="sleep-tag"
                                >
                                    1100
                                </p>
                            </div>
                        </div>
                        <!-- mid-section wrap end -->
                    </div>
                    <!-- left to right wrap end  -->
                </main>
                <!-- journal day component end -->
            </div>
        </div>
    </div>
</main>

<style>
    .gigantic {
        height: 5000px;
    }
</style>
