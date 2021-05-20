<script lang="ts">
    import { Link } from "svelte-routing";

    import lax from "lax.js";

    window.addEventListener(
        "scroll",
        function () {
            lax.init();

            lax.addDriver("scrollY", function () {
                return window.scrollY;
            });
        },
        { once: true }
    );

    var lastScrollTop = 0;

    // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    window.addEventListener(
        "scroll",
        function () {
            lax.addElements("#headerTop", {
                scrollY: {
                    opacity: [
                        [0, 68, 69],
                        [1, 1, 0],
                    ],
                },
            });

            // or window.addEventListener("scroll"....
            var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
            if (st > lastScrollTop) {
                // downscroll code
                lax.removeElements("#headerHide");
                lax.addElements("#headerHide", {
                    scrollY: {
                        translateY: [
                            [0, "elHeight"],
                            [0, -60],
                        ],
                    },
                });
            } else {
                // upscroll code
                lax.removeElements("#headerHide");
                lax.addElements("#headerHide", {
                    scrollY: {
                        translateY: [
                            [0, 68],
                            [-60, 0],
                        ],
                        opacity: [
                            [0, 69, 70],
                            [0, 0, 1],
                        ],
                    },
                });
            }
            lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        },
        false
    );
</script>

<div class="fixed w-full px-2 duration-300 bg-white" id="headerHide">
    <header
        class="container mx-auto my-4 h-16 flex items-center justify-between"
    >
        <Link to="/">
            <div class="">
                <p class="text-xl sm:text-3xl font-bold">
                    the minimalist journal <span class="font-normal">&nbsp; / &nbsp; blog</span>
                </p>
            </div>
        </Link>
        <div>
            <Link to="blog">
                <p class="text-base sm:text-lg inline pr-4">Blog</p>
            </Link>
            <Link to="how-it-works">
                <p class="text-base sm:text-lg inline pr-4">How it works</p>
            </Link>
            <button
                class="text-sm sm:text-base bg-transparent hover:bg-black text-gray-700 font-bold hover:text-white py-1 px-6 border-2 border-gray-500 hover:border-transparent rounded duration-300"
            >
                Login
            </button>
        </div>
    </header>
</div>
